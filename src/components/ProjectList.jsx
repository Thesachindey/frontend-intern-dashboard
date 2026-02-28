import React from 'react';

const ProjectList = () => {
  const tasks = [
    { name: "Develop API Endpoints", date: "Nov 26, 2024", color: "text-blue-500", icon: "🔗" },
    { name: "Onboarding Flow", date: "Nov 28, 2024", color: "text-teal-500", icon: "🟢" },
    { name: "Build Dashboard", date: "Nov 30, 2024", color: "text-yellow-500", icon: "✨" },
    { name: "Optimize Page Load", date: "Dec 5, 2024", color: "text-orange-500", icon: "⚡" },
    { name: "Cross-Browser Testing", date: "Dec 6, 2024", color: "text-purple-500", icon: "🧪" },
  ];
  return (
    <div className="bg-white p-8 rounded-4xl shadow-soft">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold text-xl tracking-tight">Project</h3>
        <button className="text-[11px] font-bold px-4 py-1.5 border border-slate-100 rounded-lg hover:bg-slate-50">+ New</button>
      </div>
      <div className="space-y-7">
        {tasks.map((task, i) => (
          <div key={i} className="flex gap-5 items-start">
            <div className={`text-2xl ${task.color} pt-1`}>{task.icon}</div>
            <div className="space-y-0.5">
              <p className="text-[15px] font-black text-slate-800 tracking-tight">{task.name}</p>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">Due date: {task.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;