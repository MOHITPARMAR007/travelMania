import React from 'react';
import axios from 'axios';

const Emergency = () => {
  const handleEmergencyClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userData = {
            user: {
              success: true,
              data: {
                _id: '667f0a1bc127a2e2a9d45605',
                firstName: 'mohit',
                lastName: 'parmar',
                email: 'jimohitji0786@gmail.com',
                password: '123456',
                picture: 'Dreamy Unseen Desktop 3D HD WorldFree4u.Com (51).JPG',
                __v: 0
              }
            }
          };

          const locationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          const requestData = {
            ...userData,
            ...locationData,
          };

          axios.post('http://localhost:5000/emergency', requestData)
            .then(response => {
              console.log(response.data.message);
            })
            .catch(error => {
              console.error('There was an error sending the location!', error);
            });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <button onClick={handleEmergencyClick}>Call</button>
    </div>
  );
};

export default Emergency;
