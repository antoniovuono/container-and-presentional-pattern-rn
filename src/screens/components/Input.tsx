import { StyleSheet, TextInput } from 'react-native';

export function Input() {
  return (
    <TextInput
      style={styles.input}
      placeholder="username"
      placeholderTextColor="#C4C4CC"
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#202024',
    padding: 15,
    borderRadius: 8,
    color: '#FFFFFF',
    width: '100%',
  },
});
