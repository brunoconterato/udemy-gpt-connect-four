import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddUserForm.css';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  axios.defaults.baseURL = 'http://localhost:3000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(`Adding user: ${name} ${username} ${password}...`)
      await axios.post('/api/users', { name, username, password });
      history.push('/users');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;