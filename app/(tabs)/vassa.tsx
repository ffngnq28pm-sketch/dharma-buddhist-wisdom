import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Clock } from 'lucide-react-native';
import { useVassa, getFoundationForDay } from '@/hooks/useVassa';
import { useTheme } from '@/context/ThemeContext';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

function DayCard({ dayNum, currentDay }: { dayNum: number; currentDay: number }) {
  const foundation = getFoundationForDay(dayNum);
  const isPast = dayNum <= currentDay;
  const isToday = dayNum === currentDay;

  return (
    <View
      style={[
        styles.dayCard,
        {
          borderColor: isToday ? foundation.color : isPast ? foundation.color + '60' : 'rgba(245,237,224,0.06)',
          backgroundColor: isToday
            ? foundation.color + '20'
            : isPast
            ? foundation.color + '0A'
            : 'rgba(255,255,255,0.02)',
        },
      ]}
    >
      <View style={[styles.dayAccent, { backgroundColor: isToday ? foundation.color : isPast ? foundation.color + '80' : 'rgba(255,255,255,0.1)' }]} />
      <Text style={[styles.dayNumber, { color: isToday ? foundation.color : isPast ? '#F5EDE0' : '#A0927A' }]}>
        {dayNum}
      </Text>
      {isToday && (
        <View style={[styles.todayDot, { backgroundColor: foundation.color }]} />
      )}
      {isPast && !isToday && (
        <Text style={[styles.checkMark, { color: foundation.color }]}>✓</Text>
      )}
    </View>
  );
}

export default function VassaScreen() {
  const { isVassa, day, total, daysLeft, foundationLabel, satipatthanaColor, nextSeason, daysUntilNext } = useVassa();
  const { colors } = useTheme();

  const progressPct = isVassa ? Math.min(day / total, 1) : 0;
  const days = Array.from({ length: 90 }, (_, i) => i + 1);

  const currentDay = isVassa ? day : 0;

  return (
    <View style={[styles.root, { backgroundColor: colors.bg }]}>
      <StatusBar style={colors.statusBar} />
      <SafeAreaView style={styles.safe}>
        {/* Header */}
        <LinearGradient
          colors={['#080C09', '#0D1A12', '#080C09']}
          style={styles.headerGradient}
        >
          <View style={styles.header}>
            <Text style={styles.headerWheelRow}>🌿 VASSA 🌿</Text>
            <Text style={[styles.headerTitle, { color: '#F5EDE0' }]}>Retraite des Pluies</Text>
            <Text style={[styles.headerSub, { color: '#C67C2B' }]}>
              {isVassa
                ? `Jour ${day} sur ${total} · ${foundationLabel}`
                : 'En dehors du Vassa'}
            </Text>
          </View>

          {isVassa ? (
            <>
              {/* Info box */}
              <View style={[styles.infoBox, { borderColor: '#C67C2B40', backgroundColor: '#C67C2B0A' }]}>
                <View style={styles.infoInner}>
                  <Clock size={14} color="#C67C2B" />
                  <Text style={[styles.infoLabel, { color: '#C67C2B' }]}>JUSQU'À LA FIN DU VASSA</Text>
                </View>
                <Text style={[styles.infoTimer, { color: '#F5EDE0' }]}>
                  {daysLeft} jour{daysLeft > 1 ? 's' : ''}
                </Text>
              </View>

              {/* Progress bar */}
              <View style={styles.progressSection}>
                <View style={[styles.progressTrack, { backgroundColor: 'rgba(255,255,255,0.08)' }]}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${progressPct * 100}%` as any, backgroundColor: satipatthanaColor },
                    ]}
                  />
                </View>
                <Text style={[styles.progressLabel, { color: '#A0927A' }]}>
                  {Math.round(progressPct * 100)}%
                </Text>
              </View>

              {/* Foundation legend */}
              <View style={styles.legendRow}>
                {[
                  { label: 'Kāya', color: '#4A7A5A', days: '1–22' },
                  { label: 'Vedanā', color: '#7A5A4A', days: '23–45' },
                  { label: 'Citta', color: '#4A5A7A', days: '46–67' },
                  { label: 'Dhamma', color: '#C67C2B', days: '68–90' },
                ].map((item) => (
                  <View key={item.label} style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: item.color }]} />
                    <Text style={[styles.legendLabel, { color: '#A0927A' }]}>{item.label}</Text>
                    <Text style={[styles.legendDays, { color: '#A0927A' }]}>{item.days}</Text>
                  </View>
                ))}
              </View>
            </>
          ) : (
            <View style={[styles.infoBox, { borderColor: 'rgba(198,124,43,0.25)', backgroundColor: 'rgba(198,124,43,0.05)' }]}>
              {nextSeason ? (
                <>
                  <View style={styles.infoInner}>
                    <Clock size={14} color="#C67C2B" />
                    <Text style={[styles.infoLabel, { color: '#C67C2B' }]}>PROCHAIN VASSA</Text>
                  </View>
                  <Text style={[styles.infoTimer, { color: '#F5EDE0' }]}>
                    dans {daysUntilNext} jour{daysUntilNext > 1 ? 's' : ''}
                  </Text>
                  <Text style={[styles.infoNote, { color: 'rgba(198,124,43,0.6)' }]}>
                    Pratiquer chaque jour · Chaque acte est préparation
                  </Text>
                </>
              ) : (
                <Text style={[styles.infoLabel, { color: '#A0927A' }]}>
                  Le Vassa commence en juillet · Pratiquer chaque jour
                </Text>
              )}
            </View>
          )}
        </LinearGradient>

        {/* Day grid */}
        <FlatList
          data={days}
          keyExtractor={(item) => String(item)}
          numColumns={9}
          renderItem={({ item }) => <DayCard dayNum={item} currentDay={currentDay} />}
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.gridRow}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },
  headerGradient: {
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(198,124,43,0.12)',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  headerWheelRow: {
    fontSize: 14,
    letterSpacing: 4,
    color: '#C67C2B',
    marginBottom: 4,
  },
  headerTitle: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 20,
    letterSpacing: 0.5,
  },
  headerSub: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    marginTop: 4,
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  infoBox: {
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 12,
    alignItems: 'center',
  },
  infoInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  infoLabel: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  infoTimer: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 28,
    letterSpacing: 2,
  },
  infoNote: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  progressSection: {
    marginHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  progressTrack: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: 6,
    borderRadius: 3,
  },
  progressLabel: {
    fontFamily: 'Lato_700Bold',
    fontSize: 12,
    minWidth: 36,
    textAlign: 'right',
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 20,
    paddingBottom: 6,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendLabel: {
    fontFamily: 'Lato_700Bold',
    fontSize: 9,
    letterSpacing: 0.3,
  },
  legendDays: {
    fontFamily: 'Lato_400Regular',
    fontSize: 8,
  },
  grid: {
    padding: 12,
    paddingBottom: 100,
  },
  gridRow: {
    gap: 4,
    marginBottom: 4,
    justifyContent: 'center',
  },
  dayCard: {
    width: (SCREEN_WIDTH - 24 - 32) / 9,
    height: (SCREEN_WIDTH - 24 - 32) / 9,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  dayAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    borderRadius: 0,
  },
  dayNumber: {
    fontFamily: 'Lato_700Bold',
    fontSize: 9,
  },
  todayDot: {
    position: 'absolute',
    bottom: 2,
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  checkMark: {
    position: 'absolute',
    bottom: 0,
    right: 1,
    fontSize: 7,
    fontFamily: 'Lato_700Bold',
  },
});
