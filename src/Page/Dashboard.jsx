import React, { useEffect, useState } from 'react';
import { Search, Bell, Plus, Mail } from 'lucide-react';

// Internal Imports
import { useAuth } from '../context/AuthContext';
import { fetchDashboardData } from '../services/api';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import AnalyticsChart from '../components/AnalyticsChart';
import TimeTracker from '../components/TimeTracker';
import TeamRow from '../components/TeamRow';
import ProjectList from '../components/ProjectList';
import ProjectProgress from '../components/ProjectProgress';

const Dashboard = () => {
  const { token } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const result = await fetchDashboardData(token);
        setData(result);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    getDashboardData();
  }, [token]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-donezo-bg">
      <span className="loading loading-spinner loading-lg text-donezo-dark"></span>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-donezo-bg p-4 lg:p-6 font-sans text-slate-900 overflow-hidden">
      <Sidebar />

      {/* Main Container - Constrained to 1600px to fix stretching */}
      <main className="flex-1 ml-0 lg:ml-8 max-w-[1600px] mx-auto overflow-y-auto pr-2 custom-scrollbar">
        
        {/* --- HEADER --- */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
          <div className="relative w-full lg:w-[400px]">
            <input 
              type="text" 
              placeholder="Search task" 
              className="w-full py-3.5 px-12 rounded-2xl bg-white border-none shadow-soft focus:ring-2 focus:ring-donezo-dark transition-all"
            />
            <Search className="absolute left-4 top-4 text-slate-300" size={18} />
            <div className="absolute right-4 top-3.5 border border-slate-100 rounded-lg px-2 py-0.5 text-[10px] text-slate-300 font-bold">⌘ F</div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              <button className="p-3.5 bg-white rounded-2xl shadow-soft text-slate-400 hover:text-donezo-dark transition-colors">
                <Mail size={20} />
              </button>
              <button className="p-3.5 bg-white rounded-2xl shadow-soft text-slate-400 hover:text-donezo-dark transition-colors">
                <Bell size={20} />
              </button>
            </div>
            <div className="flex items-center gap-3 border-l border-slate-100 pl-6 ml-2">
              <div className="text-right">
                <p className="text-sm font-black leading-none">Totok Michael</p>
                <p className="text-[11px] text-slate-400 font-bold mt-1.5 uppercase tracking-tighter">tmichael20@mail.com</p>
              </div>
              <img src="https://i.pravatar.cc/150?u=totok" className="w-12 h-12 rounded-2xl border-2 border-white shadow-soft object-cover" alt="profile" />
            </div>
          </div>
        </header>

        {/* --- TITLE SECTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10">
          <div>
            <h1 className="text-5xl font-black mb-1.5 tracking-tighter">Dashboard</h1>
            <p className="text-slate-400 text-base font-medium">Plan, prioritize, and accomplish your tasks with ease.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-donezo-dark text-white px-6 py-3.5 rounded-2xl flex items-center gap-2 font-bold hover:bg-donezo-accent transition-all shadow-lg shadow-donezo-dark/20">
              <Plus size={20} /> Add Project
            </button>
            <button className="bg-white border border-slate-50 px-6 py-3.5 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-soft text-slate-700">
              Import Data
            </button>
          </div>
        </div>

        {/*  GRID (12 Columns)*/}
        <div className="grid grid-cols-12 gap-8 pb-10">
          
          {/* LEFT & CENTER CONTENT (8 COLUMNS) */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="Total Projects" value={data?.stats?.total || "24"} trend="5% Increased" primary />
              <StatCard title="Ended Projects" value={data?.stats?.ended || "10"} trend="6% Increased" />
              <StatCard title="Running Projects" value={data?.stats?.running || "12"} trend="2% Increased" />
              <StatCard title="Pending Project" value={data?.stats?.pending || "2"} trend="On Discuss" />
            </div>
            

            {/* Middle Row: Analytics & Reminders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-4xl shadow-soft min-h-[320px]">
                 <h3 className="font-bold text-xl mb-8 tracking-tight">Project Analytics</h3>
                 <AnalyticsChart />
               </div>
               
               <div className="bg-white p-8 rounded-4xl shadow-soft min-h-[320px] flex flex-col justify-between">
                  <h3 className="font-bold text-xl mb-6 tracking-tight">Reminders</h3>
                  <div className="bg-[#F8FDFB] p-7 rounded-3xl border border-[#E8F5F1] flex-1 flex flex-col justify-center">
                    <div>
                      <p className="text-base font-black text-donezo-dark leading-tight">Meeting with Arc Company</p>
                      <p className="text-[12px] text-slate-400 font-bold mt-2 uppercase tracking-wide">Time : 02.00 pm - 04.00 pm</p>
                    </div>
                    <button className="w-full bg-donezo-dark text-white py-4 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold shadow-lg shadow-donezo-dark/10">
                      📹 Start Meeting
                    </button>
                  </div>
               </div>
            </div>

            {/* Team Collaboration */}
            <div className="bg-white p-10 rounded-4xl shadow-soft">
              <div className="flex justify-between items-center mb-10">
                <h3 className="font-bold text-2xl tracking-tight">Team Collaboration</h3>
                <button className="text-[12px] text-slate-500 font-bold border border-slate-100 px-6 py-2.5 rounded-xl hover:bg-slate-50 transition-all">+ Add Member</button>
              </div>
              <div className="space-y-8">
                {data?.team?.map((member, i) => (
                  <TeamRow key={i} {...member} />
                ))}
              </div>
            </div>
          </div>

          {/*  RIGHT ACTIVITY SIDEBAR (4 COLUMNS) */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
             <ProjectList />
             <ProjectProgress percentage={41} />
             <TimeTracker />
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;