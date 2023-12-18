import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">Welcome to the Marketplace</h1>

                <nav>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link to="/signup" className="btn btn-primary">
                                Sign Up
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/login" className="btn btn-secondary">
                                Login
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/create-ad" className="btn btn-success">
                                Create Advertisement
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Home;
