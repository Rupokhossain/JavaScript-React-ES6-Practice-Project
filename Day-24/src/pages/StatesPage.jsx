import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const StatesPage = () => {
  const [tasks] = useLocalStorage("tasks_key", []);
  
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-indigo-700">Your Performance 📊</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-blue-500">
          <p className="text-gray-400">Total Tasks</p>
          <h3 className="text-3xl font-bold text-amber-600">{total}</h3>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-green-500">
          <p className="text-gray-400">Completed</p>
          <h3 className="text-3xl font-bold text-green-600">{completed}</h3>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-yellow-500">
          <p className="text-gray-400">Pending</p>
          <h3 className="text-3xl font-bold text-yellow-600">{pending}</h3>
        </div>
      </div>
    </div>
  );
};
export default StatesPage;