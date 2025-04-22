import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteNetworkGeneration = () => {
  const { id } = useParams();
  const [networkGeneration, setNetworkGeneration] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/network-generations/${id}/`)
      .then(response => setNetworkGeneration(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/network-generations/${id}/`)
      .then(() => navigate('/network-generations'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Delete Network Generation</h2>
      <p>Are you sure you want to delete the network generation "{networkGeneration.name}"?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteNetworkGeneration;
