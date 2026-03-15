import React from 'react'

const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`flex items-center justify-between p-4 bg-white shadow-sm rounded-xl mb-3 border-l-4 transition-all ${task.completed ? "border-green-500 opacity-60 " : "border-indigo-500"}`}>

            <span className={`flex-1 font-medium ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
                {task.text}</span>

            <div className="flex gap-3 text-sm">
                <button
                    onClick={() => onToggle(task.id)}
                    className={`px-3 py-1 rounded-lg text-sm font-bold transition-colors ${task.completed ? "bg-gray-100 text-gray-500" : "bg-green-100 text-green-600 hover:bg-green-200"
                        }`}>{task.completed ? "Undo" : "Done"}</button>

                <button
                onClick={() => onDelete(task.id)} className="bg-red-50 text-red-500 px-3 py-1 rounded-lg text-sm font-bold hover:bg-red-100 transition-colors">Delete</button>
            </div>
        </div>
    )
}

export default TaskItem