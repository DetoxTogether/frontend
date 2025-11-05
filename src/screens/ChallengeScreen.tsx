import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, SIZES, SHADOWS} from '../utils/colors';
import {commonStyles} from '../utils/styles';

const ChallengeScreen = ({navigation}: any) => {
    // 더미 데이터
    const challenges = [
        {
            id: '1',
            title: '블루마운틴 멀리건 골프클럽',
            status: 'active',
            duration: 180, // 3시간
            date: '2025.08.29',
            time: '15:00-18:00',
            myScore: 72,
            putts: 31,
            gir: 68, // Green in Regulation
            icon: 'weather-sunny',
            iconColor: '#FFB800',
            iconBg: '#FFF8E1',
        },
        {
            id: '2',
            title: '마운틴크릭 컨트리클럽',
            status: 'completed',
            duration: 120,
            date: '2025.08.26',
            time: '12:00-14:00',
            myScore: 70,
            putts: 29,
            gir: 72,
            icon: 'home-outline',
            iconColor: '#00C896',
            iconBg: '#E8F8F5',
        },
        {
            id: '3',
            title: '로얄가든 멤버쉽 현서리 컨트리클럽',
            status: 'completed',
            duration: 180,
            date: '2025.08.24',
            time: '09:00-12:00',
            myScore: 76,
            putts: 34,
            gir: 60,
            icon: 'partly-sunny-outline',
            iconColor: '#FF9800',
            iconBg: '#FFF3E0',
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <Text style={styles.title}>개인기록</Text>
                    <View style={styles.pointBadge}>
                        <MaterialIcon name="coin" size={20} color={COLORS.primary} />
                        <Text style={styles.pointText}>980</Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>
                    월별 기록의 직관적 카드 UX
                </Text>
            </View>

            {/* 탭 메뉴 */}
            <View style={styles.tabContainer}>
                <TouchableOpacity style={[styles.tab, styles.tabActive]}>
                    <Text style={styles.tabTextActive}>월별 기록</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>평균 기록</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>베스트 기록</Text>
                </TouchableOpacity>
            </View>

            {/* 이번 달 기록 */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>2025년 8월</Text>
                    <Text style={styles.sectionSubtitle}>총 5회</Text>
                </View>
                
                {challenges.map((challenge) => (
                    <TouchableOpacity 
                        key={challenge.id} 
                        style={styles.recordCard}
                        activeOpacity={0.7}
                    >
                        {/* 헤더 */}
                        <View style={styles.cardHeader}>
                            <View style={styles.titleRow}>
                                <Text style={styles.recordTitle} numberOfLines={1}>
                                    {challenge.title}
                                </Text>
                                <View style={[styles.iconBadge, {backgroundColor: challenge.iconBg}]}>
                                    <MaterialIcon 
                                        name={challenge.icon} 
                                        size={22} 
                                        color={challenge.iconColor}
                                    />
                                </View>
                            </View>
                            <Text style={styles.recordDate}>
                                {challenge.date} · {challenge.time}
                            </Text>
                        </View>

                        {/* 통계 그리드 */}
                        <View style={styles.statsGrid}>
                            <View style={styles.statItem}>
                                <Text style={styles.statLabel}>총 타수</Text>
                                <View style={styles.statValueRow}>
                                    <Text style={[styles.statValue, styles.statValuePrimary]}>
                                        {challenge.myScore}
                                    </Text>
                                    <Text style={styles.statUnit}>타</Text>
                                </View>
                            </View>
                            <View style={styles.statDivider} />
                            <View style={styles.statItem}>
                                <Text style={styles.statLabel}>퍼팅 수</Text>
                                <View style={styles.statValueRow}>
                                    <Text style={styles.statValue}>{challenge.putts}</Text>
                                    <Text style={styles.statUnit}>퍼트</Text>
                                </View>
                            </View>
                            <View style={styles.statDivider} />
                            <View style={styles.statItem}>
                                <Text style={styles.statLabel}>그린 적중률</Text>
                                <View style={styles.statValueRow}>
                                    <Text style={[styles.statValue, styles.statValuePrimary]}>
                                        {challenge.gir}
                                    </Text>
                                    <Text style={styles.statUnit}>%</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            {/* 카드 상세 설명 */}
            <View style={styles.infoCard}>
                <View style={styles.infoHeader}>
                    <MaterialIcon name="chart-line" size={24} color={COLORS.primary} />
                    <Text style={styles.infoTitle}>카드 상세화면의 심화 기록 분석</Text>
                </View>
                <Text style={styles.infoText}>
                    카드 상세화면에서는 개별 플레이 기록을 그래프로 시각화해 직관적으로 비교할 수 있으며, 평균 이상과 점진 평균 등의 기준을 함께 제공해 자신의 성과를 명확히 파악하고 개선 방향을 쉽게 찾을 수 있도록 돕습니다.
                </Text>
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
        backgroundColor: COLORS.background,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.xs,
    },
    title: {
        fontSize: SIZES.h2,
        fontWeight: '700',
        color: COLORS.text,
    },
    pointBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.md,
        paddingVertical: SIZES.sm,
        borderRadius: SIZES.radiusFull,
        ...SHADOWS.small,
    },
    pointText: {
        fontSize: SIZES.bodyLarge,
        fontWeight: '700',
        color: COLORS.primary,
        marginLeft: SIZES.xs,
    },
    subtitle: {
        fontSize: SIZES.body,
        color: COLORS.textLight,
        lineHeight: 22,
    },

    tabContainer: {
        flexDirection: 'row',
        paddingHorizontal: SIZES.md,
        marginBottom: SIZES.lg,
        gap: SIZES.sm,
    },
    tab: {
        paddingHorizontal: SIZES.md,
        paddingVertical: SIZES.sm,
        borderRadius: SIZES.radiusMedium,
        backgroundColor: COLORS.gray200,
    },
    tabActive: {
        backgroundColor: COLORS.text,
    },
    tabText: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
        fontWeight: '600',
    },
    tabTextActive: {
        fontSize: SIZES.caption,
        color: COLORS.white,
        fontWeight: '700',
    },

    section: {
        paddingHorizontal: SIZES.md,
        marginBottom: SIZES.lg,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.md,
    },
    sectionTitle: {
        fontSize: SIZES.h3,
        fontWeight: '700',
        color: COLORS.text,
    },
    sectionSubtitle: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
        fontWeight: '600',
    },

    recordCard: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radiusLarge,
        padding: SIZES.cardPadding,
        marginBottom: SIZES.md,
        ...SHADOWS.small,
    },
    cardHeader: {
        marginBottom: SIZES.md,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: SIZES.xs,
    },
    recordTitle: {
        fontSize: SIZES.bodyLarge,
        fontWeight: '700',
        color: COLORS.text,
        flex: 1,
        marginRight: SIZES.sm,
    },
    iconBadge: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radiusMedium,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recordDate: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
        fontWeight: '500',
    },

    statsGrid: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: SIZES.md,
        borderTopWidth: 1,
        borderTopColor: COLORS.gray200,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statDivider: {
        width: 1,
        height: 40,
        backgroundColor: COLORS.gray200,
    },
    statLabel: {
        fontSize: SIZES.small,
        color: COLORS.textLight,
        marginBottom: SIZES.xs,
        fontWeight: '500',
    },
    statValueRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    statValue: {
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.text,
    },
    statValuePrimary: {
        color: COLORS.primary,
    },
    statUnit: {
        fontSize: SIZES.small,
        color: COLORS.textLight,
        marginLeft: 2,
        fontWeight: '600',
    },

    infoCard: {
        backgroundColor: COLORS.white,
        padding: SIZES.cardPadding,
        marginHorizontal: SIZES.md,
        marginBottom: SIZES.xl,
        borderRadius: SIZES.radiusLarge,
        borderLeftWidth: 4,
        borderLeftColor: COLORS.primary,
        ...SHADOWS.small,
    },
    infoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.sm,
    },
    infoTitle: {
        fontSize: SIZES.bodyLarge,
        fontWeight: '700',
        color: COLORS.text,
        marginLeft: SIZES.sm,
        flex: 1,
    },
    infoText: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
        lineHeight: 20,
    },
});

export default ChallengeScreen;