import { View, Text, StyleSheet, Image } from 'react-native';
import { useProfile } from './hooks/useProfile';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function Profile() {
  const { user, username, setUsername, loading, fetchUser } = useProfile();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            user?.avatar_url ??
            'https://static.vecteezy.com/ti/vetor-gratis/p1/23402465-homem-avatar-gratis-vetor.jpg',
        }}
        style={styles.avatar}
      />
      <Text style={styles.title}>{user?.name ?? 'Nome do usuário'}</Text>
      <Text style={styles.subtitle}>{user?.bio ?? 'Biografia do usuário'}</Text>

      <Input value={username} onChangeText={setUsername} />
      <Button title="Pesquisar" onPress={fetchUser} isLoading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  avatar: {
    height: 180,
    width: 180,
    borderRadius: 90,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#C4C4CC',
  },
});
