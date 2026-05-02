import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Animated,
} from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { DailySessionData, SessionStep } from '@/data/sessions';

const STEP_ICONS: Record<SessionStep['type'], string> = {
  intro: '☸️',
  reading: '📖',
  practice: '🧘',
  reflection: '💭',
  closing: '🌟',
};

const STEP_LABELS: Record<SessionStep['type'], string> = {
  intro: 'Introduction',
  reading: 'Enseignement',
  practice: 'Pratique',
  reflection: 'Réflexion',
  closing: 'Conclusion',
};

interface TimerBarProps {
  durationSec: number;
  onComplete: () => void;
  isActive: boolean;
}

function TimerBar({ durationSec, onComplete, isActive }: TimerBarProps) {
  const { colors } = useTheme();
  const progress = useRef(new Animated.Value(0)).current;
  const [remaining, setRemaining] = useState(durationSec);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    progress.setValue(0);
    setRemaining(durationSec);
    if (isActive) {
      Animated.timing(progress, {
        toValue: 1,
        duration: durationSec * 1000,
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (finished) onComplete();
      });
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    }
    return () => {
      progress.stopAnimation();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, durationSec]);

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const timeLabel = mins > 0
    ? `${mins}:${String(secs).padStart(2, '0')}`
    : `${secs}s`;

  return (
    <View style={styles.timerContainer}>
      <View style={[styles.timerTrack, { backgroundColor: colors.border }]}>
        <Animated.View
          style={[styles.timerFill, { width, backgroundColor: colors.textAccent }]}
        />
      </View>
      <Text style={[styles.timerLabel, { color: colors.textMuted }]}>{timeLabel}</Text>
    </View>
  );
}

interface Props {
  session: DailySessionData;
  visible: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export function DailySession({ session, visible, onClose, onComplete }: Props) {
  const { colors } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  const step = session.steps[currentStep];
  const isLastStep = currentStep === session.steps.length - 1;
  const accent = '#C67C2B';

  const reset = useCallback(() => {
    setCurrentStep(0);
    setIsRunning(false);
    setIsCompleted(false);
  }, []);

  useEffect(() => {
    if (visible) reset();
  }, [visible, reset]);

  const handleStepComplete = useCallback(() => {
    if (isLastStep) {
      setIsRunning(false);
      setIsCompleted(true);
    } else {
      setCurrentStep((s) => s + 1);
      setIsRunning(true);
      setTimeout(() => scrollRef.current?.scrollTo({ y: 0, animated: true }), 100);
    }
  }, [isLastStep]);

  const handleNext = useCallback(() => {
    if (isLastStep) {
      setIsCompleted(true);
      setIsRunning(false);
    } else {
      setCurrentStep((s) => s + 1);
      setIsRunning(true);
      setTimeout(() => scrollRef.current?.scrollTo({ y: 0, animated: true }), 100);
    }
  }, [isLastStep]);

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [reset, onClose]);

  const handleFinish = useCallback(() => {
    onComplete();
    reset();
    onClose();
  }, [onComplete, reset, onClose]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <View style={[styles.root, { backgroundColor: colors.bg }]}>
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.border }]}>
          <TouchableOpacity onPress={handleClose} style={styles.closeBtn} activeOpacity={0.7}>
            <Text style={[styles.closeBtnText, { color: colors.textMuted }]}>✕</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={[styles.headerTitle, { color: colors.textPrimary }]} numberOfLines={1}>
              {session.title}
            </Text>
            <Text style={[styles.headerSub, { color: colors.textMuted }]}>
              {session.steps.length} étapes · {session.durationMin} min
            </Text>
          </View>
          <View style={styles.closeBtnPlaceholder} />
        </View>

        {/* Step progress dots */}
        <View style={styles.dotsRow}>
          {session.steps.map((s, i) => (
            <View
              key={i}
              style={[
                styles.stepDot,
                {
                  backgroundColor:
                    i < currentStep
                      ? accent
                      : i === currentStep
                      ? accent + 'AA'
                      : colors.border,
                  width: i === currentStep ? 20 : 7,
                },
              ]}
            />
          ))}
        </View>

        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {isCompleted ? (
            /* Completed state */
            <View style={styles.completedContainer}>
              <Text style={styles.completedEmoji}>🌟</Text>
              <Text style={[styles.completedTitle, { color: colors.textPrimary }]}>
                Session accomplie
              </Text>
              <Text style={[styles.completedSub, { color: colors.textSecondary }]}>
                {session.theme} · {session.durationMin} min de pratique
              </Text>
              <View style={[styles.completedBox, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
                <Text style={[styles.completedQuote, { color: colors.textSecondary }]}>
                  Sadhu, sadhu, sadhu.{'\n'}Que le mérite de cette pratique bénéficie à tous les êtres.
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.finishBtn, { backgroundColor: accent }]}
                onPress={handleFinish}
                activeOpacity={0.85}
              >
                <Text style={styles.finishBtnText}>Terminer · Retour à la pratique</Text>
              </TouchableOpacity>
            </View>
          ) : (
            /* Step content */
            <View style={styles.stepContainer}>
              {/* Step icon and type */}
              <View style={[styles.stepTypeRow]}>
                <Text style={styles.stepIcon}>{STEP_ICONS[step.type]}</Text>
                <View style={[styles.stepChip, { backgroundColor: accent + '18', borderColor: accent + '40' }]}>
                  <Text style={[styles.stepChipText, { color: accent }]}>
                    {STEP_LABELS[step.type].toUpperCase()} · {currentStep + 1}/{session.steps.length}
                  </Text>
                </View>
              </View>

              {/* Timer */}
              <TimerBar
                durationSec={step.durationSec}
                onComplete={handleStepComplete}
                isActive={isRunning}
              />

              {/* Text */}
              <Text style={[styles.stepText, { color: colors.textPrimary }]}>
                {step.text}
              </Text>

              {/* Instruction */}
              {step.instruction && (
                <View style={[styles.instructionBox, { backgroundColor: colors.bgSection, borderColor: colors.borderAccent }]}>
                  <Text style={[styles.instructionLabel, { color: accent }]}>☸ Instruction</Text>
                  <Text style={[styles.instructionText, { color: colors.textSecondary }]}>
                    {step.instruction}
                  </Text>
                </View>
              )}
            </View>
          )}
        </ScrollView>

        {/* Bottom controls */}
        {!isCompleted && (
          <View style={[styles.controls, { borderTopColor: colors.border, backgroundColor: colors.bg }]}>
            {!isRunning ? (
              <TouchableOpacity
                style={[styles.primaryBtn, { backgroundColor: accent }]}
                onPress={() => setIsRunning(true)}
                activeOpacity={0.85}
              >
                <Text style={styles.primaryBtnText}>
                  {currentStep === 0 ? '☸ Commencer la session' : '▶ Reprendre'}
                </Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.controlsRow}>
                <TouchableOpacity
                  style={[styles.secondaryBtn, { borderColor: colors.border }]}
                  onPress={() => setIsRunning(false)}
                  activeOpacity={0.75}
                >
                  <Text style={[styles.secondaryBtnText, { color: colors.textSecondary }]}>⏸ Pause</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.secondaryBtn, { borderColor: colors.borderAccent, backgroundColor: accent + '12' }]}
                  onPress={handleNext}
                  activeOpacity={0.75}
                >
                  <Text style={[styles.secondaryBtnText, { color: accent }]}>
                    {isLastStep ? '🌟 Terminer' : 'Étape suivante ▶'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  closeBtn: { padding: 6, minWidth: 32, alignItems: 'center' },
  closeBtnText: { fontSize: 18 },
  closeBtnPlaceholder: { minWidth: 32 },
  headerCenter: { flex: 1, alignItems: 'center', paddingHorizontal: 8 },
  headerTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 14, letterSpacing: 0.3, textAlign: 'center' },
  headerSub: { fontFamily: 'Lato_400Regular', fontSize: 11, marginTop: 2, textAlign: 'center' },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingVertical: 12,
  },
  stepDot: { height: 5, borderRadius: 3 },
  scrollContent: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 120 },
  stepContainer: { gap: 20 },
  stepTypeRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  stepIcon: { fontSize: 32 },
  stepChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  stepChipText: { fontFamily: 'Lato_700Bold', fontSize: 10, letterSpacing: 1 },
  timerContainer: { gap: 6 },
  timerTrack: { height: 4, borderRadius: 2, overflow: 'hidden' },
  timerFill: { height: 4, borderRadius: 2 },
  timerLabel: { fontFamily: 'Lato_400Regular', fontSize: 11, textAlign: 'right' },
  stepText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 15,
    lineHeight: 26,
    letterSpacing: 0.2,
  },
  instructionBox: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    gap: 8,
  },
  instructionLabel: { fontFamily: 'Cinzel_700Bold', fontSize: 11, letterSpacing: 1 },
  instructionText: { fontFamily: 'Lato_400Regular', fontSize: 13, lineHeight: 21 },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 36,
  },
  controlsRow: { flexDirection: 'row', gap: 12 },
  primaryBtn: {
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryBtnText: { fontFamily: 'Lato_700Bold', fontSize: 15, color: '#fff', letterSpacing: 0.3 },
  secondaryBtn: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
  },
  secondaryBtnText: { fontFamily: 'Lato_700Bold', fontSize: 13 },
  // Completed state
  completedContainer: { alignItems: 'center', paddingTop: 32, gap: 16 },
  completedEmoji: { fontSize: 64 },
  completedTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 22, letterSpacing: 0.5, textAlign: 'center' },
  completedSub: { fontFamily: 'Lato_400Regular', fontSize: 13, textAlign: 'center' },
  completedBox: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  completedQuote: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    lineHeight: 22,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  finishBtn: {
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 8,
  },
  finishBtnText: { fontFamily: 'Lato_700Bold', fontSize: 15, color: '#fff', letterSpacing: 0.3 },
});
