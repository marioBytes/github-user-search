import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserInfoCard from './components/UserInfoCard';
import Topbar from './components/Topbar';
import SearchBar from './components/SearchBar';
import useThemeDetector from './hooks/useThemeDetector';

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const isDarkTheme = useThemeDetector();
  const [theme, setTheme] = useState(isDarkTheme ? 'dark' : 'light');
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    axios.get('https://api.github.com/users/octocat')
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      });
  }, [])

  useEffect(() => {
    let storedTheme = window.localStorage.getItem('theme');
    if (!storedTheme) {
      window.localStorage.setItem('theme', theme);
      setTheme(theme);
    } else {
      setTheme(storedTheme);
    }
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const switchTheme = () => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
    document.documentElement.setAttribute('data-theme', theme);
  };

  const handleSearch = () => {
    setLoading(true);

    axios.get(`https://api.github.com/users/${searchValue}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <Topbar theme={theme} switchTheme={switchTheme} />
      <SearchBar
        loading={loading}
        onChange={(e) => setSearchValue(e.target.value)}
        onClick={handleSearch}
        errorMessage={errorMessage}
        value={searchValue}
      />
      <UserInfoCard user={user} loading={loading} theme={theme} />
    </div>
  );
}

export default App;
