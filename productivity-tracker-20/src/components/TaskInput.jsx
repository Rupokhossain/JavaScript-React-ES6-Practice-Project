import React, { useState } from 'react'

const TaskInput = ({onAddTask}) => {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim === "") return;
        onAddTask(text);
        setText(""); 
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-8 mt-4">
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 p-3 border-2 border-indigo-100 rounded-xl focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
                placeholder="Add a new goal..."
            />
            <button 
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-md cursor-pointer"
            >Add</button>
        </form>
    )
}

export default TaskInput