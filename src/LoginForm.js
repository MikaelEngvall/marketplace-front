import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const navigate = useNavigate();

    // State to manage form data
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8080/user/login',
                formData,
            );

            // Assuming a successful response status is 2xx
            if (response.status >= 200 && response.status < 300) {
                // Login successful
                // Navigate to the create advertisement page or any other page
                navigate('/create-ad');
            } else {
                // Handle error scenarios
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error during login:', error.message);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Login</h5>
                <form>
                    {/* Email input field */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password input field */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
