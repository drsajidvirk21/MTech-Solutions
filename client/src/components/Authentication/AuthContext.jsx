import React, { createContext, useState, useEffect } from 'eact';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  
  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        try {
          const { data } = await fetch('/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(data);
        } catch (err) {
          console.error('Auth token invalid:', err.message);
          localStorage.removeItem('token');
          setToken(null);
          setUser(null);
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, [token]);
  
  const login = async (credentials) => {
    const { data } = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    setToken(data.token);
    localStorage.setItem('token', data.token);
    setUser(data.user);
  };
  
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setUser(null);
  };
  
  const value = {
    user,
    loading,
    login,
    logout,
    token
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
"