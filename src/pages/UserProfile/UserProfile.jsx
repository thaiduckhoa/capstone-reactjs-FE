import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { authServices } from '../../services/AuthServices.jsx';

export const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await authServices.checkAuth();
        fetchUserData();
      } catch (err) {
        navigate('/login');
      }
    };

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`);
        setUserData(response.data);
      } catch (err) {
        setError("Failed to fetch user data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [id, navigate]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{userData.username}</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={userData.description}
                onChange={(e) => setUserData({...userData, description: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Languages</label>
              <input
                value={userData.languages.join(', ')}
                onChange={(e) => setUserData({...userData, languages: e.target.value.split(',')})}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Skills</label>
              <input
                value={userData.skills.join(', ')}
                onChange={(e) => setUserData({...userData, skills: e.target.value.split(',')})}
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save Changes
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-gray-600">{userData.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Languages</h2>
              <p className="text-gray-600">{userData.languages.join(', ')}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Skills</h2>
              <p className="text-gray-600">{userData.skills.join(', ')}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Education</h2>
              <p className="text-gray-600">{userData.education}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Certification</h2>
              <p className="text-gray-600">{userData.certification}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
