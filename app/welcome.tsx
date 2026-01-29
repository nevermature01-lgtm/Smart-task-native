import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome!</ThemedText>
      <Link href="/(auth)/login" asChild>
        <TouchableOpacity style={styles.button}>
          <ThemedText>Login</ThemedText>
        </TouchableOpacity>
      </Link>
      <Link href="/(auth)/signup" asChild>
        <TouchableOpacity style={styles.button}>
          <ThemedText>Sign Up</ThemedText>
        </TouchableOpacity>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
