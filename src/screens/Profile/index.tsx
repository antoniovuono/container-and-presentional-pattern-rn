import { View, Text, StyleSheet, Image } from 'react-native';
import { useProfile } from './hooks/useProfile';

export function Profile() {
  const { user } = useProfile();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: user?.avatar_url,
        }}
        style={styles.avatar}
      />
      <Text style={styles.title}>{user?.name}</Text>
      <Text style={styles.subtitle}>{user?.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  avatar: {
    height: 180,
    width: 180,
    borderRadius: 90,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
});
