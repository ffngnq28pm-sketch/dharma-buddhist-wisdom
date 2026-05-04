import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { MANTRA_CATEGORIES, MantraCategory, Mantra } from '@/data/mantras';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ─── Category Chip ────────────────────────────────────────────────────────────
function CategoryChip({
  cat,
  isActive,
  onPress,
}: {
  cat: MantraCategory;
  isActive: boolean;
  onPress: () => void;
}) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        {
          backgroundColor: isActive ? cat.color + '22' : colors.bgCard,
          borderColor: isActive ? cat.color : colors.border,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.chipIcon}>{cat.icon}</Text>
      <Text
        style={[
          styles.chipText,
          { color: isActive ? cat.color : colors.textSecondary },
        ]}
        numberOfLines={1}
      >
        {cat.title}
      </Text>
    </TouchableOpacity>
  );
}

// ─── Mantra Item (expandable) ─────────────────────────────────────────────────
function MantraItem({
  item,
  accentColor,
}: {
  item: Mantra;
  accentColor: string;
}) {
  const { colors } = useTheme();
  const [expanded, setExpanded] = useState(false);

  function toggle() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((v) => !v);
  }

  return (
    <TouchableOpacity
      style={[
        styles.mantraCard,
        {
          backgroundColor: colors.bgCard,
          borderColor: expanded ? accentColor + '60' : colors.border,
        },
      ]}
      onPress={toggle}
      activeOpacity={0.85}
    >
      {/* Header row */}
      <View style={styles.mantraHeader}>
        <View style={styles.mantraHeaderLeft}>
          <Text style={[styles.mantraOriginal, { color: accentColor }]}>
            {item.original}
          </Text>
          <Text style={[styles.mantraTitle, { color: colors.textPrimary }]}>
            {item.title}
          </Text>
          <View style={styles.mantraMeta}>
            <View
              style={[
                styles.traditionBadge,
                { backgroundColor: accentColor + '18', borderColor: accentColor + '40' },
              ]}
            >
              <Text style={[styles.traditionText, { color: accentColor }]}>
                {item.tradition}
              </Text>
            </View>
            {item.repetitions !== undefined && (
              <View
                style={[
                  styles.repBadge,
                  { backgroundColor: colors.bgSection, borderColor: colors.border },
                ]}
              >
                <Text style={[styles.repText, { color: colors.textMuted }]}>
                  × {item.repetitions}
                </Text>
              </View>
            )}
          </View>
        </View>
        <Text style={[styles.expandArrow, { color: colors.textMuted }]}>
          {expanded ? '▲' : '▼'}
        </Text>
      </View>

      {/* Transliteration */}
      {item.transliteration !== item.original && (
        <Text style={[styles.transliteration, { color: colors.textMuted }]}>
          {item.transliteration}
        </Text>
      )}

      {/* Expanded content */}
      {expanded && (
        <View style={styles.expandedContent}>
          <View style={[styles.divider, { backgroundColor: accentColor + '30' }]} />

          {/* French translation */}
          <View style={[styles.frenchBlock, { backgroundColor: accentColor + '0D', borderColor: accentColor + '25' }]}>
            <Text style={[styles.frenchLabel, { color: accentColor }]}>Traduction</Text>
            <Text style={[styles.frenchText, { color: colors.textPrimary }]}>
              {item.french}
            </Text>
          </View>

          {/* Benefits */}
          {item.benefits && (
            <View style={styles.benefitsBlock}>
              <Text style={[styles.benefitsLabel, { color: colors.textMuted }]}>
                ◈ SIGNIFICATION & BIENFAITS
              </Text>
              <Text style={[styles.benefitsText, { color: colors.textSecondary }]}>
                {item.benefits}
              </Text>
            </View>
          )}

          {/* Source */}
          {item.source && (
            <Text style={[styles.sourceText, { color: colors.textMuted }]}>
              Source : {item.source}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────
export default function MantrasScreen() {
  const { colors } = useTheme();
  const [activeCatId, setActiveCatId] = useState(MANTRA_CATEGORIES[0].id);

  const activeCat = MANTRA_CATEGORIES.find((c) => c.id === activeCatId) ?? MANTRA_CATEGORIES[0];

  return (
    <View style={[styles.root, { backgroundColor: colors.bg }]}>
      <StatusBar style={colors.statusBar} />
      <SafeAreaView style={styles.safe}>

        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <TouchableOpacity
            style={[styles.backBtn, { backgroundColor: colors.bgCard, borderColor: colors.border }]}
            onPress={() => router.back()}
            activeOpacity={0.75}
          >
            <Text style={[styles.backIcon, { color: colors.textSecondary }]}>‹</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={[styles.headerOriginal, { color: activeCat.color }]}>
              मन्त्र · Mantra
            </Text>
            <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
              Mantras & Sutras
            </Text>
          </View>
          <View style={styles.backBtn} />
        </View>

        {/* Category scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesRow}
          style={[styles.categoriesScroll, { borderBottomColor: colors.border }]}
        >
          {MANTRA_CATEGORIES.map((cat) => (
            <CategoryChip
              key={cat.id}
              cat={cat}
              isActive={cat.id === activeCatId}
              onPress={() => setActiveCatId(cat.id)}
            />
          ))}
        </ScrollView>

        {/* Category header */}
        <View style={[styles.catHeader, { backgroundColor: activeCat.color + '10', borderColor: activeCat.color + '30' }]}>
          <View style={styles.catHeaderLeft}>
            <Text style={styles.catHeaderIcon}>{activeCat.icon}</Text>
            <View>
              <Text style={[styles.catOriginalTitle, { color: activeCat.color }]}>
                {activeCat.originalTitle}
              </Text>
              <Text style={[styles.catTitle, { color: colors.textPrimary }]}>
                {activeCat.title}
              </Text>
            </View>
          </View>
          <Text style={[styles.catCount, { color: activeCat.color }]}>
            {activeCat.items.length}
          </Text>
        </View>

        {/* Description */}
        <Text style={[styles.catDescription, { color: colors.textMuted }]}>
          {activeCat.description}
        </Text>

        {/* Items */}
        <ScrollView
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {activeCat.items.map((item) => (
            <MantraItem
              key={item.id}
              item={item}
              accentColor={activeCat.color}
            />
          ))}
          <View style={styles.bottomPad} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: { fontSize: 22, lineHeight: 28, marginTop: -2 },
  headerCenter: { alignItems: 'center', flex: 1 },
  headerOriginal: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    letterSpacing: 3,
  },
  headerTitle: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 2,
  },

  // Categories
  categoriesScroll: {
    borderBottomWidth: 1,
    maxHeight: 64,
  },
  categoriesRow: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
    flexDirection: 'row',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    gap: 6,
  },
  chipIcon: { fontSize: 14 },
  chipText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 11,
    letterSpacing: 0.3,
    maxWidth: 110,
  },

  // Category header
  catHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  catHeaderLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  catHeaderIcon: { fontSize: 24 },
  catOriginalTitle: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    letterSpacing: 2,
  },
  catTitle: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 14,
    letterSpacing: 0.3,
    marginTop: 1,
  },
  catCount: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 22,
  },

  // Description
  catDescription: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    lineHeight: 18,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    fontStyle: 'italic',
  },

  // List
  listContent: {
    padding: 16,
    gap: 12,
  },

  // Mantra card
  mantraCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
  },
  mantraHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  mantraHeaderLeft: { flex: 1, gap: 4 },
  mantraOriginal: {
    fontFamily: 'Cinzel_400Regular',
    fontSize: 15,
    letterSpacing: 1,
    lineHeight: 22,
  },
  mantraTitle: {
    fontFamily: 'Lato_700Bold',
    fontSize: 13,
    lineHeight: 18,
  },
  mantraMeta: { flexDirection: 'row', gap: 6, marginTop: 4 },
  traditionBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
  },
  traditionText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 9,
    letterSpacing: 0.5,
  },
  repBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
  },
  repText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 9,
    letterSpacing: 0.5,
  },
  expandArrow: {
    fontSize: 10,
    marginTop: 4,
    marginLeft: 8,
  },
  transliteration: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 6,
    letterSpacing: 0.3,
  },

  // Expanded
  expandedContent: { marginTop: 10, gap: 10 },
  divider: { height: 1, borderRadius: 1 },
  frenchBlock: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    gap: 6,
  },
  frenchLabel: {
    fontFamily: 'Lato_700Bold',
    fontSize: 9,
    letterSpacing: 2,
  },
  frenchText: {
    fontFamily: 'Cinzel_400Regular',
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: 0.2,
  },
  benefitsBlock: { gap: 6 },
  benefitsLabel: {
    fontFamily: 'Lato_400Regular',
    fontSize: 9,
    letterSpacing: 2,
  },
  benefitsText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    lineHeight: 19,
  },
  sourceText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    fontStyle: 'italic',
    letterSpacing: 0.3,
  },

  bottomPad: { height: 40 },
});
