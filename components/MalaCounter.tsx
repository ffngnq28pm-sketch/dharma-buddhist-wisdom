import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Vibration,
  Platform,
} from 'react-native';
import { RotateCcw } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import { useMala } from '@/hooks/useMala';

export function MalaCounter() {
  const { colors } = useTheme();
  const { count, milestone, progress, floatAnim, prayerLabel, milestoneLabel, increment, reset } = useMala();

  const isMilestone = [108, 216, 1008].includes(count);

  const floatY = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -28],
  });
  const floatOpacity = floatAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  return (
    <View style={styles.wrapper}>
      {/* Header label */}
      <View style={styles.headerRow}>
        <View style={[styles.headerLine, { backgroundColor: colors.border }]} />
        <Text style={[styles.headerLabel, { color: colors.textMuted }]}>
          MĀLA · COMPTEUR DE PERLES ☸
        </Text>
        <View style={[styles.headerLine, { backgroundColor: colors.border }]} />
      </View>

      {/* Prayer label */}
      <Text style={[styles.prayerText, { color: colors.textMuted }]}>
        {prayerLabel}
      </Text>

      {/* Progress arc + tap button */}
      <View style={styles.tapArea}>
        <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${Math.min(progress, 1) * 100}%` as any,
                backgroundColor: isMilestone ? '#C67C2B' : colors.textAccent,
              },
            ]}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.tapBtn,
            {
              backgroundColor: isMilestone ? 'rgba(198,124,43,0.12)' : colors.bgSection,
              borderColor: isMilestone ? '#C67C2B' : colors.borderAccent,
            },
          ]}
          onPress={() => {
            if (Platform.OS !== 'web') Vibration.vibrate(isMilestone ? [0, 30, 60, 30] : 20);
            increment();
          }}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.wheelSymbol,
              { color: isMilestone ? '#C67C2B' : colors.textAccent },
            ]}
          >
            ☸
          </Text>
          <Text
            style={[
              styles.countText,
              {
                color: isMilestone ? '#C67C2B' : colors.textPrimary,
                fontFamily: isMilestone ? 'Cinzel_700Bold' : 'Lato_700Bold',
              },
            ]}
          >
            {count}
          </Text>
          <Text style={[styles.milestoneText, { color: colors.textMuted }]}>
            /{milestone}
          </Text>
        </TouchableOpacity>

        <Animated.View
          style={[
            styles.floatLabel,
            { transform: [{ translateY: floatY }], opacity: floatOpacity },
          ]}
          pointerEvents="none"
        >
          <Text style={[styles.floatText, { color: colors.textAccent }]}>+1</Text>
        </Animated.View>

        <TouchableOpacity style={styles.resetBtn} onPress={reset} activeOpacity={0.7}>
          <RotateCcw size={14} color={colors.textMuted} />
        </TouchableOpacity>
      </View>

      {milestoneLabel ? (
        <Text style={styles.milestoneLabel}>{milestoneLabel}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 12,
    gap: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 8,
    paddingHorizontal: 4,
    marginBottom: 4,
  },
  headerLine: { flex: 1, height: 1 },
  headerLabel: {
    fontFamily: 'Lato_400Regular',
    fontSize: 9,
    letterSpacing: 2,
    textAlign: 'center',
  },
  prayerText: {
    fontFamily: 'Cinzel_400Regular',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  tapArea: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    gap: 8,
  },
  progressTrack: {
    width: '60%',
    height: 3,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: 3,
    borderRadius: 2,
  },
  tapBtn: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 2,
  },
  wheelSymbol: {
    fontSize: 18,
    marginBottom: 2,
  },
  countText: {
    fontSize: 28,
    letterSpacing: -1,
  },
  milestoneText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    alignSelf: 'center',
    marginLeft: 1,
  },
  floatLabel: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  },
  floatText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 16,
  },
  resetBtn: {
    padding: 8,
  },
  milestoneLabel: {
    fontFamily: 'Cinzel_400Regular',
    fontSize: 12,
    color: '#C67C2B',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
