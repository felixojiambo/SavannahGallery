// src/pages/AlbumPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const AlbumPage = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
      setAlbum(result.data);
    };

    const fetchAlbumPhotos = async () => {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
      setPhotos(result.data);
    };

    fetchAlbum();
    fetchAlbumPhotos();
  }, [id]);

  return (
    <div className="container">
      <h1>{album.title}</h1>
      <h2>Photos</h2>
      <div className="row">
        {photos.map(photo => (
          <div key={photo.id} className="col-md-4">
            <div className="card mb-4">
              <img src={photo.thumbnailUrl} className="card-img-top" alt={photo.title} />
              <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
                <Link to={`/photos/${photo.id}`} className="btn btn-primary">View Photo</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;
