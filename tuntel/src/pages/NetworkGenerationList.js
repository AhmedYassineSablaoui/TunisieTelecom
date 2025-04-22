import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NetworkGenerationList = () => {
  const [networkGenerations, setNetworkGenerations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNetworkGenerations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/network-generations/');
        setNetworkGenerations(response.data);
      } catch (err) {
        setError('Error fetching data: ' + err.message);
      }
    };

    fetchNetworkGenerations();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Network Generations</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Nom</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Generation</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>State</th>
          </tr>
        </thead>
        <tbody>
          {networkGenerations.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.nom}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.generation}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/network-generations/add" style={{ margin: '0 10px', textDecoration: 'none' }}>
          <button>Add</button>
        </Link>
        <Link to="/network-generations/:id/edit" style={{ margin: '0 10px', textDecoration: 'none' }}>
          <button>Update</button>
        </Link>
        <Link to="/network-generations/:id/delete" style={{ margin: '0 10px', textDecoration: 'none' }}>
          <button>Delete</button>
        </Link>
      </div>
    </div>
  );
};

export default NetworkGenerationList;
