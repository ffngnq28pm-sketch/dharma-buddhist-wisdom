import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { X, Info, Image as ImageIcon } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import { useDailyTeaching } from '@/hooks/useDailyTeaching';
import { isWallpaperAvailable } from '@/services/WallpaperService';

interface Props {
  onExportPress?: () => void;
}

export function DailyTeachingWidget({ onExportPress }: Props) {
  const { colors } = useTheme();
  const teaching = useDailyTeaching();
  const [modalVisible, setModalVisible] = useState(false);
  const accent = '#C67C2B';
  const wallpaperOk = isWallpaperAvailable();

  return (
    <>
      <View style={[styles.card, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
        <View style={styles.header}>
          <Text style={[styles.chip, { color: accent, borderColor: 'rgba(198,124,43,0.3)', backgroundColor: 'rgba(198,124,43,0.07)' }]}>
            ☸ Enseignement du jour
          </Text>
          <Text style={[styles.tradition, { color: colors.textMuted }]}>{teaching.tradition}</Text>
        </View>

        <Text style={[styles.title, { color: colors.textPrimary }]}>{teaching.teaching}</Text>
        <Text style={[styles.teacher, { color: accent }]}>{teaching.teacher}</Text>
        {teaching.pali && (
          <Text style={[styles.pali, { color: colors.textMuted }]}>{teaching.pali}</Text>
        )}
        <Text style={[styles.story, { color: colors.textSecondary }]} numberOfLines={2}>
          {teaching.story}
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.btn, { borderColor: colors.border }]}
            onPress={() => setModalVisible(true)}
            activeOpacity={0.75}
          >
            <Info size={14} color={accent} />
            <Text style={[styles.btnText, { color: colors.textSecondary }]}>En savoir plus</Text>
          </TouchableOpacity>

          {wallpaperOk && onExportPress && (
            <TouchableOpacity
              style={[styles.btn, { borderColor: 'rgba(198,124,43,0.4)', backgroundColor: 'rgba(198,124,43,0.07)' }]}
              onPress={onExportPress}
              activeOpacity={0.75}
            >
              <ImageIcon size={14} color={accent} />
              <Text style={[styles.btnText, { color: accent }]}>Fond d'écran</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={[styles.modal, { backgroundColor: colors.bg }]}>
          <View style={styles.modalHeader}>
            <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>{teaching.teaching}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <X size={22} color={colors.textMuted} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.modalBody} showsVerticalScrollIndicator={false}>
            <Text style={[styles.modalTeacher, { color: accent }]}>
              {teaching.teacher} · {teaching.tradition}
            </Text>
            {teaching.pali && (
              <Text style={[styles.modalPali, { color: colors.textMuted }]}>{teaching.pali}</Text>
            )}
            <Text style={[styles.modalSection, { color: colors.textMuted }]}>RÉCIT</Text>
            <Text style={[styles.modalText, { color: colors.textSecondary }]}>{teaching.story}</Text>
            <View style={[styles.practiceBox, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
              <Text style={[styles.practiceLabel, { color: accent }]}>☸ Pratique du jour</Text>
              <Text style={[styles.practiceText, { color: colors.textSecondary }]}>{teaching.practice}</Text>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 16, borderWidth: 1, padding: 16, marginBottom: 12 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  chip: { fontFamily: 'Lato_700Bold', fontSize: 11, letterSpacing: 0.5, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, borderWidth: 1 },
  tradition: { fontFamily: 'Lato_400Regular', fontSize: 10, fontStyle: 'italic' },
  title: { fontFamily: 'Cinzel_700Bold', fontSize: 16, marginBottom: 2, lineHeight: 22 },
  teacher: { fontFamily: 'Lato_700Bold', fontSize: 12, marginBottom: 4 },
  pali: { fontFamily: 'Lato_400Regular', fontStyle: 'italic', fontSize: 11, marginBottom: 6 },
  story: { fontFamily: 'Lato_400Regular', fontSize: 13, lineHeight: 20, marginBottom: 14 },
  actions: { flexDirection: 'row', gap: 10 },
  btn: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 7, borderRadius: 10, borderWidth: 1 },
  btnText: { fontFamily: 'Lato_700Bold', fontSize: 12 },
  modal: { flex: 1, paddingTop: 16 },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 16 },
  modalTitle: { fontFamily: 'Cinzel_700Bold', fontSize: 19, flex: 1, lineHeight: 26 },
  modalBody: { paddingHorizontal: 20, paddingBottom: 40 },
  modalTeacher: { fontFamily: 'Lato_700Bold', fontSize: 13, marginBottom: 6 },
  modalPali: { fontFamily: 'Lato_400Regular', fontStyle: 'italic', fontSize: 12, marginBottom: 20 },
  modalSection: { fontFamily: 'Lato_400Regular', fontSize: 10, letterSpacing: 2, marginBottom: 8, marginTop: 12 },
  modalText: { fontFamily: 'Lato_400Regular', fontSize: 14, lineHeight: 22 },
  practiceBox: { borderRadius: 14, borderWidth: 1, padding: 16, marginTop: 20 },
  practiceLabel: { fontFamily: 'Cinzel_700Bold', fontSize: 13, marginBottom: 8 },
  practiceText: { fontFamily: 'Lato_400Regular', fontSize: 14, lineHeight: 22 },
});
