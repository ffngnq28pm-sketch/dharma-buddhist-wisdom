import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Page introuvable' }} />
      <View style={styles.container}>
        <Text style={styles.wheel}>☸</Text>
        <Text style={styles.text}>Page introuvable</Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Retour à l'accueil</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#080C09',
    gap: 16,
  },
  wheel: {
    fontSize: 56,
    color: '#C67C2B',
  },
  text: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 22,
    color: '#C67C2B',
    letterSpacing: 1,
  },
  link: {
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(198,124,43,0.4)',
  },
  linkText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    color: '#C67C2B',
  },
});
