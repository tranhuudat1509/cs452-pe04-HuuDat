import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const sampleCities = [
    { id: 1, name: 'Seattle' },
    { id: 2, name: 'Tokyo' },
    { id: 3, name: 'Paris' }
];

function CityList() {
    return (
        <div>
            <h2>Cities</h2>
            <ul>
                {sampleCities.map(city => (
                    <li key={city.id}>
                        <Link to={`/cities/${city.id}`}>{city.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/add"><button>Add City</button></Link>
            <Outlet />
        </div>
    );
}

export default CityList;
