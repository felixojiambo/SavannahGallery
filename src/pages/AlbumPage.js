// src/pages/AlbumPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const AlbumPage = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const albumResponse = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
      const photosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      setAlbum(albumResponse.data);
      setPhotos(photosResponse.data);
    };
    fetchData();
  }, [albumId]);

  if (!album) return <div>Loading...</div>;

  return (
    <div>
      <h1>{album.title}</h1>
      <h2>Photos</h2>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumPage;
