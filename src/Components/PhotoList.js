import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${searchTerm}`,
          {
            headers: {
              Authorization: 'CBj46ptnDt36Mf8gOgdhqQ7s1z8BqIYzI2OshgSWvS8rLiuvGjM6kviG',
            },
          }
        );
        setPhotos(response.data.photos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <h1>Buscador de Imágenes</h1>
      <input
        type="text"
        placeholder="Buscar imágenes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.src.medium}
            alt={photo.photographer}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
