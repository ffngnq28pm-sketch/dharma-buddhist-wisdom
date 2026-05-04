import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useUserProfile, FOCUS_THEMES, FOCUS_THEME_ICONS, FocusTheme } from '@/context/UserProfileContext';
import { findBuddhistNameMeaning, BuddhistName } from '@/data/buddhistNames';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const THEME_CONFIG: Record<FocusTheme, { desc: string; color: string }> = {
  Anicca: { desc: "Observer l'impermanence de chaque instant",  color: '#C67C2B' },
  Karuna: { desc: 'Cultiver la compassion pour tous les êtres',  color: '#4A7A5A' },
  Prajna: { desc: 'Approfondir la sagesse et la compréhension',  color: '#7A5A9A' },
  Sati:   { desc: 'Développer la pleine conscience pas à pas',   color: '#4A7A8A' },
  Metta:  { desc: 'Rayonner la bienveillance aimante',           color: '#C4954A' },
  Shanti: { desc: 'Trouver la paix intérieure — paix extérieure', color: '#4A8A7A' },
};

export default function OnboardingScreen() {
  const { update } = useUserProfile();
  const [step, setStep] = useState<'name' | 'theme'>('name');
  const [name, setName] = useState('');
  const [chosen, setChosen] = useState<FocusTheme | null>(null);
  const [nameMeaning, setNameMeaning] = useState<BuddhistName | null>(null);

  function handleNameNext() {
    if (step === 'name') {
      setStep('theme');
    }
  }

  function handleFinish() {
    if (!chosen) return;
    update({
      firstName: name.trim(),
      focusTheme: chosen,
      focusStartedAt: Date.now(),
      onboardingDone: true,
    });
    router.replace('/(tabs)');
  }

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="light" />
      <LinearGradient
        colors={['#080C09', '#0D1A10', '#080C09']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      <View style={styles.topOrnament}>
        <Text style={styles.wheelLogo}>☸</Text>
        <Text style={styles.logoTitle}>Dharma</Text>
        <Text style={styles.logoSub}>☸ · ÉVEIL · MÉDITATION</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {step === 'name' ? (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Bienvenue</Text>
            <Text style={styles.stepSubtitle}>
              Commençons votre chemin vers l'Éveil.{'\n'}Quel est votre prénom ?
            </Text>

            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                placeholder="Votre prénom..."
                placeholderTextColor="rgba(198,124,43,0.35)"
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  setNameMeaning(findBuddhistNameMeaning(text));
                }}
                autoFocus
                returnKeyType="next"
                onSubmitEditing={handleNameNext}
                selectionColor="#C67C2B"
              />
            </View>

            {/* Buddhist name meaning card */}
            {nameMeaning && (
              <View style={styles.nameMeaningCard}>
                <Text style={styles.nameMeaningOriginal}>{nameMeaning.original}</Text>
                <View style={styles.nameMeaningRow}>
                  <Text style={styles.nameMeaningOriginBadge}>{nameMeaning.origin}</Text>
                  <Text style={styles.nameMeaningGender}>
                    {nameMeaning.gender === 'M' ? '♂ Masculin' : nameMeaning.gender === 'F' ? '♀ Féminin' : '⚧ Universel'}
                  </Text>
                </View>
                <Text style={styles.nameMeaningText}>{nameMeaning.meaning}</Text>
                <View style={styles.nameMeaningBadges}>
                  {nameMeaning.concept && (
                    <View style={styles.nameMeaningBadge}>
                      <Text style={styles.nameMeaningBadgeText}>☸ {nameMeaning.concept}</Text>
                    </View>
                  )}
                  {nameMeaning.virtue && (
                    <View style={[styles.nameMeaningBadge, styles.nameMeaningVirtueBadge]}>
                      <Text style={[styles.nameMeaningBadgeText, styles.nameMeaningVirtueText]}>
                        🪷 {nameMeaning.virtue}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            )}

            <TouchableOpacity
              style={[styles.nextBtn, !name.trim() && styles.nextBtnDisabled]}
              onPress={handleNameNext}
              disabled={!name.trim()}
              activeOpacity={0.85}
            >
              <Text style={styles.nextBtnText}>Continuer</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setStep('theme')} style={styles.skipBtn} activeOpacity={0.7}>
              <Text style={styles.skipText}>Passer</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>
              {name.trim() ? `Bonjour ${name.trim()}` : 'Votre intention'}
            </Text>
            <Text style={styles.stepSubtitle}>
              Choisissez un thème pour orienter votre pratique.{'\n'}
              Vos sagesses quotidiennes y seront adaptées.
            </Text>

            <View style={styles.themesGrid}>
              {FOCUS_THEMES.map((theme) => {
                const cfg = THEME_CONFIG[theme];
                const icon = FOCUS_THEME_ICONS[theme];
                const isActive = chosen === theme;
                return (
                  <TouchableOpacity
                    key={theme}
                    style={[
                      styles.themeCard,
                      isActive && { borderColor: cfg.color, backgroundColor: cfg.color + '18' },
                    ]}
                    onPress={() => setChosen(theme)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.themeIcon}>{icon}</Text>
                    <Text style={[styles.themeName, isActive && { color: '#F5EDE0' }]}>{theme}</Text>
                    <Text style={styles.themeDesc}>{cfg.desc}</Text>
                    {isActive && <View style={[styles.themeActiveBar, { backgroundColor: cfg.color }]} />}
                  </TouchableOpacity>
                );
              })}
            </View>

            <TouchableOpacity
              style={[styles.nextBtn, !chosen && styles.nextBtnDisabled]}
              onPress={handleFinish}
              disabled={!chosen}
              activeOpacity={0.85}
            >
              <Text style={styles.nextBtnText}>Commencer ma pratique</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <View style={styles.dots}>
        <View style={[styles.dot, step === 'name' && styles.dotActive]} />
        <View style={[styles.dot, step === 'theme' && styles.dotActive]} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#080C09' },
  topOrnament: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 8,
  },
  wheelLogo: {
    fontSize: 54,
    color: '#C67C2B',
    textShadowColor: 'rgba(198,124,43,0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 24,
  },
  logoTitle: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 28,
    color: '#C67C2B',
    letterSpacing: 4,
    marginTop: 4,
  },
  logoSub: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    color: 'rgba(198,124,43,0.5)',
    letterSpacing: 4,
    marginTop: 4,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
  stepContent: {
    paddingTop: 32,
    alignItems: 'center',
  },
  stepTitle: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 28,
    color: '#F5EDE0',
    textAlign: 'center',
    marginBottom: 12,
  },
  stepSubtitle: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    color: '#A0927A',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 36,
  },
  inputWrap: {
    width: '100%',
    marginBottom: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(198,124,43,0.3)',
    backgroundColor: 'rgba(198,124,43,0.06)',
    overflow: 'hidden',
  },
  input: {
    fontFamily: 'Lato_400Regular',
    fontSize: 18,
    color: '#F5EDE0',
    paddingHorizontal: 20,
    paddingVertical: 16,
    textAlign: 'center',
  },
  nextBtn: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: '#C67C2B',
    alignItems: 'center',
    marginBottom: 16,
  },
  nextBtnDisabled: {
    backgroundColor: 'rgba(198,124,43,0.25)',
  },
  nextBtnText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 16,
    color: '#080C09',
  },
  // Buddhist name meaning card
  nameMeaningCard: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(90,138,122,0.4)',
    backgroundColor: 'rgba(90,138,122,0.07)',
    padding: 16,
    marginBottom: 20,
    gap: 8,
  },
  nameMeaningOriginal: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 22,
    color: '#5A8A7A',
    textAlign: 'center',
    letterSpacing: 2,
  },
  nameMeaningRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  nameMeaningOriginBadge: {
    fontFamily: 'Lato_700Bold',
    fontSize: 10,
    color: '#A67C52',
    backgroundColor: 'rgba(166,124,82,0.12)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    overflow: 'hidden',
    letterSpacing: 1,
  },
  nameMeaningGender: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    color: '#6B5A40',
    backgroundColor: 'rgba(107,90,64,0.10)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    overflow: 'hidden',
    letterSpacing: 0.5,
  },
  nameMeaningText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    color: '#C8B898',
    lineHeight: 21,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  nameMeaningBadges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 4,
  },
  nameMeaningBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: 'rgba(198,124,43,0.10)',
    borderWidth: 1,
    borderColor: 'rgba(198,124,43,0.25)',
  },
  nameMeaningVirtueBadge: {
    backgroundColor: 'rgba(90,138,122,0.10)',
    borderColor: 'rgba(90,138,122,0.25)',
  },
  nameMeaningBadgeText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 10,
    color: '#C67C2B',
    letterSpacing: 0.5,
  },
  nameMeaningVirtueText: {
    color: '#5A8A7A',
  },

  skipBtn: { padding: 12 },
  skipText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    color: '#4A5068',
  },
  themesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    width: '100%',
    marginBottom: 32,
  },
  themeCard: {
    width: (SCREEN_WIDTH - 60) / 2,
    padding: 18,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(255,255,255,0.03)',
    alignItems: 'center',
    gap: 6,
    overflow: 'hidden',
  },
  themeIcon: { fontSize: 26 },
  themeName: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 14,
    color: '#A0927A',
  },
  themeDesc: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    color: '#4A5068',
    textAlign: 'center',
    lineHeight: 14,
  },
  themeActiveBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    borderRadius: 0,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  dotActive: {
    width: 24,
    backgroundColor: '#C67C2B',
  },
});
