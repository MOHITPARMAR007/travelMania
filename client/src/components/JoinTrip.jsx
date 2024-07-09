import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JoinTrip = () => {
    const [groupTrips, setGroupTrips] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/grouptrips')
            .then((response) => {
                setGroupTrips(response.data);
            })
            .catch((error) => {
                console.error('Error fetching group trips:', error);
            });
    }, []);
    const handleJoinTrip = (tripId) => {
        // Add logic here to handle joining the trip
        console.log(`Joining trip with ID ${tripId}`);
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to TravelMania!</h1>
            <p className="text-xl text-gray-600 mb-8">Explore the world with us.</p>

            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {groupTrips.length > 0 ? (
                    groupTrips.map((trip, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105">
                            <div className="bg-blue-500 text-white text-center p-4">
                                <h2 className="text-2xl font-bold">{trip.tripPostBy}</h2>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700"><strong>Description:</strong> {trip.description}</p>
                                <p className="text-gray-700"><strong>Destination:</strong> {trip.destination}</p>
                                <p className="text-gray-700"><strong>Contact Number:</strong> {trip.contactNumber}</p>
                                <p className="text-gray-700"><strong>Start Date:</strong> {trip.startDate}</p>
                                <p className="text-gray-700"><strong>End Date:</strong> {trip.endDate}</p>
                                <p className="text-gray-700"><strong>Group Members:</strong> {trip.groupMembers}</p>
                                <p className="text-gray-700"><strong>Created By:</strong> {trip.createdBy}</p>
                                <button
                                    onClick={() => handleJoinTrip(trip._id)}
                                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                                >
                                    Join Trip
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-700 text-xl">No group trips available.</p>
                )}
            </div>
        </div>
    );
};

export default JoinTrip;
