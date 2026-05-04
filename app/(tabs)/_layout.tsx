import { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { useUserProfile } from '@/context/UserProfileContext';
import { router } from 'expo-router';

function TabIcon({ symbol, color }: { symbol: string; color: string }) {
  return <Text style={{ fontSize: 18, color }}>{symbol}</Text>;
}

export default function TabLayout() {
  const { colors } = useTheme();
  const { profile } = useUserProfile();

  useEffect(() => {
    if (!profile.onboardingDone) {
      router.replace('/onboarding');
    }
  }, [profile.onboardingDone]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: [styles.tabBar, { backgroundColor: 'transparent' }],
        tabBarActiveTintColor: '#C67C2B',
        tabBarInactiveTintColor: 'rgba(245, 237, 224, 0.35)',
        tabBarLabelStyle: styles.tabLabel,
        tabBarBackground: () => (
          <View style={[styles.tabBarBg, { backgroundColor: '#0D1410', borderTopColor: 'rgba(255,255,255,0.06)' }]} />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => <TabIcon symbol="☸" color={color} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Bibliothèque',
          tabBarIcon: ({ color }) => <TabIcon symbol="📿" color={color} />,
        }}
      />
      <Tabs.Screen
        name="vassa"
        options={{
          title: 'Vassa',
          tabBarIcon: ({ color }) => <TabIcon symbol="🌿" color={color} />,
        }}
      />
      <Tabs.Screen
        name="practice"
        options={{
          title: 'Pratique',
          tabBarIcon: ({ color }) => <TabIcon symbol="🧘" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoris',
          tabBarIcon: ({ color }) => <TabIcon symbol="♥" color={color} />,
        }}
      />
      <Tabs.Screen
        name="education"
        options={{
          title: 'Savoir',
          tabBarIcon: ({ color }) => <TabIcon symbol="🎓" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Réglages',
          tabBarIcon: ({ color }) => <TabIcon symbol="⚙" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 0,
    height: 80,
    paddingBottom: 16,
    paddingTop: 10,
  },
  tabBarBg: {
    flex: 1,
    borderTopWidth: 1,
  },
  tabLabel: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    letterSpacing: 0.3,
  },
});
