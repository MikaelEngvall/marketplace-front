import React from 'react';
import { useNavigate } from 'react-router-dom';

const Ad = ({ Advertisements }) => {
    const { id, title, description, addedDate, expirationDate } = Advertisements;
    const navigate = useNavigate();

    const handleBuyClick = () => {
        // Navigate to BuyAd component with the specific ad ID
        navigate(`/buyAd/${id}`);
    };

    const handleEditClick = () => {
        // Navigate to UpdateAd component with the specific ad ID
        navigate(`/updateAd/${id}`);
    };

    const handleDeleteClick = () => {
        // Navigate to DeleteAd component with the specific ad ID
        navigate(`/deleteAd/${id}`);
    };

    return (
        <div className="col-md-3 mb-4" key={id}>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">{title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Added: {addedDate}</li>
                    <li className="list-group-item">Expires: {expirationDate}</li>
                </ul>
                <div className="card-footer d-flex justify-content-between">
                    <button className="btn btn-success" onClick={handleBuyClick}>
                        Buy
                    </button>
                    <button className="btn btn-warning" onClick={handleEditClick}>
                        Edit
                    </button>
                    <button className="btn btn-danger" onClick={handleDeleteClick}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Ad;
