import React, { useState } from 'react'

const LoginForm = () => {


    // 1.input data rakhar jonno
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // error state
     const [errors, setErrors] = useState({});

    // 2. input change handle
    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name);
        console.log(value);

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // 3. validation logic
    const validate = () => {
        let newErrors = {};
        if(!formData.email.includes("@")) {
            newErrors.email = "Please enter a valid email."
        }

        if(formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long!"

        }
        return newErrors;
    };

    // submint handle
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert("Login Done!");
            console.log("Submitted Data: ", formData);
        }
    }
    




    return (
        <div style={formStyle}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div>
                    <label>Email:</label> <br />
                    <input
                        type="text"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email}</p>}
                </div>

                {/* Password Input */}
                <div>
                    <label>Password:</label> <br />
                    <input
                        type="password"
                        name='password'
                        style={inputStyle}
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p style={errorStyle}>{errors.password}</p>}
                </div>

                <button type='submit' style={btnStyle}>Login</button>
            </form>
        </div>
    )
}

// style
const formStyle = { maxWidth: "300px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" };
const inputStyle = { width: "95%", padding: "8px", marginTop: "5px" };
const btnStyle = { width: "100%", padding: "10px", marginTop: "20px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" };
const errorStyle = { color: "red", fontSize: "12px", margin: "5px 0" };

export default LoginForm