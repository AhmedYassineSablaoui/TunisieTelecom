import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateNetworkGeneration = () => {
    const { id } = useParams(); // Extract 'id' from the URL parameters
    const [networkGeneration, setNetworkGeneration] = useState(null);
    const [formData, setFormData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // For navigation after successful update

    useEffect(() => {
        if (!id) {
            setError('ID is required');
            return;
        }

        const fetchNetworkGeneration = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/network-generations/${id}/`);
                setNetworkGeneration(response.data);
                setFormData(response.data); // Initialize formData with fetched data
                setError(null);
            } catch (error) {
                console.error('Error fetching network generation:', error);
                setError('Failed to fetch network generation');
            }
        };

        fetchNetworkGeneration();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/network-generations/${id}/`, formData);
            navigate('/network-generations'); // Redirect to a different page on success
        } catch (error) {
            console.error('Error updating network generation:', error);
            setError('Failed to update network generation');
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!formData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Update Network Generation</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description || ''}
                        onChange={handleChange}
                    />
                </div>
                {/* Add more fields as needed */}
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateNetworkGeneration;
