import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem';
import Stats from './components/Stats';
import FilterButtons from './components/FilterButtons';

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");   // all completed, pending

  // --- task filter (derived state) ---
  const filteredTasks = tasks.filter((task) => {
    if(filterStatus === "Completed") return task.completed;
    if(filterStatus === "Pending") return !task.completed;
    return true;  // "all er jonno shob dekhabe"
  });

  // --- calculation (derived state)
  const totalTask = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const percentage = totalTask === 0 ? 0 : Math.round((completedTasks / totalTask) * 100);




  // notun task jog korar logic
  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // unique id genaret
      text: text,
      completed: false,
    };

    // new task add kora
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
      const filteredTask = tasks.filter((task) => task.id !== id);
      setTasks(filteredTask);
  };

  // toggle task
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => task.id === id ? {...task, completed : !task.completed} : task);
    setTasks(updatedTasks); 
  };

  return (
    <div className="min-h-screen bg-indigo-50/30 py-12 px-4">
      <div className="max-w-md mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-900 mb-2 tracking-tight">
            Productivity Tracker
          </h1>
          <p className="text-indigo-600 font-medium">Day 19: Build the Core 🎯</p>

        </header>

        {/* Progrees bar or status */}
        <Stats percentage ={percentage} total={totalTask}/>



        {/* Input Section */}
        <TaskInput onAddTask={addTask} />


        {/* New: Filter button */}
        <FilterButtons currentFilter={filterStatus} onFilterChnage={setFilterStatus}/>

        {/* task list */}
        <div className='space-y-2'>
          {tasks.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-400 text-lg">No tasks for today. Chill or grind? ☕</p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <TaskItem 
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTask}/>
            ))
          ) }
        </div>

      </div>
    </div>
  )
}

export default App