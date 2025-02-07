import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const UserProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`);
        setUserData(response.data);
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{userData.username}</h1>
      <div className="profile-info">
        <h2>Description</h2>
        <p>{userData.description}</p>
        <h2>Languages</h2>
        <p>{userData.languages.join(', ')}</p>
        <h2>Linked Accounts</h2>
        <ul>
          {userData.linkedAccounts.map(account => (
            <li key={account}>{account}</li>
          ))}
        </ul>
        <h2>Skills</h2>
        <p>{userData.skills.join(', ')}</p>
        <h2>Education</h2>
        <p>{userData.education}</p>
        <h2>Certification</h2>
        <p>{userData.certification}</p>
      </div>
    </div>
  );
};

export default UserProfile;
