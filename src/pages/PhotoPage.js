// src/pages/PhotoPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PhotoPage = () => {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const photoResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
      setPhoto(photoResponse.data);
      setTitle(photoResponse.data.title);
    };
    fetchData();
  }, [photoId]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTitleSave = () => {
    axios.put(`https://jsonplaceholder.typicode.com/photos/${photoId}`, { title })
      .then(response => {
        setPhoto(response.data);
        alert('Title updated successfully!');
      })
      .catch(error => {
        console.error('Error updating title: ', error);
      });
  };

  if (!photo) return <div>Loading...</div>;

  return (
    <div>
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} />
      <div>
        <input type="text" value={title} onChange={handleTitleChange} />
        <button onClick={handleTitleSave}>Save</button>
      </div>
    </div>
  );
};

export default PhotoPage;
