import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../services/api';
export const AppContext = createContext({});

export function AppProvider({ children }) {

  const [inputValue, setInputValue] = useState();
  const [user, setUser] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [starsAmount, setStarsAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);  

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function clearData() {
    setInputValue('');
    setUser('');
    setUserInfo([]);
    setRepositories([]);
    setStarsAmount(0);
  }

  async function getUserInfo() {
    setIsLoading(true);
    const response = await axios.get(`${api}/${user}`);
    const repositoriesResponse = await axios.get(`${api}/${user}/repos`);
    const stars = await axios.get(`${api}/${user}/starred`);
    setStarsAmount(stars.data.length);
    setUserInfo(response.data);
    setRepositories(repositoriesResponse.data);
    setIsLoading(false);
  }


  useEffect(() => {
    setUser(inputValue);
  }, [inputValue, repositories]);


  return (
    <AppContext.Provider value={{
      handleInput,
      user,
      userInfo,
      getUserInfo,
      starsAmount,
      repositories,
      clearData,
      isLoading
    }}>
      {children}
    </AppContext.Provider>
  );
}