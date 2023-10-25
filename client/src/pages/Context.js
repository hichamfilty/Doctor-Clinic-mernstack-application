import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const myContext = createContext('');

export default function Context(props) {
  const [user, setUser] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/auth/user', { withCredentials: true })
      .then((res) => setUser(res.data));
  }, []);
  return <myContext.Provider value={user}>{props.children}</myContext.Provider>;
}
