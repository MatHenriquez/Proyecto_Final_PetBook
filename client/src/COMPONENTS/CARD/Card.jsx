
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = ({ name }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random%27')
      .then(response => {
        setImage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card">
      <img src={image} alt="dog" />
      <p>{name}</p>
    </div>
  );
}

export default Card;