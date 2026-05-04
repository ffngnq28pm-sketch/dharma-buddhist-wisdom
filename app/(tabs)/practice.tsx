import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { usePremium } from '@/hooks/usePremium';
import { usePractice } from '@/hooks/usePractice';
import { DAILY_SESSIONS } from '@/data/sessions';
import { WEEKLY_PATHS } from '@/data/weeklyPaths';
import { DailySession } from '@/components/DailySession';
import { SpiritualJournal } from '@/components/SpiritualJournal';
import { WeeklyPathList } from '@/components/WeeklyPath';
import { PremiumPaywall } from '@/components/PremiumPaywall';

const accent = '#C67C2B';

type Tab = 'sessions' | 'paths' | 'journal';

function getDailySessionIndex(): number {
  const start = new Date('2025-01-01').getTime();
  const now = Date.now();
  const daysSinceStart = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return daysSinceStart % DAILY_SESSIONS.length;
}

export default function PracticeScreen() {
  const { colors } = useTheme();
  const { isPremium } = usePremium();
  const practice = usePractice();

  const [activeTab, setActiveTab] = useState<Tab>('sessions');
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [journalVisible, setJournalVisible] = useState(false);
  const [paywallVisible, setPaywallVisible] = useState(false);

  const dailySession = DAILY_SESSIONS[getDailySessionIndex()];
  const selectedSession = selectedSessionId
    ? DAILY_SESSIONS.find((s) => s.id === selectedSessionId) ?? null
    : null;

  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <View style={[styles.root, { backgroundColor: colors.bg }]}>
      <StatusBar style={colors.statusBar} />
      <SafeAreaView style={styles.safe}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.title, { color: colors.textPrimary }]}>Ma Pratique</Text>
            <Text style={[styles.dateText, { color: colors.textMuted }]}>{today}</Text>
          </View>
          <TouchableOpacity
            style={[styles.journalBtn, { backgroundColor: accent + '18', borderColor: accent + '40' }]}
            onPress={() => setJournalVisible(true)}
            activeOpacity={0.8}
          >
            <Text style={[styles.journalBtnText, { color: accent }]}>📓 Journal</Text>
          </TouchableOpacity>
        </View>

        {/* Stats row */}
        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <Text style={[styles.statValue, { color: colors.textPrimary }]}>{practice.totalSessionsDone}</Text>
            <Text style={[styles.statLabel, { color: colors.textMuted }]}>sessions</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <Text style={[styles.statValue, { color: colors.textPrimary }]}>{practice.journalStreak}</Text>
            <Text style={[styles.statLabel, { color: colors.textMuted }]}>jours journal</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <Text style={[styles.statValue, { color: colors.textPrimary }]}>
              {Object.keys(practice.pathProgress).length}
            </Text>
            <Text style={[styles.statLabel, { color: colors.textMuted }]}>chemins actifs</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={[styles.tabsRow, { borderBottomColor: colors.border }]}>
          {(
            [
              { id: 'sessions' as const, label: '🧘 Sessions', },
              { id: 'paths' as const, label: '🛤 Chemins', },
              { id: 'journal' as const, label: '📓 Journal', },
            ] satisfies { id: Tab; label: string }[]
          ).map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                activeTab === tab.id && styles.tabActive,
                activeTab === tab.id && { borderBottomColor: accent },
              ]}
              onPress={() => setActiveTab(tab.id)}
              activeOpacity={0.75}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: activeTab === tab.id ? accent : colors.textMuted },
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* ── SESSIONS TAB ── */}
          {activeTab === 'sessions' && (
            <>
              {/* Daily session highlight */}
              <View style={[styles.dailyCard, { backgroundColor: colors.bgCard, borderColor: accent + '50' }]}>
                <View style={styles.dailyChipRow}>
                  <View style={[styles.chip, { backgroundColor: accent + '18', borderColor: accent + '40' }]}>
                    <Text style={[styles.chipText, { color: accent }]}>☸ Session du jour</Text>
                  </View>
                  {practice.isSessionDone(dailySession.id) && (
                    <View style={[styles.chip, { backgroundColor: '#4A7A5A20', borderColor: '#4A7A5A50' }]}>
                      <Text style={[styles.chipText, { color: '#4A7A5A' }]}>✓ Accomplie</Text>
                    </View>
                  )}
                </View>
                <Text style={[styles.dailyTitle, { color: colors.textPrimary }]}>{dailySession.title}</Text>
                <Text style={[styles.dailySubtitle, { color: colors.textSecondary }]}>{dailySession.subtitle}</Text>
                <TouchableOpacity
                  style={[styles.startBtn, { backgroundColor: accent }]}
                  onPress={() => setSelectedSessionId(dailySession.id)}
                  activeOpacity={0.85}
                >
                  <Text style={styles.startBtnText}>
                    {practice.isSessionDone(dailySession.id) ? '↻ Repratiquer' : '▶ Commencer'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* All sessions */}
              <Text style={[styles.sectionTitle, { color: colors.textMuted }]}>
                TOUTES LES SESSIONS ({DAILY_SESSIONS.length})
              </Text>
              {DAILY_SESSIONS.map((session) => {
                const done = practice.isSessionDone(session.id);
                return (
                  <TouchableOpacity
                    key={session.id}
                    style={[
                      styles.sessionRow,
                      {
                        backgroundColor: done ? colors.bgSection : colors.bgCard,
                        borderColor: done ? accent + '40' : colors.border,
                      },
                    ]}
                    onPress={() => setSelectedSessionId(session.id)}
                    activeOpacity={0.8}
                  >
                    <View style={[styles.sessionDot, { backgroundColor: done ? accent : colors.border }]}>
                      {done && <Text style={styles.sessionDotCheck}>✓</Text>}
                    </View>
                    <View style={styles.sessionInfo}>
                      <Text style={[styles.sessionTitle, { color: colors.textPrimary }]} numberOfLines={1}>
                        {session.title}
                      </Text>
                      <Text style={[styles.sessionTheme, { color: colors.textMuted }]}>
                        {session.theme} · {session.durationMin} min
                      </Text>
                    </View>
                    <Text style={[styles.sessionArrow, { color: colors.textMuted }]}>›</Text>
                  </TouchableOpacity>
                );
              })}

              {/* ── RESSOURCES ── */}
              <Text style={[styles.sectionTitle, { color: colors.textMuted, marginTop: 8 }]}>
                RESSOURCES
              </Text>
              <TouchableOpacity
                style={[styles.resourceRow, { backgroundColor: colors.bgCard, borderColor: colors.border }]}
                onPress={() => router.push('/mantras' as any)}
                activeOpacity={0.8}
              >
                <View style={[styles.resourceIcon, { backgroundColor: accent + '18', borderColor: accent + '40' }]}>
                  <Text style={styles.resourceIconText}>🙏</Text>
                </View>
                <View style={styles.sessionInfo}>
                  <Text style={[styles.sessionTitle, { color: colors.textPrimary }]}>
                    Mantras & Sutras
                  </Text>
                  <Text style={[styles.sessionTheme, { color: colors.textMuted }]}>
                    Mantras · Sutras · Koans · Enseignements
                  </Text>
                </View>
                <Text style={[styles.sessionArrow, { color: colors.textMuted }]}>›</Text>
              </TouchableOpacity>
            </>
          )}

          {/* ── PATHS TAB ── */}
          {activeTab === 'paths' && (
            <>
              <View style={[styles.pathsIntro, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
                <Text style={[styles.pathsIntroTitle, { color: colors.textPrimary }]}>
                  Chemins de Pratique
                </Text>
                <Text style={[styles.pathsIntroText, { color: colors.textSecondary }]}>
                  Des parcours structurés pour approfondir la pratique. Les 3 premiers chemins sont offerts librement. Les autres nécessitent Premium.
                </Text>
              </View>

              <Text style={[styles.sectionTitle, { color: colors.textMuted }]}>CHEMINS LIBRES</Text>
              <WeeklyPathList
                paths={WEEKLY_PATHS.filter((p) => !p.isPremium)}
                isPremium={isPremium}
                practice={practice}
                onShowPaywall={() => setPaywallVisible(true)}
              />

              <Text style={[styles.sectionTitle, { color: colors.textMuted, marginTop: 8 }]}>
                CHEMINS PREMIUM
              </Text>
              <WeeklyPathList
                paths={WEEKLY_PATHS.filter((p) => p.isPremium)}
                isPremium={isPremium}
                practice={practice}
                onShowPaywall={() => setPaywallVisible(true)}
              />
            </>
          )}

          {/* ── JOURNAL TAB ── */}
          {activeTab === 'journal' && (
            <>
              <View style={[styles.journalIntro, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
                <Text style={styles.journalEmoji}>📓</Text>
                <Text style={[styles.journalIntroTitle, { color: colors.textPrimary }]}>
                  Journal Spirituel
                </Text>
                <Text style={[styles.journalIntroText, { color: colors.textSecondary }]}>
                  Six questions bouddhistes pour approfondir la pratique quotidienne. Chaque réponse est une méditation en soi.
                </Text>
                {practice.journalStreak > 0 && (
                  <View style={[styles.streakBadge, { backgroundColor: accent + '18', borderColor: accent + '40' }]}>
                    <Text style={[styles.streakBadgeText, { color: accent }]}>
                      🔥 {practice.journalStreak} jour{practice.journalStreak > 1 ? 's' : ''} consécutif{practice.journalStreak > 1 ? 's' : ''}
                    </Text>
                  </View>
                )}
                <TouchableOpacity
                  style={[styles.openJournalBtn, { backgroundColor: accent }]}
                  onPress={() => setJournalVisible(true)}
                  activeOpacity={0.85}
                >
                  <Text style={styles.openJournalBtnText}>
                    {practice.getJournalEntry(new Date().toISOString().split('T')[0])
                      ? '✏️ Continuer le journal du jour'
                      : '📝 Écrire le journal du jour'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Past entries summary */}
              <Text style={[styles.sectionTitle, { color: colors.textMuted }]}>ENTRÉES RÉCENTES</Text>
              {Object.entries(practice.journalEntries)
                .sort(([a], [b]) => b.localeCompare(a))
                .slice(0, 7)
                .map(([dateKey, entry]) => {
                  const d = new Date(dateKey);
                  const label = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
                  const hasContent = [
                    entry.presence,
                    entry.impermanence,
                    entry.compassion,
                    entry.teaching,
                    entry.intention,
                    entry.gratitude,
                  ].filter((v) => v.trim().length > 0).length;
                  return (
                    <View
                      key={dateKey}
                      style={[styles.pastEntry, { backgroundColor: colors.bgCard, borderColor: colors.border }]}
                    >
                      <View style={[styles.pastEntryDot, { backgroundColor: accent }]} />
                      <View style={styles.pastEntryContent}>
                        <Text style={[styles.pastEntryDate, { color: colors.textSecondary }]} numberOfLines={1}>
                          {label}
                        </Text>
                        <Text style={[styles.pastEntryCount, { color: colors.textMuted }]}>
                          {hasContent} réponse{hasContent > 1 ? 's' : ''} sur 6
                        </Text>
                      </View>
                      <Text style={[styles.pastEntryArrow, { color: colors.textMuted }]}>›</Text>
                    </View>
                  );
                })}
              {Object.keys(practice.journalEntries).length === 0 && (
                <Text style={[styles.emptyText, { color: colors.textMuted }]}>
                  Aucune entrée pour l\`instant. Commencez aujourd\'hui.
`                </Text>
              )}
            </>
          )}
        </ScrollView>
      </SafeAreaView>

      {/* Session modal */}
      {selectedSession && (
        <DailySession
          session={selectedSession}
          visible={!!selectedSession}
          onClose={() => setSelectedSessionId(null)}
          onComplete={() => {
            if (selectedSession) practice.markSessionDone(selectedSession.id);
          }}
        />
      )}

      {/* Journal modal */}
      <SpiritualJournal
        visible={journalVisible}
        onClose={() => setJournalVisible(false)}
        practice={practice}
      />

      {/* Paywall */}
      <PremiumPaywall
        visible={paywallVisible}
        onClose={() => setPaywallVisible(false)}
      />
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
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  title: { fontFamily: 'Cinzel_700Bold', fontSize: 22, letterSpacing: 0.5 },
  dateText: { fontFamily: 'Lato_400Regular', fontSize: 12, marginTop: 2, textTransform: 'capitalize' },
  journalBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
  },
  journalBtnText: { fontFamily: 'Lato_700Bold', fontSize: 12, letterSpacing: 0.3 },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 12,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
    gap: 2,
  },
  statValue: { fontFamily: 'Cinzel_700Bold', fontSize: 20 },
  statLabel: { fontFamily: 'Lato_400Regular', fontSize: 10, letterSpacing: 0.5 },
  tabsRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingHorizontal: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {},
  tabText: { fontFamily: 'Lato_700Bold', fontSize: 12, letterSpacing: 0.3 },
  scrollContent: { padding: 16, paddingBottom: 100, gap: 12 },
  // Daily card
  dailyCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 18,
    gap: 10,
  },
  dailyChipRow: { flexDirection: 'row', gap: 8 },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
  },
  chipText: { fontFamily: 'Lato_700Bold', fontSize: 10, letterSpacing: 0.5 },
  dailyTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 16, letterSpacing: 0.3, lineHeight: 24 },
  dailySubtitle: { fontFamily: 'Lato_400Regular', fontSize: 12, fontStyle: 'italic', lineHeight: 18 },
  startBtn: {
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 4,
  },
  startBtnText: { fontFamily: 'Lato_700Bold', fontSize: 14, color: '#fff', letterSpacing: 0.3 },
  // Section titles
  sectionTitle: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 4,
    marginBottom: 4,
  },
  // Session rows
  sessionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 12,
  },
  sessionDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sessionDotCheck: { color: '#fff', fontSize: 13, fontFamily: 'Lato_700Bold' },
  sessionInfo: { flex: 1 },
  sessionTitle: { fontFamily: 'Lato_700Bold', fontSize: 13, lineHeight: 18 },
  sessionTheme: { fontFamily: 'Lato_400Regular', fontSize: 11, marginTop: 2 },
  sessionArrow: { fontSize: 20 },
  // Resources
  resourceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 12,
  },
  resourceIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resourceIconText: { fontSize: 18 },
  // Paths
  pathsIntro: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    gap: 8,
  },
  pathsIntroTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 16, letterSpacing: 0.3 },
  pathsIntroText: { fontFamily: 'Lato_400Regular', fontSize: 13, lineHeight: 20 },
  // Journal tab
  journalIntro: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
    gap: 10,
  },
  journalEmoji: { fontSize: 48 },
  journalIntroTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 18, letterSpacing: 0.3, textAlign: 'center' },
  journalIntroText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
  },
  streakBadge: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 12, borderWidth: 1 },
  streakBadgeText: { fontFamily: 'Lato_700Bold', fontSize: 12, letterSpacing: 0.3 },
  openJournalBtn: { borderRadius: 12, paddingVertical: 13, paddingHorizontal: 24, marginTop: 4 },
  openJournalBtnText: { fontFamily: 'Lato_700Bold', fontSize: 14, color: '#fff', letterSpacing: 0.3 },
  pastEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 12,
  },
  pastEntryDot: { width: 8, height: 8, borderRadius: 4 },
  pastEntryContent: { flex: 1 },
  pastEntryDate: { fontFamily: 'Lato_700Bold', fontSize: 13, textTransform: 'capitalize' },
  pastEntryCount: { fontFamily: 'Lato_400Regular', fontSize: 11, marginTop: 2 },
  pastEntryArrow: { fontSize: 20 },
  emptyText: { fontFamily: 'Lato_400Regular', fontSize: 13, textAlign: 'center', paddingVertical: 20, fontStyle: 'italic' },
});
