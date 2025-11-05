import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../utils/colors';
import {commonStyles} from '../utils/styles';

const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>안녕하세요 👋</Text>
        <Text style={styles.subtitle}>오늘도 함께 쉬어볼까요?</Text>
      </View>

      {/* 오늘의 통계 */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>오늘의 디톡스</Text>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>2회</Text>
            <Text style={styles.statLabel}>세션 완료</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>45분</Text>
            <Text style={styles.statLabel}>총 디톡스 시간</Text>
          </View>
        </View>
      </View>

      {/* 빠른 시작 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>빠른 시작</Text>
        <TouchableOpacity
          style={styles.quickButton}
          onPress={() => navigation.navigate('Session')}>
          <Text style={styles.quickButtonIcon}>🌙</Text>
          <View style={styles.quickButtonContent}>
            <Text style={styles.quickButtonTitle}>디톡스 세션 시작</Text>
            <Text style={styles.quickButtonSubtitle}>
              친구들과 함께 쉬어요
            </Text>
          </View>
          <Text style={styles.quickButtonArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quickButton}
          onPress={() => navigation.navigate('Challenge')}>
          <Text style={styles.quickButtonIcon}>🏆</Text>
          <View style={styles.quickButtonContent}>
            <Text style={styles.quickButtonTitle}>챌린지 만들기</Text>
            <Text style={styles.quickButtonSubtitle}>
              친구와 1:1 대결
            </Text>
          </View>
          <Text style={styles.quickButtonArrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* 진행 중인 세션 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>진행 중인 세션</Text>
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateIcon}>💤</Text>
          <Text style={styles.emptyStateText}>
            진행 중인 세션이 없습니다
          </Text>
        </View>
      </View>

      {/* AI 추천 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AI 추천</Text>
        <View style={styles.recommendCard}>
          <Text style={styles.recommendIcon}>🤖</Text>
          <Text style={styles.recommendText}>
            오후 3시 30분에 30분 휴식을 추천해요
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: SIZES.lg,
    paddingTop: SIZES.xl,
  },
  greeting: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.xs,
  },
  subtitle: {
    fontSize: SIZES.body,
    color: COLORS.textLight,
  },
  
  statsContainer: {
    padding: SIZES.md,
  },
  sectionTitle: {
    fontSize: SIZES.h3,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SIZES.md,
  },
  statsRow: {
    flexDirection: 'row',
    gap: SIZES.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.lg,
    borderRadius: SIZES.radiusMedium,
    alignItems: 'center',
    ...commonStyles.shadow,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SIZES.xs,
  },
  statLabel: {
    fontSize: SIZES.caption,
    color: COLORS.textLight,
  },
  
  section: {
    padding: SIZES.md,
  },
  quickButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: SIZES.md,
    borderRadius: SIZES.radiusMedium,
    marginBottom: SIZES.sm,
    ...commonStyles.shadow,
  },
  quickButtonIcon: {
    fontSize: 32,
    marginRight: SIZES.md,
  },
  quickButtonContent: {
    flex: 1,
  },
  quickButtonTitle: {
    fontSize: SIZES.body,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 2,
  },
  quickButtonSubtitle: {
    fontSize: SIZES.caption,
    color: COLORS.textLight,
  },
  quickButtonArrow: {
    fontSize: 24,
    color: COLORS.primary,
  },
  
  emptyState: {
    backgroundColor: COLORS.white,
    padding: SIZES.xl,
    borderRadius: SIZES.radiusMedium,
    alignItems: 'center',
    ...commonStyles.shadow,
  },
  emptyStateIcon: {
    fontSize: 48,
    marginBottom: SIZES.sm,
  },
  emptyStateText: {
    fontSize: SIZES.body,
    color: COLORS.textLight,
  },
  
  recommendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryLight,
    padding: SIZES.md,
    borderRadius: SIZES.radiusMedium,
  },
  recommendIcon: {
    fontSize: 32,
    marginRight: SIZES.md,
  },
  recommendText: {
    flex: 1,
    fontSize: SIZES.body,
    color: COLORS.text,
  },
});

export default HomeScreen;
