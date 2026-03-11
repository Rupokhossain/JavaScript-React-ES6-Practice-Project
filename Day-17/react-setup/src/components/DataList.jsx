import React, { useState } from 'react'

const DataList = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // data anar function
    const handleFetchData = async () => {
        setIsLoading(true);
        setError(null);
        setItems([]);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            if(!response.ok) {
                throw new Error("Data ante bertho hoyeche!");
            }

            const data = await response.json();

            setTimeout(() => {
                setItems(data.slice(0, 5));
                setIsLoading(false)
            }, 2000)
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    return (
        <div style={{ padding: "30px", textAlign: "center", fontFamily: "Arial" }}>
            <h1>Smart Content Loader</h1>

            {/* data anar button */}
            {
                !isLoading && (
                    <button onClick={handleFetchData} style={btnStyle}>
                        {items.length > 0 ? "Refresh Data" : "Load Data"}
                    </button>
                )
            }

            <hr style={{ margin: "20px 0" }} />



            {/* ====Conditional rendering starts here ====*/}


            {/* loading state (logical and) */}
            {isLoading && (
                <div>
                    <div className='spinner'></div>
                    <p style={{ color: "blue" }}>Connect Server...</p>
                </div>
            )}

            {/* error state (logical AND) */}
            {error && !isLoading && (
                <div style={{ color: "red", padding: "10px", background: "#ffdada" }}>
                    <h3>Error: {error}</h3>
                    <p>Please check your Internet!</p>
                </div>
            )}

            {/* success/empty state (ternary operator) */}
            {!isLoading && !error && (
                <div>
                    {items.length === 0 ? (
                        <div style={{ color: "#777", padding: "20px", border: "1px dashed #ccc" }}>
                            <p>Cart is empty! Click the button above to load data.</p>
                        </div>
                    ) : (
                        <div style={{ textAlign: "left", maxWidth: "400px", margin: "0 auto" }}>
                            <h3>Data found: </h3>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {items.map((item) => (
                                    <li key={item.id} style={itemStyle}>
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                    }
                </div>
            )}

        </div>
    )
}

const btnStyle = { padding: "10px 25px", fontSize: "16px", cursor: "pointer", background: "#007bff", color: "white", border: "none", borderRadius: "5px" };
const itemStyle = { padding: "10px", background: "#f4f4f4", marginBottom: "5px", borderRadius: "4px" };

export default DataList