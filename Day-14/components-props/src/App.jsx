import React from 'react'
import UserCard from './components/UserCard'

const App = () => {

  const users = [
    { id: 1, name: "Rupok", role: "Frontend Dev", bio: "Learning React in 25 days." },
    { id: 2, name: "Anis", role: "Designer", bio: "Passionate about UI/UX." },
    { id: 3, name: "Karim", role: "Backend Dev", bio: "Expert in Node.js and SQL." }
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "50px" }}>
      <h1>Team Member: </h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {
          users.map((user) => (
            <UserCard 
            key={user.id}
            name={user.name}
            role={user.role}
            bio={user.bio}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App