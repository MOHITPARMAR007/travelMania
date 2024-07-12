import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TourGuideList = () => {
  const [tourGuides, setTourGuides] = useState([]);
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [filterCity, setFilterCity] = useState('');

  useEffect(() => {
    fetchTourGuides();
  }, []);

  const fetchTourGuides = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tourguides');
      setTourGuides(response.data);
      setFilteredGuides(response.data); // Initially set filtered guides to all guides
    } catch (error) {
      console.error('Error fetching tour guides:', error);
    }
  };

  const handleCityFilterChange = (e) => {
    const city = e.target.value;
    setFilterCity(city);
    filterTourGuides(city);
  };

  const filterTourGuides = (city) => {
    if (city === '') {
      setFilteredGuides(tourGuides); // Reset to show all guides
    } else {
      const filtered = tourGuides.filter(guide => guide.city.toLowerCase().includes(city.toLowerCase()));
      setFilteredGuides(filtered);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="cityFilter" className="block text-gray-700 text-sm font-bold mb-2">Filter by City:</label>
        <input
          id="cityFilter"
          type="text"
          value={filterCity}
          onChange={handleCityFilterChange}
          placeholder="Enter city name..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredGuides.map(guide => (
          <div key={guide._id} className="bg-white rounded-lg shadow-md p-4">
            <div className="mb-2">
              <img
                src={`http://localhost:5000/uploads/${guide.profilePic}`} // Adjust the path to match your backend setup
                alt={guide.name}
                className="w-full rounded-lg"
              />
            </div>
            <h2 className="text-lg font-bold mb-2">{guide.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{guide.email}</p>
            <p className="text-sm text-gray-600 mb-2">{guide.city}, {guide.state}</p>
            <p className="text-sm text-gray-600 mb-2">Contact: {guide.contactNumber}</p>
            <p className="text-sm text-gray-600 mb-2">Age: {guide.age}</p>
            <p className="text-sm text-gray-600 mb-2">Gender: {guide.gender}</p>
            {/* Additional fields and styling can be added here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGuideList;
