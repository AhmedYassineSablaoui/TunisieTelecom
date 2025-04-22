import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const AddSiteGSM = () => {
    const [formData, setFormData] = useState({
        site_id: '',
        site_adresse: '',
        visite_date: '',
        site_name: '',
        latitude: '',
        longitude: '',
        height: '',
        network_generation: '',
        location: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/site-gsm/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // Handle successful submission
            alert('Site GSM added successfully');
        } catch (error) {
            // Handle errors
            console.error('Error adding Site GSM:', error);
            alert('Error adding Site GSM');
        }
    };

    return (
        <div>
            <h1>Add Site GSM</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" name="site_id" value={formData.site_id} onChange={handleChange} placeholder="Site ID" />
                <input type="text" name="site_adresse" value={formData.site_adresse} onChange={handleChange} placeholder="Site Adresse" />
                <input type="date" name="visite_date" value={formData.visite_date} onChange={handleChange} placeholder="Visite Date" />
                <input type="text" name="site_name" value={formData.site_name} onChange={handleChange} placeholder="Site Name" />
                <input type="number" name="latitude" value={formData.latitude} onChange={handleChange} placeholder="Latitude" />
                <input type="number" name="longitude" value={formData.longitude} onChange={handleChange} placeholder="Longitude" />
                <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Height" />
                <input type="text" name="network_generation" value={formData.network_generation} onChange={handleChange} placeholder="Network Generation" />
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AddSiteGSM;
