import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      {...rest}
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
