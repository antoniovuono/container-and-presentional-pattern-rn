import { useEffect, useState } from 'react';

type UserProps = {
  avatar_url: string;
  name: string;
  bio: string;
};

export function useProfile() {
  const [username, setUsername] = useState<string>('');
  const [user, serUser] = useState<UserProps>({} as UserProps);
  const [loading, setLoading] = useState<boolean>(false);

  console.log('user', user);

  async function fetchUser(params = 'antoniovuono') {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${params}`);
      const data = await response.json();
      serUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleFetchUser() {
    fetchUser(username);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    username,
    setUsername,
    handleFetchUser,
    loading,
  };
}
