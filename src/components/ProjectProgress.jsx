import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ProjectProgress = ({ percentage = 41 }) => {
  const data = [{ value: percentage }, { value: 100 - percentage }];
  return (
    <div className="bg-white p-8 rounded-4xl shadow-soft flex flex-col items-center min-h-[300px]">
      <h3 className="w-full font-bold text-xl mb-6 tracking-tight">Project Progress</h3>
      <div className="h-44 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="100%" startAngle={180} endAngle={0} innerRadius={70} outerRadius={95} paddingAngle={0} dataKey="value" stroke="none">
              <Cell fill="#1B5E3F" />
              <Cell fill="#E2E8F0" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
          <span className="text-5xl font-black tracking-tighter">{percentage}%</span>
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">Project Ended</span>
        </div>
      </div>
      <div className="flex justify-between w-full mt-8 px-2">
        <div className="flex items-center gap-2 text-[11px] font-bold">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1B5E3F]"/> Completed
        </div>
        <div className="flex items-center gap-2 text-[11px] font-bold">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2a6a45]"/> In Progress
        </div>
        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-300">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200"/> Pending
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;