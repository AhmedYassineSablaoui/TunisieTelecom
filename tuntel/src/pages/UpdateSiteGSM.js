import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateSiteGSM() {
    const { id } = useParams();
    const [siteGSM, setSiteGSM] = useState(null);
    const [formData, setFormData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate function

    useEffect(() => {
        if(!id){
            setError('ID is required');
            return;
        }
        const fetchSiteGSM = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/site-gsm/${id}/`);
                setSiteGSM(response.data);
                setFormData(response.data); 
                setError(null); 

            } catch(error){
                console.error('Error fetching Site gsm:', error);
                setError('Failed to fetch Site gsm');
            }
        } ; 
        fetchSiteGSM(); 
    }, [id]); 

       

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/site-gsm/${id}/`, formData);
            navigate('/site-gsm'); // Redirect to a different page on success
        } catch (error) {
            console.error('Error updating Site gsm:', error);
            setError('Failed to update Site gsm');
        }
       
    };

    if (!siteGSM) return <div>Loading...</div>;

    return (
        <div>
            <h1>Update Site GSM {id}</h1>
            <form onSubmit={handleSubmit}>
                {/* Example form fields */}
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    GEN:
                    <input
                        type="text"
                        name="network_generation"
                        value={formData.network_generation || ''}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateSiteGSM;
