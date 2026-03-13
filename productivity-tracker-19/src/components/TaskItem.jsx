import React from 'react'

const TaskItem = ({ task }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-sm rounded-xl mb-3 border-l-4 border-indigo-500 hover:shadow-md transition-shadow">
            <span className="text-gray-800 font-medium">{task.text}</span>
            <div className="flex gap-3 text-sm">
                <button className="text-indigo-400 hover:text-indigo-600 font-semibold">Done</button>
                <button className="text-red-400 hover:text-red-600 font-semibold">Delete</button>
            </div>
        </div>
    )
}

export default TaskItem