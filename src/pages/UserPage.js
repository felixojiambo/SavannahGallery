/* eslint-disable react/jsx-no-undef */
// src/pages/UserPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(result.data);
    };

    const fetchAlbums = async () => {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
      setAlbums(result.data);
    };

    fetchUser();
    fetchAlbums();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <h2>Albums</h2>
      <ul className="list-group">
        {albums.map(album => (
          <li key={album.id} className="list-group-item">
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
