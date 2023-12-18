import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
    const navigate = useNavigate();

    // State to manage form data
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
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
                'http://localhost:8080/user',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Assuming a successful response status is 2xx
            if (response.status >= 200 && response.status < 300) {
                // User created successfully
                // Navigate to the login page or any other page
                navigate('/login');
            } else {
                // Handle error scenarios
                console.error('Failed to create user:', response.statusText);
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error creating user:', error.message);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Sign Up</h5>
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

                    {/* First Name input field */}
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Last Name input field */}
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
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
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
