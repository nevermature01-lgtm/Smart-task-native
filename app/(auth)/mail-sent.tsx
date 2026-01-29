import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function MailSentScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Mail Sent!</ThemedText>
      <ThemedText>We've sent a confirmation email to your inbox.</ThemedText>
      <Link href="/(auth)/login" asChild>
        <TouchableOpacity style={styles.button}>
          <ThemedText>Go to Login</ThemedText>
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
    gap: 16,
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
