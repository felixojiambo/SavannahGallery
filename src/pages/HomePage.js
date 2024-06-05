// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(result.data);
    };

    const fetchAlbums = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setAlbums(result.data);
    };

    fetchUsers();
    fetchAlbums();
  }, []);

  return (
    <div className="container">
      <h1>Users</h1>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item">
            <Link to={`/users/${user.id}`}>
              {user.name} - {albums.filter(album => album.userId === user.id).length} albums
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
