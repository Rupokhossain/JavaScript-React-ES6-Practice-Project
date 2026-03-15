import React from 'react'

const Stats = ({percentage, total}) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 border border-indigo-100">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold text-indigo-900">Your Progress</span>
        <span className="text-sm font-extrabold text-indigo-600">{percentage}%</span>
      </div>
      
      {/* Progress bar */}
      <div className="w-full bg-indigo-50 rounded-full h-3 overflow-hidden">
        <div 
          className="bg-indigo-600 h-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="text-xs text-gray-400 mt-3 text-center">
        {total === 0 ? "Add your first task to start!" : `Total tasks: ${total}`}
      </p>
    </div>
  )
}

export default Stats