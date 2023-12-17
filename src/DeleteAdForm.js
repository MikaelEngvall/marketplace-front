import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { baseURL } from "./util/constants";
import axios from "axios";

const DeleteAd = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [adDetails, setAdDetails] = useState(null);

    useEffect(() => {
        const fetchAdDetails = async () => {
            try {
                const response = await axios.get(`${baseURL}/advertisement/findById?id=${id}`);
                if (response.status === 200) {
                    setAdDetails(response.data);  // Use response.data directly
                } else {
                    console.error('Error fetching ad details');
                }
            } catch (error) {
                console.error('Error fetching ad details:', error);
            }
        };

        fetchAdDetails();
    }, [id]);


    const handleDelete = async () => {
        try {
            const response = await axios.put(`${baseURL}/advertisement/deleteById?id=${id}`);
            console.log(response.status);
            if (response.status === 204) {
                console.log('Ad deleted successfully');
                // Navigate back to the AdsList page
                navigate('/adsList');
            } else {
                console.error('Error deleting ad');
            }
        } catch (error) {
            console.error('Error deleting ad:', error);
        }
    };


    return (
        <div className="container mt-4">
            <h2>Delete Ad</h2>
            {adDetails ? (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{adDetails.title}</h5>
                        <p className="card-text">{adDetails.description}</p>
                        <p className="card-text">Added: {adDetails.addedDate}</p>
                        <p className="card-text">Expires: {adDetails.expirationDate}</p>
                        {/* Add any other details you want to display */}
                        <form onSubmit={handleDelete}>
                            {/* Your delete form elements go here */}
                            <button type="submit" className="btn btn-danger">Delete Ad</button>
                        </form>
                    </div>
                </div>
            ) : (
                <p>Loading ad details...</p>
            )}
        </div>
    );
};

export default DeleteAd;
