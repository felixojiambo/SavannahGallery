// src/pages/UserPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const UserPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const albumsResponse = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
      setUser(userResponse.data);
      setAlbums(albumsResponse.data);
    };
    fetchData();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/album/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
