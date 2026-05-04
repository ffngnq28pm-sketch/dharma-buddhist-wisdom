import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GradeLevel } from '@/types';
import { useTheme } from "@/context/ThemeContext";

interface Props {
  grade: GradeLevel;
  gradeScore: number;
  compact?: boolean;
}

const GRADE_COLORS: Record<GradeLevel, string> = {
  'Éveillant':  '#8A8A8A',
  'Pratiquant': '#7A9A6A',
  'Méditant':   '#5A8A7A',
  'Upasaka':    '#4A7FA5',
  'Samana':     '#5A6A9A',
  'Bhikkhu':    '#7A5A9A',
  'Thera':      '#9A5A5A',
  'Mahathera':  '#9A7A3A',
  'Bodhi':      '#C9A84C',
  'Arahant':    '#D4AF37',
};

const GRADE_ICONS: Record<GradeLevel, string> = {
  'Éveillant':  '○',
  'Pratiquant': '◎',
  'Méditant':   '◈',
  'Upasaka':    '◆',
  'Samana':     '✦',
  'Bhikkhu':    '✧',
  'Thera':      '✦✦',
  'Mahathera':  '❋',
  'Bodhi':      '❊',
  'Arahant':    '☸',
};

export default function GradeDisplay({ grade, gradeScore, compact = false }: Props) {
  const { colors } = useTheme();
  const color = GRADE_COLORS[grade];
  const icon = GRADE_ICONS[grade];

  if (compact) {
    return (
      <View style={[styles.badge, { backgroundColor: color + '22', borderColor: color }]}>
        <Text style={[styles.badgeIcon, { color }]}>{icon}</Text>
        <Text style={[styles.badgeText, { color }]}>{grade}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.bgCard }]}>
      <View style={[styles.circle, { borderColor: color, backgroundColor: color + '15' }]}>
        <Text style={[styles.circleIcon, { color }]}>{icon}</Text>
      </View>
      <Text style={[styles.gradeLabel, { color }]}>{grade}</Text>
      <Text style={[styles.scoreLabel, { color: colors.textMuted }]}>{gradeScore} pts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    gap: 8,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleIcon: {
    fontSize: 32,
  },
  gradeLabel: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
  scoreLabel: {
    fontSize: 13,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
  },
  badgeIcon: {
    fontSize: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
