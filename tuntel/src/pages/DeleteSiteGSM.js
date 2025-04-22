import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteSiteGSM = () => {
  const { id } = useParams();
  const [siteGSM, setSiteGSM] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/site-gsm/${id}/`)
      .then(response => setSiteGSM(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/site-gsm/${id}/`)
      .then(() => navigate('/site-gsm'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Delete Site GSM</h2>
      <p>Are you sure you want to delete the site GSM "{siteGSM.site_name}"?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteSiteGSM;
