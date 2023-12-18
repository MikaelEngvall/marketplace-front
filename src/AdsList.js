import React, { useEffect, useState } from "react";
import { baseURL } from "./util/constants";
import Ad from "./Ad";
import axios from "axios";

const AdsList = ({ updateTrigger }) => {
    const [ads, setAds] = useState([]);

    const getAds = async () => {
        try {
            const response = await axios.get(
                `${baseURL}/advertisement?sortedBy=title&sortOrder=asc`
            );
            if (response.status === 200) {
                setAds(response.data);
            }
        } catch (error) {
            console.error("Error fetching Advertisement list:", error);
        }
    };

    useEffect(() => {
        getAds();
    }, [updateTrigger]);

    return (
        <div>
            {ads && ads.length !== 0 && (
                <h2 className="mb-4">Advertisement List</h2>
            )}
            <div className="row">
                {ads.map((advertisements) => (
                    <Ad key={advertisements.id} Advertisements={advertisements} />
                ))}
            </div>
        </div>
    );
};

export default AdsList;