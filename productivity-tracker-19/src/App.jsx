import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem';

const App = () => {

  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="min-h-screen bg-indigo-50/30 py-12 px-4">
      <div className="max-w-md mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-900 mb-2 tracking-tight">
            Productivity Tracker
          </h1>
          <p className="text-indigo-600 font-medium">Day 19: Build the Core 🎯</p>

        </header>

        {/* Input Section */}
        <TaskInput onAddTask={addTask} />

        {/* task list */}
        <div className='space-y-2'>
          {tasks.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-400 text-lg">No tasks for today. Chill or grind? ☕</p>
            </div>
          ) : (
            tasks.map((task) => (
              <TaskItem key={task.id} task={task}/>
            ))
          ) }
        </div>

      </div>
    </div>
  )
}

export default App