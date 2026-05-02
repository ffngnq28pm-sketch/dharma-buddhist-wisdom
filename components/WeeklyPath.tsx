import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { WeeklyPath as WeeklyPathType } from '@/data/weeklyPaths';
import { UsePracticeReturn } from '@/hooks/usePractice';

interface PathCardProps {
  path: WeeklyPathType;
  isPremium: boolean;
  onPress: () => void;
  progress: number; // 0–1
  isStarted: boolean;
}

function PathCard({ path, isPremium, onPress, progress, isStarted }: PathCardProps) {
  const { colors } = useTheme();
  const accent = '#C67C2B';
  const locked = path.isPremium && !isPremium;

  return (
    <TouchableOpacity
      style={[
        styles.pathCard,
        {
          backgroundColor: colors.bgCard,
          borderColor: locked ? colors.border : path.color + '40',
          opacity: locked ? 0.7 : 1,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {/* Color bar */}
      <View style={[styles.pathColorBar, { backgroundColor: locked ? colors.border : path.color }]} />

      <View style={styles.pathContent}>
        {/* Header row */}
        <View style={styles.pathHeaderRow}>
          <Text style={styles.pathEmoji}>{path.emoji}</Text>
          <View style={styles.pathLabels}>
            {path.isPremium && (
              <View style={[styles.premiumChip, { backgroundColor: accent + '18', borderColor: accent + '40' }]}>
                <Text style={[styles.premiumChipText, { color: accent }]}>
                  {locked ? '🔒 Premium' : '✦ Premium'}
                </Text>
              </View>
            )}
            <Text style={[styles.traditionText, { color: colors.textMuted }]}>{path.tradition}</Text>
          </View>
          <Text style={[styles.durationText, { color: colors.textMuted }]}>
            {path.durationDays}j
          </Text>
        </View>

        <Text style={[styles.pathTitle, { color: colors.textPrimary }]}>{path.title}</Text>
        <Text style={[styles.pathSubtitle, { color: colors.textSecondary }]}>{path.subtitle}</Text>

        {/* Progress */}
        {isStarted && (
          <View style={styles.progressSection}>
            <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${progress * 100}%` as `${number}%`, backgroundColor: path.color },
                ]}
              />
            </View>
            <Text style={[styles.progressLabel, { color: colors.textMuted }]}>
              {Math.round(progress * 100)}%
            </Text>
          </View>
        )}

        {!isStarted && !locked && (
          <Text style={[styles.startHint, { color: path.color }]}>Commencer ce chemin →</Text>
        )}
        {locked && (
          <Text style={[styles.lockedHint, { color: colors.textMuted }]}>Débloquer avec Premium</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

interface PathDetailProps {
  path: WeeklyPathType;
  visible: boolean;
  onClose: () => void;
  isPremium: boolean;
  practice: Pick<UsePracticeReturn, 'startPath' | 'markPathDayDone' | 'getPathProgress' | 'isPathStarted'>;
  onShowPaywall: () => void;
}

function PathDetail({ path, visible, onClose, isPremium, practice, onShowPaywall }: PathDetailProps) {
  const { colors } = useTheme();
  const accent = '#C67C2B';
  const locked = path.isPremium && !isPremium;
  const progress = practice.getPathProgress(path.id);
  const isStarted = practice.isPathStarted(path.id);

  const handleStart = useCallback(() => {
    if (locked) {
      onClose();
      onShowPaywall();
      return;
    }
    practice.startPath(path.id);
  }, [locked, path.id, practice, onClose, onShowPaywall]);

  const handleDayToggle = useCallback(
    (day: number) => {
      if (locked) return;
      if (!isStarted) practice.startPath(path.id);
      practice.markPathDayDone(path.id, day);
    },
    [locked, isStarted, path.id, practice]
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={[styles.detailRoot, { backgroundColor: colors.bg }]}>
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn} activeOpacity={0.7}>
            <Text style={[styles.closeBtnText, { color: colors.textMuted }]}>✕</Text>
          </TouchableOpacity>
          <Text style={[styles.detailHeaderTitle, { color: colors.textPrimary }]} numberOfLines={1}>
            {path.title}
          </Text>
          <View style={styles.closeBtnPlaceholder} />
        </View>

        <ScrollView contentContainerStyle={styles.detailScroll} showsVerticalScrollIndicator={false}>
          {/* Hero */}
          <View style={styles.detailHero}>
            <Text style={styles.detailEmoji}>{path.emoji}</Text>
            <Text style={[styles.detailTitle, { color: colors.textPrimary }]}>{path.title}</Text>
            <Text style={[styles.detailSubtitle, { color: '#C67C2B' }]}>{path.subtitle}</Text>
            <View style={styles.detailMeta}>
              <View style={[styles.metaChip, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
                <Text style={[styles.metaChipText, { color: colors.textSecondary }]}>
                  📿 {path.tradition}
                </Text>
              </View>
              <View style={[styles.metaChip, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
                <Text style={[styles.metaChipText, { color: colors.textSecondary }]}>
                  🗓 {path.durationDays} jours
                </Text>
              </View>
              {path.isPremium && (
                <View style={[styles.metaChip, { backgroundColor: accent + '18', borderColor: accent + '40' }]}>
                  <Text style={[styles.metaChipText, { color: accent }]}>✦ Premium</Text>
                </View>
              )}
            </View>
          </View>

          {/* Description */}
          <View style={[styles.descBox, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <Text style={[styles.descText, { color: colors.textSecondary }]}>{path.description}</Text>
          </View>

          {/* Progress overview */}
          {isStarted && progress && (
            <View style={[styles.progressOverview, { backgroundColor: colors.bgSection, borderColor: colors.borderAccent }]}>
              <Text style={[styles.progressOverviewTitle, { color: accent }]}>☸ Progression</Text>
              <View style={styles.progressRow}>
                <View style={[styles.progressTrackLg, { backgroundColor: colors.border }]}>
                  <View
                    style={[
                      styles.progressFillLg,
                      {
                        width: `${(progress.completedDays.length / path.durationDays) * 100}%` as `${number}%`,
                        backgroundColor: path.color,
                      },
                    ]}
                  />
                </View>
                <Text style={[styles.progressCountText, { color: colors.textSecondary }]}>
                  {progress.completedDays.length} / {path.durationDays}
                </Text>
              </View>
            </View>
          )}

          {/* Days */}
          <Text style={[styles.daysTitle, { color: colors.textMuted }]}>PROGRAMME JOUR PAR JOUR</Text>
          {path.days.map((day) => {
            const isDone = progress?.completedDays.includes(day.day) ?? false;
            return (
              <TouchableOpacity
                key={day.day}
                style={[
                  styles.dayCard,
                  {
                    backgroundColor: isDone ? path.color + '12' : colors.bgCard,
                    borderColor: isDone ? path.color + '60' : colors.border,
                  },
                ]}
                onPress={() => handleDayToggle(day.day)}
                activeOpacity={0.8}
                disabled={locked}
              >
                <View style={[styles.dayNumber, { backgroundColor: isDone ? path.color : colors.bgSection }]}>
                  <Text style={[styles.dayNumberText, { color: isDone ? '#fff' : colors.textMuted }]}>
                    {isDone ? '✓' : String(day.day)}
                  </Text>
                </View>
                <View style={styles.dayContent}>
                  <Text style={[styles.dayTitle, { color: colors.textPrimary }]}>{day.title}</Text>
                  <Text style={[styles.dayIntention, { color: colors.textSecondary }]} numberOfLines={2}>
                    {day.intention}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}

          {/* CTA */}
          {locked ? (
            <TouchableOpacity
              style={[styles.ctaBtn, { backgroundColor: accent }]}
              onPress={() => { onClose(); onShowPaywall(); }}
              activeOpacity={0.85}
            >
              <Text style={styles.ctaBtnText}>🔓 Débloquer avec Premium</Text>
            </TouchableOpacity>
          ) : !isStarted ? (
            <TouchableOpacity
              style={[styles.ctaBtn, { backgroundColor: path.color }]}
              onPress={handleStart}
              activeOpacity={0.85}
            >
              <Text style={styles.ctaBtnText}>☸ Commencer ce chemin</Text>
            </TouchableOpacity>
          ) : null}
        </ScrollView>
      </View>
    </Modal>
  );
}

interface Props {
  paths: WeeklyPathType[];
  isPremium: boolean;
  practice: Pick<UsePracticeReturn, 'startPath' | 'markPathDayDone' | 'getPathProgress' | 'isPathStarted'>;
  onShowPaywall: () => void;
}

export function WeeklyPathList({ paths, isPremium, practice, onShowPaywall }: Props) {
  const [selectedPath, setSelectedPath] = useState<WeeklyPathType | null>(null);

  return (
    <>
      <View style={styles.listContainer}>
        {paths.map((path) => {
          const prog = practice.getPathProgress(path.id);
          const isStarted = practice.isPathStarted(path.id);
          const progress = prog ? prog.completedDays.length / path.durationDays : 0;
          return (
            <PathCard
              key={path.id}
              path={path}
              isPremium={isPremium}
              isStarted={isStarted}
              progress={progress}
              onPress={() => setSelectedPath(path)}
            />
          );
        })}
      </View>

      {selectedPath && (
        <PathDetail
          path={selectedPath}
          visible={!!selectedPath}
          onClose={() => setSelectedPath(null)}
          isPremium={isPremium}
          practice={practice}
          onShowPaywall={onShowPaywall}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: { gap: 12 },
  pathCard: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  pathColorBar: { width: 4 },
  pathContent: { flex: 1, padding: 14, gap: 6 },
  pathHeaderRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  pathEmoji: { fontSize: 24 },
  pathLabels: { flex: 1, gap: 3 },
  premiumChip: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  premiumChipText: { fontFamily: 'Lato_700Bold', fontSize: 9, letterSpacing: 0.5 },
  traditionText: { fontFamily: 'Lato_400Regular', fontSize: 10, fontStyle: 'italic' },
  durationText: { fontFamily: 'Lato_700Bold', fontSize: 11 },
  pathTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 15, letterSpacing: 0.3 },
  pathSubtitle: { fontFamily: 'Lato_400Regular', fontSize: 12, lineHeight: 18 },
  progressSection: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  progressTrack: { flex: 1, height: 3, borderRadius: 2, overflow: 'hidden' },
  progressFill: { height: 3, borderRadius: 2 },
  progressLabel: { fontFamily: 'Lato_400Regular', fontSize: 10, minWidth: 30, textAlign: 'right' },
  startHint: { fontFamily: 'Lato_700Bold', fontSize: 11, marginTop: 4, letterSpacing: 0.3 },
  lockedHint: { fontFamily: 'Lato_400Regular', fontSize: 11, marginTop: 4, fontStyle: 'italic' },
  // Detail modal
  detailRoot: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1 },
  closeBtn: { padding: 6, minWidth: 32, alignItems: 'center' },
  closeBtnText: { fontSize: 18 },
  closeBtnPlaceholder: { minWidth: 32 },
  detailHeaderTitle: { flex: 1, fontFamily: 'Cinzel_700Bold', fontSize: 15, textAlign: 'center', letterSpacing: 0.3 },
  detailScroll: { padding: 20, gap: 16, paddingBottom: 60 },
  detailHero: { alignItems: 'center', gap: 8 },
  detailEmoji: { fontSize: 56 },
  detailTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 20, letterSpacing: 0.5, textAlign: 'center' },
  detailSubtitle: { fontFamily: 'Lato_400Regular', fontSize: 13, textAlign: 'center', fontStyle: 'italic' },
  detailMeta: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 4 },
  metaChip: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, borderWidth: 1 },
  metaChipText: { fontFamily: 'Lato_400Regular', fontSize: 11 },
  descBox: { borderRadius: 14, borderWidth: 1, padding: 16 },
  descText: { fontFamily: 'Lato_400Regular', fontSize: 13, lineHeight: 22 },
  progressOverview: { borderRadius: 14, borderWidth: 1, padding: 16, gap: 10 },
  progressOverviewTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 13, letterSpacing: 0.5 },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  progressTrackLg: { flex: 1, height: 6, borderRadius: 3, overflow: 'hidden' },
  progressFillLg: { height: 6, borderRadius: 3 },
  progressCountText: { fontFamily: 'Lato_700Bold', fontSize: 12, minWidth: 36, textAlign: 'right' },
  daysTitle: { fontFamily: 'Lato_400Regular', fontSize: 10, letterSpacing: 2, marginTop: 8 },
  dayCard: { borderRadius: 14, borderWidth: 1, padding: 14, flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  dayNumber: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  dayNumberText: { fontFamily: 'Lato_700Bold', fontSize: 13 },
  dayContent: { flex: 1, gap: 4 },
  dayTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 13, letterSpacing: 0.2 },
  dayIntention: { fontFamily: 'Lato_400Regular', fontSize: 12, lineHeight: 18 },
  ctaBtn: { borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginTop: 8 },
  ctaBtnText: { fontFamily: 'Lato_700Bold', fontSize: 15, color: '#fff', letterSpacing: 0.3 },
});
