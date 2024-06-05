
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PhotoPage = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    const fetchPhoto = async () => {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
      setPhoto(result.data);
    };

    fetchPhoto();
  }, [id]);

  return (
    <div className="container">
      <h1>{photo.title}</h1>
      <img src={photo.url} className="img-fluid" alt={photo.title} />
    </div>
  );
};

export default PhotoPage;
