import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, X, Star } from 'lucide-react-native';
import { router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { EIGHTFOLD_PATH, EightfoldSpoke } from '@/data/eightfoldPath';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_W = (SCREEN_WIDTH - 48) / 2;

const CATEGORY_COLORS: Record<string, string> = {
  Prajna:   '#C67C2B',
  Sila:     '#4A7A5A',
  Samadhi:  '#4A5A7A',
};

function SectionHeader({ label, accent }: { label: string; accent: string }) {
  return (
    <View style={sectionHeaderStyle}>
      <View style={[sectionBarStyle, { backgroundColor: accent }]} />
      <Text style={[sectionLabelStyle, { color: accent + 'CC' }]}>{label}</Text>
    </View>
  );
}
const sectionHeaderStyle = { flexDirection: 'row' as const, alignItems: 'center' as const, gap: 8, marginBottom: 14 };
const sectionBarStyle = { width: 3, height: 16, borderRadius: 2 };
const sectionLabelStyle = { fontFamily: 'Lato_700Bold' as const, fontSize: 10, letterSpacing: 1.8 };

export default function DharmaWheelScreen() {
  const { colors } = useTheme();
  const [selected, setSelected] = useState<EightfoldSpoke | null>(null);

  const renderItem = ({ item }: { item: EightfoldSpoke }) => {
    const catColor = CATEGORY_COLORS[item.category] ?? '#C67C2B';
    return (
      <TouchableOpacity
        style={[styles.card, { width: CARD_W, backgroundColor: colors.bgCard, borderColor: catColor + '40' }]}
        onPress={() => setSelected(item)}
        activeOpacity={0.88}
      >
        <LinearGradient
          colors={[catColor + '15', 'transparent']}
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <View style={styles.cardHeader}>
          <View style={[styles.numberBadge, { backgroundColor: catColor + '22', borderColor: catColor + '60' }]}>
            <Text style={[styles.numberText, { color: catColor }]}>{item.number}</Text>
          </View>
          <View style={[styles.catBadge, { backgroundColor: catColor + '18', borderColor: catColor + '30' }]}>
            <Text style={[styles.catText, { color: catColor }]}>{item.category}</Text>
          </View>
        </View>
        <Text style={styles.wheelSymbol}>☸</Text>
        <Text style={[styles.paliName, { color: colors.textPrimary }]}>{item.paliName}</Text>
        <Text style={[styles.frenchName, { color: catColor }]}>{item.french}</Text>
        <View style={[styles.cardAccent, { backgroundColor: catColor }]} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.root, { backgroundColor: colors.bg }]}>
      <StatusBar style={colors.statusBar} />
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} activeOpacity={0.8}>
            <ArrowLeft size={20} color={colors.textAccent} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
              Le Noble Octuple Sentier
            </Text>
            <Text style={[styles.headerSub, { color: colors.textAccent }]}>
              Aṣṭāṅga Mārga · ☸
            </Text>
          </View>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.premiumRow}>
          <Star size={13} color={colors.textAccent} fill={colors.textAccent} />
          <Text style={[styles.premiumLabel, { color: colors.textAccent }]}>Collection Exclusive Premium</Text>
          <Star size={13} color={colors.textAccent} fill={colors.textAccent} />
        </View>

        {/* Category legend */}
        <View style={styles.legendRow}>
          {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
            <View key={cat} style={[styles.legendItem, { backgroundColor: color + '15', borderColor: color + '30' }]}>
              <View style={[styles.legendDot, { backgroundColor: color }]} />
              <Text style={[styles.legendText, { color }]}>{cat}</Text>
            </View>
          ))}
        </View>

        <FlatList
          data={EIGHTFOLD_PATH}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>

      <Modal
        visible={!!selected}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setSelected(null)}
      >
        {selected && (
          <View style={[styles.detailRoot, { backgroundColor: colors.bg }]}>
            <SafeAreaView style={styles.detailSafe}>
              <TouchableOpacity onPress={() => setSelected(null)} style={[styles.closeBtn, { backgroundColor: 'rgba(0,0,0,0.4)' }]} activeOpacity={0.8}>
                <X size={20} color="#F5EDE0" />
              </TouchableOpacity>
            </SafeAreaView>

            <ScrollView contentContainerStyle={styles.detailScroll} showsVerticalScrollIndicator={false}>
              {/* Hero */}
              <LinearGradient
                colors={[selected.color + '30', 'transparent']}
                style={styles.detailHero}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
              >
                <View style={[styles.detailWheelWrap, { backgroundColor: selected.color + '20', borderColor: selected.color + '60' }]}>
                  <Text style={[styles.detailWheel, { color: selected.color }]}>☸</Text>
                </View>
                <Text style={[styles.detailNumber, { color: selected.color }]}>{selected.number} / 8</Text>
                <View style={[styles.detailCatBadge, { backgroundColor: selected.color + '18', borderColor: selected.color + '40' }]}>
                  <Text style={[styles.detailCatText, { color: selected.color }]}>{selected.category}</Text>
                </View>
                <Text style={[styles.detailPali, { color: colors.textPrimary }]}>{selected.paliName}</Text>
                <Text style={[styles.detailFrench, { color: selected.color }]}>{selected.french}</Text>
              </LinearGradient>

              {/* Description */}
              <View style={[styles.detailSection, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
                <SectionHeader label="ENSEIGNEMENT" accent={selected.color} />
                <Text style={[styles.detailBody, { color: colors.textSecondary }]}>{selected.description}</Text>
              </View>

              {/* Practice */}
              <View style={[styles.detailSection, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
                <SectionHeader label="PRATIQUE" accent={selected.color} />
                <Text style={[styles.detailBody, { color: colors.textSecondary }]}>{selected.practice}</Text>
              </View>

              {/* Quote */}
              <View style={[styles.detailSection, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
                <SectionHeader label="PAROLE DU CANON" accent={selected.color} />
                <View style={[styles.quoteBlock, { borderLeftColor: selected.color }]}>
                  <Text style={[styles.detailQuote, { color: colors.textSecondary }]}>"{selected.quote}"</Text>
                  <Text style={[styles.quoteSource, { color: selected.color }]}>— {selected.quoteSource}</Text>
                </View>
              </View>

              <View style={{ height: 60 }} />
            </ScrollView>
          </View>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  backBtn: {
    width: 40, height: 40, borderRadius: 20,
    alignItems: 'center', justifyContent: 'center',
  },
  headerCenter: { alignItems: 'center', flex: 1 },
  headerTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 16, textAlign: 'center' },
  headerSub: { fontFamily: 'Lato_400Regular', fontSize: 11, letterSpacing: 0.5, marginTop: 2 },
  premiumRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 8, marginBottom: 12,
  },
  premiumLabel: { fontFamily: 'Lato_700Bold', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase' },
  legendRow: {
    flexDirection: 'row', justifyContent: 'center', gap: 8,
    paddingHorizontal: 20, marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row', alignItems: 'center', gap: 5,
    paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12, borderWidth: 1,
  },
  legendDot: { width: 6, height: 6, borderRadius: 3 },
  legendText: { fontFamily: 'Lato_700Bold', fontSize: 10 },
  list: { paddingHorizontal: 20, paddingBottom: 100 },
  row: { gap: 8, marginBottom: 12 },
  card: {
    borderRadius: 18, borderWidth: 1, overflow: 'hidden',
    padding: 16, alignItems: 'center', gap: 6,
  },
  cardHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    width: '100%', marginBottom: 4,
  },
  numberBadge: {
    width: 28, height: 28, borderRadius: 14, borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
  },
  numberText: { fontFamily: 'Lato_700Bold', fontSize: 12 },
  catBadge: {
    borderRadius: 10, borderWidth: 1, paddingHorizontal: 8, paddingVertical: 3,
  },
  catText: { fontFamily: 'Lato_700Bold', fontSize: 8, letterSpacing: 0.5 },
  wheelSymbol: { fontSize: 28, marginVertical: 4 },
  paliName: {
    fontFamily: 'Cinzel_400Regular', fontSize: 11, textAlign: 'center',
    fontStyle: 'italic', lineHeight: 16,
  },
  frenchName: {
    fontFamily: 'Lato_700Bold', fontSize: 12, textAlign: 'center', lineHeight: 16,
  },
  cardAccent: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 2 },
  // Detail
  detailRoot: { flex: 1 },
  detailSafe: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 },
  closeBtn: {
    alignSelf: 'flex-end', margin: 16,
    width: 36, height: 36, borderRadius: 18,
    alignItems: 'center', justifyContent: 'center',
  },
  detailScroll: { paddingTop: 60, paddingHorizontal: 20 },
  detailHero: {
    alignItems: 'center', paddingTop: 20, paddingBottom: 24,
    marginBottom: 16, borderRadius: 20, overflow: 'hidden',
  },
  detailWheelWrap: {
    width: 80, height: 80, borderRadius: 40, borderWidth: 2,
    alignItems: 'center', justifyContent: 'center', marginBottom: 12,
  },
  detailWheel: { fontSize: 44 },
  detailNumber: {
    fontFamily: 'Lato_700Bold', fontSize: 12, letterSpacing: 2, marginBottom: 8,
  },
  detailCatBadge: {
    borderRadius: 12, borderWidth: 1, paddingHorizontal: 12, paddingVertical: 4, marginBottom: 12,
  },
  detailCatText: { fontFamily: 'Lato_700Bold', fontSize: 10, letterSpacing: 1 },
  detailPali: {
    fontFamily: 'Cinzel_700Bold', fontSize: 22, textAlign: 'center',
    lineHeight: 32, marginBottom: 6,
  },
  detailFrench: {
    fontFamily: 'Lato_700Bold', fontSize: 16, textAlign: 'center',
  },
  detailSection: {
    borderRadius: 16, borderWidth: 1, padding: 18, marginBottom: 14,
  },
  detailBody: { fontFamily: 'Lato_400Regular', fontSize: 14, lineHeight: 24 },
  quoteBlock: { borderLeftWidth: 3, paddingLeft: 14, gap: 8 },
  detailQuote: {
    fontFamily: 'Lato_400Regular', fontSize: 14, lineHeight: 22,
    fontStyle: 'italic',
  },
  quoteSource: { fontFamily: 'Lato_700Bold', fontSize: 12, letterSpacing: 0.5 },
});
