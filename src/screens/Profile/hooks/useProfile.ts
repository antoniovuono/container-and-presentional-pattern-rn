import { useEffect, useState } from 'react';

type UserProps = {
  avatar_url: string;
  name: string;
  bio: string;
};

export function useProfile() {
  const [user, serUser] = useState<UserProps>({} as UserProps);

  async function fetchUser() {
    const response = await fetch('https://api.github.com/users/antoniovuono');
    const data = await response.json();
    serUser(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
  };
}
