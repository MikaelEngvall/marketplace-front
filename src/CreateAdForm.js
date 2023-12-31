import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateAdForm = () => {
    const navigate = useNavigate();

    // State to manage form data
    const [formData, setFormData] = useState({
        title: '',
        description: '',
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
                'http://localhost:8080/advertisement?email=mikael@engvall.org',
                formData,
            );
            if (response.status >= 200 && response.status < 300) {
                navigate('/adsList');
            } else {
                console.error('Failed to create advertisement:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating advertisement:', error.message);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Create Advertisement</h5>
                <form>
                    {/* Title input field */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Description input field */}
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                        Create Ad
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateAdForm;