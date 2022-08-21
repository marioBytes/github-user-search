import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import UserInfoCard from './components/UserInfoCard';

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.github.com/users/marioBytes')
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <UserInfoCard user={user} />
    </div>
  );
}

export default App;
