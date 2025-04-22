import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

const SiteGSMList = () => {
  const [siteGSMs, setSiteGSMs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSiteGSMs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/site-gsm/');
        setSiteGSMs(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchSiteGSMs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  
  return (
    <div>
      <h1>Site GSMs</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Site_adresse</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Site_name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Location</th>
          </tr>
        </thead>
        <tbody>
          {siteGSMs.map((site) => (
            <tr key={site.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{site.site_adresse}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{site.site_name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{site.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/site-gsm/add" style={{ margin: '0 10px', textDecoration: 'none' }}>
          <button>Add</button>
        </Link>
        <Link to="/site-gsm/:id/edit" style={{ margin: '0 10px', textDecoration: 'none' }}>
          <button>Update</button>
        </Link>
        <Link to="/site-gsm/:id/delete" style={{ margin: '0 10px', textDecoration: 'none' }}>
          <button>Delete</button>
        </Link>
      </div>
    </div>
  );
};

export default SiteGSMList;
