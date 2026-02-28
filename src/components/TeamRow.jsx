import React from 'react';

const TeamRow = ({ name, task, status, avatar }) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center gap-4">
      <img src={avatar || `https://i.pravatar.cc/150?u=${name}`} className="w-14 h-14 rounded-full border-2 border-white shadow-soft" />
      <div className="ml-1">
        <p className="text-[17px] font-black tracking-tight">{name}</p>
        <p className="text-[12px] text-slate-400 font-medium mt-1">Working on <span className="text-slate-600 font-bold">{task}</span></p>
      </div>
    </div>
    <span className={`text-[11px] px-4 py-1.5 rounded-lg font-black tracking-tight ${
      status === 'Completed' ? 'bg-green-50 text-green-600' : 
      status === 'Pending' ? 'bg-red-50 text-red-400' : 'bg-orange-50 text-orange-400'
    }`}>{status}</span>
  </div>
);

export default TeamRow;