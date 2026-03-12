import React, { useEffect, useState } from 'react'

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        console.log("useEffect call hoyeche!");

        const fetchPost = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");

                if (!response.ok) throw new Error("There was a problem fetching data!")

                const data = await response.json();

                console.log("The data has arrived. Now updating the state...");
                setPosts(data.slice(0, 12));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, []);

    const filterdPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className='min-h-screen bg-gray-100 p-8'>
            <div className='max-w-5xl mx-auto'>
                <h1 className='text-4xl font-bold text-center text-indigo-700 mb-8'>Day-18: React Posts Explorer</h1>
            </div>

            {/* search bar */}
            <div>
                <input type="text"
                    placeholder='Search posts by title...'
                    className="w-full max-w-md p-3 rounded-lg border-2 border-indigo-300 focus:outline-none focus:border-indigo-600 shadow-sm mb-12"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

            </div>

            {/* Loading State */}
            {loading && (
                <div className='text-center py-10'>
                    <div className='animate-spin inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full'></div>
                    <p className="mt-2 text-blue-500">Loading...</p>
                </div>
            )}
            {error && <div className='p-4 bg-red-100 text-red-600 rounded-md mb-4'>{error}</div>}

            {/* re-render */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    filterdPosts.map((post) => (
                        <div key={post.id} className="p-5 bg-white shadow-md rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition my-4">
                            <h2 className="font-bold text-lg capitalize mb-2">{post.title}</h2>
                            <p className="text-gray-600 text-sm">{post.body.substring(0, 80)}...</p>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default Posts