import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetails() {
    const { id } = useParams();

    return (
        <div style={{ marginTop: '20px' }}>
            <h3>City Details</h3>
            <p>Showing details for City ID: {id}</p>
            {/* In real use, you'd fetch full city info here */}
        </div>
    );
}

export default CityDetails;
