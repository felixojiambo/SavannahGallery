// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
      const albumsResponse = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setUsers(usersResponse.data);
      setAlbums(albumsResponse.data);
    };
    fetchData();
  }, []);

  const getAlbumCount = (userId) => albums.filter(album => album.userId === userId).length;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              {user.name} - {getAlbumCount(user.id)} albums
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
