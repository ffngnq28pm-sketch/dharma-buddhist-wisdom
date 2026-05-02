import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { JournalEntry, UsePracticeReturn } from '@/hooks/usePractice';

const QUESTIONS = [
  {
    field: 'presence' as const,
    label: 'Présence',
    question: `Comment ai-je cultivé la présence à ce qui est aujourd\'hui ?`,
    placeholder: `Un moment, une sensation, un retour à l\'instant présent...`,
    emoji: '🌿',
  },
  {
    field: 'impermanence' as const,
    label: 'Impermanence',
    question: `Un moment d\'impermanence que j\'ai observé`,
    placeholder: `Quelque chose qui a changé, qui a commencé ou s\'est terminé...`,
    emoji: '🍂',
  },
  {
    field: 'compassion' as const,
    label: 'Compassion',
    question: 'Comment ai-je pratiqué la compassion ?',
    placeholder: 'Envers moi-même, envers autrui, envers un être inconnu...',
    emoji: '❤️',
  },
  {
    field: 'teaching' as const,
    label: 'Enseignement',
    question: `Un enseignement du Dharma qui m\'a guidé`,
    placeholder: 'Une pensée, une citation, une réalisation dans la pratique...',
    emoji: '📿',
  },
  {
    field: 'intention' as const,
    label: 'Intention',
    question: 'Mon intention pour demain (sila / pratique)',
    placeholder: 'Une résolution éthique, un engagement de pratique, un vœu...',
    emoji: '☸️',
  },
  {
    field: 'gratitude' as const,
    label: 'Gratitude',
    question: `Ce pour quoi j\'exprime de la gratitude`,
    placeholder: 'Un être, un moment, une qualité de la vie, le Dharma lui-même...',
    emoji: '🙏',
  },
] as const;

type QuestionField = typeof QUESTIONS[number]['field'];

interface Props {
  visible: boolean;
  onClose: () => void;
  practice: Pick<UsePracticeReturn, 'getJournalEntry' | 'saveJournalEntry' | 'journalStreak'>;
}

function getTodayKey(): string {
  return new Date().toISOString().split('T')[0];
}

export function SpiritualJournal({ visible, onClose, practice }: Props) {
  const { colors } = useTheme();
  const todayKey = getTodayKey();
  const accent = '#C67C2B';

  const [values, setValues] = useState<Record<QuestionField, string>>({
    presence: '',
    impermanence: '',
    compassion: '',
    teaching: '',
    intention: '',
    gratitude: '',
  });
  const [saved, setSaved] = useState(false);
  const [activeField, setActiveField] = useState<QuestionField | null>(null);

  useEffect(() => {
    if (visible) {
      const existing = practice.getJournalEntry(todayKey);
      if (existing) {
        setValues({
          presence: existing.presence,
          impermanence: existing.impermanence,
          compassion: existing.compassion,
          teaching: existing.teaching,
          intention: existing.intention,
          gratitude: existing.gratitude,
        });
        setSaved(true);
      } else {
        setValues({ presence: '', impermanence: '', compassion: '', teaching: '', intention: '', gratitude: '' });
        setSaved(false);
      }
      setActiveField(null);
    }
  }, [visible, todayKey, practice]);

  const handleChange = useCallback((field: QuestionField, text: string) => {
    setSaved(false);
    setValues((prev) => ({ ...prev, [field]: text }));
  }, []);

  const handleSave = useCallback(() => {
    const today = new Date();
    const dateLabel = today.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
    practice.saveJournalEntry({
      date: todayKey,
      ...values,
    } as Omit<JournalEntry, 'id'>);
    setSaved(true);
    void dateLabel; // used implicitly
  }, [values, todayKey, practice]);

  const hasAnyContent = Object.values(values).some((v) => v.trim().length > 0);

  const today = new Date();
  const todayLabel = today.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={[styles.root, { backgroundColor: colors.bg }]}>
          {/* Header */}
          <View style={[styles.header, { borderBottomColor: colors.border }]}>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn} activeOpacity={0.7}>
              <Text style={[styles.closeBtnText, { color: colors.textMuted }]}>✕</Text>
            </TouchableOpacity>
            <View style={styles.headerCenter}>
              <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Journal Spirituel</Text>
              <Text style={[styles.headerDate, { color: colors.textMuted }]} numberOfLines={1}>
                {todayLabel}
              </Text>
            </View>
            <View style={styles.closeBtnPlaceholder} />
          </View>

          {/* Streak badge */}
          {practice.journalStreak > 0 && (
            <View style={[styles.streakRow]}>
              <View style={[styles.streakBadge, { backgroundColor: accent + '18', borderColor: accent + '40' }]}>
                <Text style={[styles.streakText, { color: accent }]}>
                  🔥 {practice.journalStreak} jour{practice.journalStreak > 1 ? 's' : ''} consécutif{practice.journalStreak > 1 ? 's' : ''}
                </Text>
              </View>
            </View>
          )}

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Intro */}
            <View style={[styles.introBox, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
              <Text style={[styles.introText, { color: colors.textSecondary }]}>
                «L\'écriture est une forme de méditation. Chaque mot posé avec présence est un acte de pleine conscience.»
'              </Text>
            </View>

            {/* Questions */}
            {QUESTIONS.map((q, index) => {
              const isActive = activeField === q.field;
              const hasContent = values[q.field].trim().length > 0;
              return (
                <View
                  key={q.field}
                  style={[
                    styles.questionCard,
                    {
                      backgroundColor: isActive ? colors.bgSection : colors.bgCard,
                      borderColor: isActive ? accent + '60' : hasContent ? accent + '30' : colors.border,
                    },
                  ]}
                >
                  <View style={styles.questionHeader}>
                    <Text style={styles.questionEmoji}>{q.emoji}</Text>
                    <View style={styles.questionLabels}>
                      <Text style={[styles.questionIndex, { color: colors.textMuted }]}>
                        {index + 1} / {QUESTIONS.length}
                      </Text>
                      <Text style={[styles.questionLabel, { color: accent }]}>{q.label}</Text>
                    </View>
                    {hasContent && (
                      <View style={[styles.doneBadge, { backgroundColor: accent + '20' }]}>
                        <Text style={[styles.doneBadgeText, { color: accent }]}>✓</Text>
                      </View>
                    )}
                  </View>
                  <Text style={[styles.questionText, { color: colors.textPrimary }]}>{q.question}</Text>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        color: colors.textPrimary,
                        backgroundColor: colors.bgInput,
                        borderColor: isActive ? accent + '60' : colors.border,
                      },
                    ]}
                    value={values[q.field]}
                    onChangeText={(text) => handleChange(q.field, text)}
                    onFocus={() => setActiveField(q.field)}
                    onBlur={() => setActiveField(null)}
                    placeholder={q.placeholder}
                    placeholderTextColor={colors.textMuted}
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                  />
                </View>
              );
            })}

            {/* Save button */}
            <TouchableOpacity
              style={[
                styles.saveBtn,
                {
                  backgroundColor: hasAnyContent ? accent : colors.bgSection,
                  borderColor: hasAnyContent ? accent : colors.border,
                },
              ]}
              onPress={handleSave}
              disabled={!hasAnyContent}
              activeOpacity={0.85}
            >
              <Text
                style={[
                  styles.saveBtnText,
                  { color: hasAnyContent ? '#fff' : colors.textMuted },
                ]}
              >
                {saved ? '✓ Journal sauvegardé' : '☸ Sauvegarder le journal'}
              </Text>
            </TouchableOpacity>

            <Text style={[styles.footerNote, { color: colors.textMuted }]}>
              Le journal est sauvegardé localement sur votre appareil.{'\n'}
              Votre pratique vous appartient.
            </Text>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
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
  headerTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 16, letterSpacing: 0.3 },
  headerDate: { fontFamily: 'Lato_400Regular', fontSize: 11, marginTop: 2, textTransform: 'capitalize', textAlign: 'center' },
  streakRow: { paddingHorizontal: 20, paddingTop: 12, alignItems: 'center' },
  streakBadge: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 12, borderWidth: 1 },
  streakText: { fontFamily: 'Lato_700Bold', fontSize: 12, letterSpacing: 0.3 },
  scrollContent: { padding: 20, gap: 16, paddingBottom: 60 },
  introBox: { borderRadius: 14, borderWidth: 1, padding: 16 },
  introText: { fontFamily: 'Lato_400Regular', fontSize: 13, lineHeight: 21, fontStyle: 'italic', textAlign: 'center' },
  questionCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    gap: 10,
  },
  questionHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  questionEmoji: { fontSize: 22 },
  questionLabels: { flex: 1 },
  questionIndex: { fontFamily: 'Lato_400Regular', fontSize: 10, letterSpacing: 1 },
  questionLabel: { fontFamily: 'Cinzel_700Bold', fontSize: 13, letterSpacing: 0.3 },
  doneBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  doneBadgeText: { fontFamily: 'Lato_700Bold', fontSize: 12 },
  questionText: { fontFamily: 'Lato_400Regular', fontSize: 14, lineHeight: 22 },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    lineHeight: 22,
    minHeight: 80,
  },
  saveBtn: {
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 8,
  },
  saveBtnText: { fontFamily: 'Lato_700Bold', fontSize: 15, letterSpacing: 0.3 },
  footerNote: { fontFamily: 'Lato_400Regular', fontSize: 11, textAlign: 'center', lineHeight: 18 },
});
