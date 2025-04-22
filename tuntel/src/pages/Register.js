import axios from 'axios';
import { useState } from 'react';
import './styles.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const[access_key,setacesskey] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/register/', {
        username,
        password,
        email,
        access_key,
      });
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Error registering user:', error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="access_key"
        value={access_key}
        onChange={(e) => setacesskey(e.target.value)}
        placeholder="access_key"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
