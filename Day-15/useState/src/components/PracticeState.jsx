import React, { useState } from 'react'

const PracticeState = () => {

    // state declare 
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [isVisible, setIsVisible] = useState(true)
 
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}>
        
        {/* counter section */}
        <div style={{ marginBottom: "30px" }}>
            <h3>1. Counter: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment (+)</button>
            <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
        </div>

        {/* Toggle Button section */}
        <div style={{ marginBottom: "30px" }}>
            <h3>2. Toggle Button</h3>
            <button onClick={() => setIsOn(!isOn)} style={{ backgroundColor: isOn ? "green" : "red", color: "white" }}>{isOn ? "ON": "OFF"}</button>
        </div>

        {/* show/hide text section */}
        <div style={{ marginBottom: "30px" }}>
            <h3>3. Show/Hide Text</h3>
            <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide Message" : "Show Message"}</button>

            {/* conditional rendering */}

            {isVisible && <p style={{ color: "blue" }}>Hello! I am a secret message.</p>}
        </div>

    </div>
  )
}

export default PracticeState