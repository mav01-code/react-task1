import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]);

  return (
    <div>
      {user ? (
        <>
          <h2>User Profile: {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
