import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { X, Star, Check, RotateCcw } from 'lucide-react-native';
import { usePremium, PremiumPlan } from '@/hooks/usePremium';

const { width } = Dimensions.get('window');

interface Props {
  visible: boolean;
  onClose: () => void;
}

const FEATURES = [
  'Accès aux sagesses complètes de la bibliothèque',
  'Noble Octuple Sentier — collection complète (8 spokes)',
  'Maîtres du Dharma — série encyclopédique (8 maîtres)',
  'Retraite Vassa — 90 jours de pratique guidée',
  'Mode nuit — filtre ambré pour la méditation nocturne',
  'Sessions guidées · Parcours de méditation thématiques',
];

export function PremiumPaywall({ visible, onClose }: Props) {
  const { purchasePlan, restorePurchases, isLoading } = usePremium();
  const [plan, setPlan] = useState<PremiumPlan>('yearly');
  const [restoreMsg, setRestoreMsg] = useState('');
  const shimmer = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(60)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(slideUp, { toValue: 0, duration: 340, useNativeDriver: true }),
        Animated.timing(fadeIn, { toValue: 1, duration: 280, useNativeDriver: true }),
      ]).start();
      Animated.loop(
        Animated.timing(shimmer, { toValue: 1, duration: 2400, useNativeDriver: true })
      ).start();
    } else {
      slideUp.setValue(60);
      fadeIn.setValue(0);
    }
  }, [visible]);

  const shimmerX = shimmer.interpolate({
    inputRange: [0, 1],
    outputRange: [-width * 0.5, width * 1.5],
  });

  async function handlePurchase() {
    const result = await purchasePlan(plan);
    if (result.success) onClose();
  }

  async function handleRestore() {
    const ok = await restorePurchases();
    setRestoreMsg(ok ? 'Accès restauré ✓' : 'Aucun abonnement retrouvé');
    if (ok) onClose();
    setTimeout(() => setRestoreMsg(''), 3000);
  }

  return (
    <Modal visible={visible} transparent animationType="none" statusBarTranslucent>
      <Animated.View style={[styles.overlay, { opacity: fadeIn }]}>
        <Animated.View style={[styles.sheet, { transform: [{ translateY: slideUp }] }]}>
          {/* Header */}
          <View style={styles.header}>
            <LinearGradient
              colors={['#0D1A10', '#080C0E']}
              style={StyleSheet.absoluteFillObject}
            />
            <Animated.View style={[styles.shimmer, { transform: [{ translateX: shimmerX }] }]} />
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <X size={18} color="#A0927A" />
            </TouchableOpacity>

            <View style={styles.badge}>
              <Star size={11} color="#C67C2B" fill="#C67C2B" />
              <Text style={styles.badgeText}>DHARMA PREMIUM</Text>
            </View>

            <Text style={styles.headline}>Dhamma · ☸ · Sagesse</Text>
            <View style={styles.trialBadge}>
              <Text style={styles.trialText}>☸ 7 jours gratuits · Résiliable à tout moment</Text>
            </View>
          </View>

          {/* Features */}
          <View style={styles.features}>
            {FEATURES.map((f, i) => (
              <View key={i} style={styles.featureRow}>
                <View style={styles.checkCircle}>
                  <Check size={10} color="#C67C2B" strokeWidth={3} />
                </View>
                <Text style={styles.featureText}>{f}</Text>
              </View>
            ))}
          </View>

          {/* Plans */}
          <View style={styles.plans}>
            <TouchableOpacity
              style={[styles.plan, plan === 'yearly' && styles.planActive]}
              onPress={() => setPlan('yearly')}
              activeOpacity={0.8}
            >
              <View style={styles.planLeft}>
                <Text style={styles.planName}>Annuel</Text>
                <Text style={styles.planPrice}>19,99 € / an</Text>
              </View>
              <View style={styles.bestValueBadge}>
                <Text style={styles.bestValueText}>−44%</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.plan, plan === 'monthly' && styles.planActive]}
              onPress={() => setPlan('monthly')}
              activeOpacity={0.8}
            >
              <Text style={styles.planName}>Mensuel</Text>
              <Text style={styles.planPrice}>2,99 € / mois</Text>
            </TouchableOpacity>
          </View>

          {/* CTA */}
          <TouchableOpacity
            style={styles.cta}
            onPress={handlePurchase}
            activeOpacity={0.88}
            disabled={isLoading}
          >
            <LinearGradient colors={['#D48E3A', '#C67C2B', '#B06820']} style={styles.ctaGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Text style={styles.ctaText}>
                {isLoading ? 'Traitement…' : 'Activer Dharma Premium ☸'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.restore} onPress={handleRestore} activeOpacity={0.7}>
            <RotateCcw size={12} color="#5A5045" />
            <Text style={styles.restoreText}>
              {restoreMsg || 'Restaurer mon accès'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.legal}>
            Abonnement auto-renouvelable. Annulable à tout moment depuis votre compte App Store ou Google Play.
          </Text>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.72)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#0D1410',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: 'hidden',
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 24,
    overflow: 'hidden',
  },
  shimmer: {
    position: 'absolute',
    width: width * 0.4,
    height: '200%',
    backgroundColor: 'rgba(198,124,43,0.06)',
    transform: [{ skewX: '-25deg' }],
  },
  closeBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(198,124,43,0.15)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 16,
  },
  badgeText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 10,
    color: '#C67C2B',
    letterSpacing: 2,
  },
  headline: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 24,
    color: '#F5EDE0',
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 12,
  },
  trialBadge: {
    backgroundColor: 'rgba(198,124,43,0.12)',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  trialText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    color: '#C67C2B',
    letterSpacing: 0.3,
  },
  features: {
    paddingHorizontal: 24,
    gap: 10,
    marginBottom: 20,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(198,124,43,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    color: '#C8B090',
    flex: 1,
  },
  plans: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  plan: {
    flex: 1,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(198,124,43,0.2)',
    backgroundColor: 'rgba(255,255,255,0.04)',
    gap: 4,
  },
  planActive: {
    borderColor: '#C67C2B',
    backgroundColor: 'rgba(198,124,43,0.10)',
  },
  planLeft: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  planName: { fontFamily: 'Lato_700Bold', fontSize: 14, color: '#F5EDE0' },
  planPrice: { fontFamily: 'Lato_400Regular', fontSize: 12, color: '#8A7258' },
  bestValueBadge: {
    backgroundColor: '#C67C2B',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  bestValueText: { fontFamily: 'Lato_700Bold', fontSize: 10, color: '#080C09' },
  cta: {
    marginHorizontal: 24,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 14,
  },
  ctaGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 16,
    color: '#080C09',
  },
  restore: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'center',
    paddingVertical: 8,
    marginBottom: 8,
  },
  restoreText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    color: '#5A5045',
  },
  legal: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    color: '#3A3025',
    textAlign: 'center',
    paddingHorizontal: 24,
    lineHeight: 15,
  },
});
