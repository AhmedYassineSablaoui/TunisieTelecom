// AddNetworkGeneration.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const AddNetworkGeneration = () => {
    const [formData, setFormData] = useState({
        generation: '',
        nom: '',
        lac: '',
        bsc: '',
        num_trx: '',
        frequency_band: '',
        azimuth: '',
        receptions: '',
        antennes: '',
        state: '',
        name: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/network-generations/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // Handle successful submission
            alert('Network generation added successfully');
        } catch (error) {
            // Handle errors
            console.error('Error adding network generation:', error);
            alert('Error adding network generation');
        }
    };

    return (
        <div>
            <h1>Add Network Generation</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="generation" value={formData.generation} onChange={handleChange} placeholder="Generation" />
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" />
                <input type="number" name="lac" value={formData.lac} onChange={handleChange} placeholder="LAC" />
                <input type="number" name="bsc" value={formData.bsc} onChange={handleChange} placeholder="BSC" />
                <input type="number" name="num_trx" value={formData.num_trx} onChange={handleChange} placeholder="Number of TRX" />
                <input type="text" name="frequency_band" value={formData.frequency_band} onChange={handleChange} placeholder="Frequency Band" />
                <input type="number" name="azimuth" value={formData.azimuth} onChange={handleChange} placeholder="Azimuth" />
                <input type="number" name="receptions" value={formData.receptions} onChange={handleChange} placeholder="Receptions" />
                <input type="number" name="antennes" value={formData.antennes} onChange={handleChange} placeholder="Antennes" />
                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AddNetworkGeneration;
