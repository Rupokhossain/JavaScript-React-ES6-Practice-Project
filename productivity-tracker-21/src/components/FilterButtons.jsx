import React from 'react'

const FilterButtons = ({ currentFilter, onFilterChnage }) => {

  const filters = ["All", "Pending", "completed"];

  return (
    <div className="flex justify-center gap-2 mb-4">
      {filters.map((f) => (
        <button key={f}
          onClick={() => onFilterChnage(f)}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${currentFilter === f
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-white text-indigo-400 hover:bg-indigo-50"
            }`}>
          {f}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons