import React from 'react'

const UserCard = ({name, role, bio}) => {
  return (
    <div style={cardStyle}>
        <h2>{name}</h2>
        <p><strong>Role:</strong> {role}</p>
        <p>{bio}</p>
        <button style={btnStyle}>View Profile</button>
    </div>
  )
}


const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "20px",
  margin: "10px",
  width: "250px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  textAlign: "center"
};

const btnStyle = {
  backgroundColor: "#667eea",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  cursor: "pointer"
};
export default UserCard