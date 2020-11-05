import { useState, useEffect } from 'react';

import history from '../../routes/history';
import api from '../../services/api';

// import api from '../../api';
import { fakeApiResponse }  from '../../fakeData'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
      
      // const data = await api.get('/users');
      const data = fakeApiResponse;
      setUser(data);
    }

    setLoading(false);
  }, []);

  async function handleLogin() {
    // const { data: { token } } = await api.post('/authenticate');
    const token = JSON.stringify({ header: 'test', body: 'token de teste' });;

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;

    setAuthenticated(true);

    // const data = await api.get('/users');
    const data = fakeApiResponse;
    setUser(data);

    history.push('/');
  }

  function handleLogout() {
    setAuthenticated(false);

    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;

    setUser(null);

    history.push('/login');
  }

  return { authenticated, loading, handleLogin, handleLogout, user, setUser };
}
