import React from 'react';
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isOpen = false, onClose }) => {
  const { logout } = useAuth();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <CheckSquare size={20} />, label: 'Tasks', badge: '12+' },
    { icon: <Calendar size={20} />, label: 'Calendar' },
    { icon: <BarChart2 size={20} />, label: 'Analytics' },
    { icon: <Users size={20} />, label: 'Team' },
  ];

  return (
    <>
      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {(isOpen || typeof window !== 'undefined') && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="
              fixed lg:static
              z-50 lg:z-auto
              top-0 left-0
              w-64
              h-screen lg:h-[calc(100vh-2rem)]
              m-0 lg:m-4
              bg-white
              rounded-none lg:rounded-4xl
              p-6
              flex flex-col
              shadow-soft
              border border-slate-50
              overflow-x-hidden
            "
          >
            {/* MOBILE HEADER */}
            <div className="flex items-center justify-between lg:hidden mb-6">
              <span className="text-xl font-black">Donezo</span>
              <button onClick={onClose}>
                <X />
              </button>
            </div>

            {/* BRAND */}
            <div className="hidden lg:flex items-center gap-3 mb-10 px-2">
              <div className="w-9 h-9 bg-donezo-dark rounded-xl flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <span className="text-2xl font-black tracking-tight">Donezo</span>
            </div>

            {/* MENU */}
            <div className="flex-1 space-y-8 overflow-y-auto no-scrollbar">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-5 px-3">
                  Menu
                </p>

                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ backgroundColor: '#F8FAFC' }}
                      transition={{ duration: 0.15 }}
                      className={`relative flex items-center justify-between p-3.5 rounded-2xl cursor-pointer ${
                        item.active
                          ? 'bg-donezo-bg text-donezo-dark font-bold'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {/* ACTIVE INDICATOR (SAFE) */}
                      {item.active && (
                        <div className="absolute inset-y-0 left-1 w-1 bg-donezo-dark rounded-full" />
                      )}

                      <div className="flex items-center gap-3.5 pl-3">
                        {item.icon}
                        <span className="text-sm">{item.label}</span>
                      </div>

                      {item.badge && (
                        <span className="text-[10px] bg-donezo-dark text-white px-2 py-0.5 rounded-lg font-bold">
                          {item.badge}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* GENERAL */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-5 px-3">
                  General
                </p>

                <nav className="space-y-2">
                  <SidebarItem icon={<Settings size={20} />} label="Settings" />
                  <SidebarItem icon={<HelpCircle size={20} />} label="Help" />
                  <SidebarItem
                    icon={<LogOut size={20} />}
                    label="Logout"
                    danger
                    onClick={logout}
                  />
                </nav>
              </div>
            </div>

            {/* PROMO */}
            <div className="mt-6 bg-gradient-to-br from-donezo-accent to-donezo-dark p-5 rounded-3xl text-white">
              <h4 className="text-sm font-bold mb-1">
                Download Mobile App
              </h4>
              <p className="text-xs opacity-70 mb-3">
                Get things done on the go
              </p>
              <button className="w-full py-2 bg-white text-donezo-dark text-xs font-bold rounded-xl">
                Download
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

const SidebarItem = ({ icon, label, danger, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3.5 p-3.5 rounded-2xl cursor-pointer transition-colors ${
      danger
        ? 'text-slate-400 hover:bg-red-50 hover:text-red-500'
        : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
    }`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

export default Sidebar;