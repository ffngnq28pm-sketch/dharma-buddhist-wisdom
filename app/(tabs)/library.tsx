import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { X, Star, ChevronRight } from 'lucide-react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeFilterPill } from '@/components/ThemeFilterPill';
import { CardThumbnail } from '@/components/CardThumbnail';
import { WisdomCard } from '@/components/WisdomCard';
import { CardActions } from '@/components/CardActions';
import { PremiumPaywall } from '@/components/PremiumPaywall';
import { useFavorites } from '@/hooks/useFavorites';
import { usePremium, FREE_CARD_LIMIT } from '@/hooks/usePremium';
import { useTheme } from '@/context/ThemeContext';
import { CARDS, THEMES } from '@/data/cards';
import { WisdomCard as WisdomCardType, Theme } from '@/types';

export default function LibraryScreen() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const { isPremium, isCardLocked } = usePremium();
  const { colors } = useTheme();
  const [activeTheme, setActiveTheme] = useState<Theme | null>(null);
  const [selectedCard, setSelectedCard] = useState<WisdomCardType | null>(null);
  const [premiumVisible, setPremiumVisible] = useState(false);

  const filtered = activeTheme ? CARDS.filter((c) => c.theme === activeTheme) : CARDS;

  const left = filtered.filter((_, i) => i % 2 === 0);
  const right = filtered.filter((_, i) => i % 2 === 1);

  function handleCardPress(card: WisdomCardType) {
    const globalIndex = CARDS.indexOf(card);
    if (isCardLocked(globalIndex)) {
      setPremiumVisible(true);
      return;
    }
    setSelectedCard(card);
  }

  function handleDharmaWheelPress() {
    if (!isPremium) { setPremiumVisible(true); return; }
    router.push('/dharma-wheel');
  }

  function handleTeachersPress() {
    if (!isPremium) { setPremiumVisible(true); return; }
    router.push('/teachers');
  }

  return (
    <View style={[styles.root, { backgroundColor: colors.bg }]}>
      <StatusBar style={colors.statusBar} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Bibliothèque · ☸</Text>
          <Text style={[styles.subtitle, { color: colors.textMuted }]}>{CARDS.length} sagesses</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
          {/* Ashtanga Marga Banner */}
          <TouchableOpacity
            style={styles.namesBanner}
            onPress={handleDharmaWheelPress}
            activeOpacity={0.88}
          >
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={StyleSheet.absoluteFillObject}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['rgba(8,12,9,0.2)', 'rgba(8,12,9,0.85)']}
              style={StyleSheet.absoluteFillObject}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
            <View style={styles.namesBannerContent}>
              <View style={styles.namesBannerLeft}>
                <View style={styles.namesPremiumBadge}>
                  <Star size={11} color="#C67C2B" fill="#C67C2B" />
                  <Text style={styles.namesPremiumText}>PREMIUM</Text>
                </View>
                <Text style={styles.namesPali}>Aṣṭāṅga Mārga</Text>
                <Text style={styles.namesFrench}>Noble Octuple Sentier (8)</Text>
                <Text style={styles.namesDesc}>Collection exclusive de 8 méditations</Text>
              </View>
              <View style={styles.namesArrow}>
                <ChevronRight size={20} color="#C67C2B" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Teachers Banner */}
          <TouchableOpacity
            style={styles.teachersBanner}
            onPress={handleTeachersPress}
            activeOpacity={0.88}
          >
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={StyleSheet.absoluteFillObject}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['rgba(8,12,9,0.15)', 'rgba(8,12,9,0.88)']}
              style={StyleSheet.absoluteFillObject}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
            <View style={styles.namesBannerContent}>
              <View style={styles.namesBannerLeft}>
                <View style={styles.namesPremiumBadge}>
                  <Star size={11} color="#C67C2B" fill="#C67C2B" />
                  <Text style={styles.namesPremiumText}>PREMIUM</Text>
                </View>
                <Text style={styles.teachersTitle}>Maîtres du Dharma</Text>
                <Text style={styles.teachersFrench}>Enseignants (8)</Text>
                <Text style={styles.namesDesc}>8 figures encyclopédiques</Text>
              </View>
              <View style={styles.namesArrow}>
                <ChevronRight size={20} color="#C67C2B" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Filter pills */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
            <ThemeFilterPill
              label="Tout"
              active={!activeTheme}
              onPress={() => setActiveTheme(null)}
            />
            {THEMES.map((t) => (
              <ThemeFilterPill
                key={t}
                label={t}
                active={activeTheme === t}
                onPress={() => setActiveTheme(activeTheme === t ? null : t)}
              />
            ))}
          </ScrollView>

          {/* Masonry grid */}
          <View style={styles.grid}>
            <View style={styles.column}>
              {left.map((card) => {
                const gIdx = CARDS.indexOf(card);
                const locked = isCardLocked(gIdx);
                return (
                  <CardThumbnail
                    key={card.id}
                    card={card}
                    isPremium={!locked}
                    isFavorite={favoriteIds.has(card.id)}
                    onPress={() => handleCardPress(card)}
                    onFavoriteToggle={() => locked ? setPremiumVisible(true) : toggleFavorite(card.id)}
                  />
                );
              })}
            </View>
            <View style={[styles.column, styles.columnOffset]}>
              {right.map((card) => {
                const gIdx = CARDS.indexOf(card);
                const locked = isCardLocked(gIdx);
                return (
                  <CardThumbnail
                    key={card.id}
                    card={card}
                    isPremium={!locked}
                    isFavorite={favoriteIds.has(card.id)}
                    onPress={() => handleCardPress(card)}
                    onFavoriteToggle={() => locked ? setPremiumVisible(true) : toggleFavorite(card.id)}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Card detail modal */}
      <Modal visible={!!selectedCard} transparent animationType="slide" statusBarTranslucent>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalSheet, { backgroundColor: colors.bgCard }]}>
            <TouchableOpacity style={styles.modalClose} onPress={() => setSelectedCard(null)}>
              <X size={20} color="#A0927A" />
            </TouchableOpacity>
            {selectedCard && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <WisdomCard card={selectedCard} />
                <View style={{ height: 16 }} />
                <CardActions
                  card={selectedCard}
                  isFavorite={favoriteIds.has(selectedCard.id)}
                  onFavoriteToggle={() => toggleFavorite(selectedCard.id)}
                />
                <View style={{ height: 40 }} />
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>

      <PremiumPaywall
        visible={premiumVisible}
        onClose={() => setPremiumVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safeArea: { flex: 1 },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
  },
  title: { fontFamily: 'Cinzel_700Bold', fontSize: 22 },
  subtitle: { fontFamily: 'Lato_400Regular', fontSize: 13 },
  namesBanner: {
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 18,
    height: 120,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(198,124,43,0.3)',
  },
  teachersBanner: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 18,
    height: 110,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(138,90,43,0.3)',
  },
  namesBannerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
  },
  namesBannerLeft: { flex: 1, gap: 3 },
  namesPremiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 4,
  },
  namesPremiumText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 9,
    color: '#C67C2B',
    letterSpacing: 1.5,
  },
  namesPali: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 16,
    color: '#F5EDE0',
    textShadowColor: 'rgba(198,124,43,0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  namesFrench: {
    fontFamily: 'Lato_700Bold',
    fontSize: 13,
    color: '#C67C2B',
    letterSpacing: 0.3,
  },
  namesDesc: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    color: 'rgba(255,255,255,0.5)',
  },
  teachersTitle: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 15,
    color: '#F5EDE0',
    textShadowColor: 'rgba(138,90,43,0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  teachersFrench: {
    fontFamily: 'Lato_700Bold',
    fontSize: 13,
    color: '#D4956A',
    letterSpacing: 0.3,
  },
  namesArrow: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(198,124,43,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(198,124,43,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filters: { paddingHorizontal: 20, paddingBottom: 14 },
  grid: { flexDirection: 'row', paddingHorizontal: 20, gap: 8 },
  column: { flex: 1 },
  columnOffset: { marginTop: 28 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.75)', justifyContent: 'flex-end' },
  modalSheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 20,
    paddingHorizontal: 20,
    maxHeight: '93%',
  },
  modalClose: {
    alignSelf: 'flex-end',
    marginBottom: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
