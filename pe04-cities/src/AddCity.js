import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity() {
    const [form, setForm] = useState({ name: '', country: '', population: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('City Added:', form); // Here you'd add city to state/db
        navigate('/cities'); // Redirect after add
    };

    return (
        <div>
            <h2>Add City</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="City Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input placeholder="Country" value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} />
                <input placeholder="Population" value={form.population} onChange={e => setForm({ ...form, population: e.target.value })} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddCity;
