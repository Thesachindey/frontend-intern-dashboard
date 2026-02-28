import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const StatCard = ({ title, value, trend, primary = false }) => {
  return (
    <div
      className={`
        p-4 sm:p-6
        rounded-[2rem]
        shadow-sm
        flex flex-col justify-between
        h-auto min-h-[140px] sm:min-h-[160px]
        transition-transform duration-200
        hover:scale-[1.02]
        ${
          primary
            ? 'bg-[#1B5E3F] text-white'
            : 'bg-white text-slate-800 border border-slate-100'
        }
      `}
    >
      {/* TOP */}
      <div className="flex justify-between items-start">
        <p
          className={`text-xs sm:text-sm font-medium ${
            primary ? 'opacity-80' : 'text-slate-500'
          }`}
        >
          {title}
        </p>

        <div
          className={`p-1.5 sm:p-2 rounded-full ${
            primary ? 'bg-white/10' : 'border border-slate-200'
          }`}
        >
          <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
        </div>
      </div>

      {/* VALUE */}
      <div>
        <h3 className="text-3xl sm:text-4xl font-bold mb-1 leading-none">
          {value}
        </h3>

        <div className="flex flex-wrap items-center gap-1.5">
          <span
            className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md font-medium ${
              primary
                ? 'bg-white/20 text-white'
                : 'bg-[#F0FDF4] text-[#1B5E3F] border border-[#DCFCE7]'
            }`}
          >
            {trend}
          </span>

          <span
            className={`text-[10px] sm:text-[11px] ${
              primary ? 'opacity-60' : 'text-slate-400'
            }`}
          >
            from last month
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;