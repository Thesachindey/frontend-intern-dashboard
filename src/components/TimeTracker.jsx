import React from 'react';
import { motion } from 'framer-motion';

const TimeTracker = () => {
  return (
    <div
      className="
        bg-donezo-accent text-white
        p-4 sm:p-5
        rounded-4xl
        relative overflow-hidden
        min-h-[160px] sm:min-h-[176px]
        flex flex-col justify-between
        shadow-soft
        border border-white/5
      "
    >
      {/* BACKGROUND WAVES */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,80 C30,60 70,100 110,80 C150,60 180,100 210,80"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
            animate={{ x: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <path
            d="M0,90 C30,70 70,110 110,90 C150,70 180,110 210,90"
            stroke="white"
            strokeWidth="1"
            opacity="0.3"
            fill="transparent"
          />
        </svg>
      </div>

      {/* HEADER */}
      <div className="relative z-10">
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest opacity-60 mb-1">
          Time Tracker
        </p>
        <h2 className="text-2xl sm:text-3xl font-mono font-bold tracking-tight leading-none">
          01:24:08
        </h2>
      </div>

      {/* CONTROLS */}
      <div className="flex gap-3 z-10 relative">
        {/* PAUSE */}
        <button
          className="
            w-10 h-10 sm:w-11 sm:h-11
            flex items-center justify-center
            bg-white/10 hover:bg-white/20
            rounded-full
            transition-all
            backdrop-blur-md
          "
        >
          <div className="w-3 h-3 bg-white rounded-[1px]" />
        </button>

        {/* RECORD */}
        <button
          className="
            w-10 h-10 sm:w-11 sm:h-11
            flex items-center justify-center
            bg-[#FF5F5F] hover:bg-[#ff4d4d]
            rounded-full
            shadow-lg shadow-red-900/40
            transition-all
          "
        >
          <div className="w-4 h-4 bg-white rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;