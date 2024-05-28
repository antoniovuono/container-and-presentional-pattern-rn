import { useState } from 'react';
import { Alert } from 'react-native';

type UserProps = {
  avatar_url: string;
  name: string;
  bio: string;
};

export function useProfile() {
  const [username, setUsername] = useState<string>();
  const [user, serUser] = useState<UserProps>({} as UserProps);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchUser() {
    setLoading(true);
    try {
      if (!username) {
        return Alert.alert('username não informado');
      }

      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      serUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    username,
    setUsername,
    loading,
    fetchUser,
  };
}
