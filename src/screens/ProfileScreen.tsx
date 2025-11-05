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

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* 프로필 헤더 */}
            <View style={styles.profileHeader}>
    <View style={styles.avatar}>
    <Text style={styles.avatarText}>소</Text>
        </View>
        <Text style={styles.name}>김소희</Text>
        <Text style={styles.email}>sohee@example.com</Text>
    </View>

    {/* 통계 요약 */}
    <View style={styles.statsContainer}>
    <View style={styles.statCard}>
    <Text style={styles.statValue}>24</Text>
        <Text style={styles.statLabel}>총 세션</Text>
    </View>
    <View style={styles.statCard}>
    <Text style={styles.statValue}>18h</Text>
    <Text style={styles.statLabel}>총 시간</Text>
    </View>
    <View style={styles.statCard}>
    <Text style={styles.statValue}>15</Text>
        <Text style={styles.statLabel}>연속 일수</Text>
    </View>
    </View>

    {/* 이번 주 활동 */}
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>이번 주 활동</Text>
    <View style={styles.weeklyChart}>
        {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
        <View key={day} style={styles.dayColumn}>
    <View
        style={[
            styles.dayBar,
    {height: `${Math.random() * 100}%`},
]}
    />
    <Text style={styles.dayLabel}>{day}</Text>
        </View>
))}
    </View>
    </View>

    {/* 최근 달성 */}
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>최근 달성 🏆</Text>
    <View style={styles.achievementCard}>
    <Text style={styles.achievementIcon}>🎯</Text>
    <View style={styles.achievementContent}>
    <Text style={styles.achievementTitle}>7일 연속 디톡스</Text>
    <Text style={styles.achievementDate}>2024.11.01</Text>
    </View>
    </View>
    <View style={styles.achievementCard}>
    <Text style={styles.achievementIcon}>⭐</Text>
    <View style={styles.achievementContent}>
    <Text style={styles.achievementTitle}>첫 챌린지 승리</Text>
    <Text style={styles.achievementDate}>2024.10.28</Text>
    </View>
    </View>
    </View>

    {/* 메뉴 */}
    <View style={styles.section}>
    <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuIcon}>👥</Text>
    <Text style={styles.menuText}>친구 관리</Text>
    <Text style={styles.menuArrow}>→</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuIcon}>🔔</Text>
    <Text style={styles.menuText}>알림 설정</Text>
    <Text style={styles.menuArrow}>→</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuIcon}>🎨</Text>
    <Text style={styles.menuText}>테마 설정</Text>
    <Text style={styles.menuArrow}>→</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuIcon}>❓</Text>
    <Text style={styles.menuText}>도움말</Text>
        <Text style={styles.menuArrow}>→</Text>
    </TouchableOpacity>
    </View>

    {/* 로그아웃 */}
    <TouchableOpacity style={styles.logoutButton}>
    <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
    <Text style={styles.footerText}>DetoxTogether v1.0.0</Text>
    </View>
    </ScrollView>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    profileHeader: {
        alignItems: 'center',
        padding: SIZES.xl,
        backgroundColor: COLORS.white,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SIZES.md,
    },
    avatarText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    name: {
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SIZES.xs,
    },
    email: {
        fontSize: SIZES.body,
        color: COLORS.textLight,
    },

    statsContainer: {
        flexDirection: 'row',
        padding: SIZES.md,
        gap: SIZES.md,
    },
    statCard: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.md,
        borderRadius: SIZES.radiusMedium,
        alignItems: 'center',
        ...commonStyles.shadow,
    },
    statValue: {
        fontSize: 28,
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
    sectionTitle: {
        fontSize: SIZES.h3,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SIZES.md,
    },

    weeklyChart: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        padding: SIZES.md,
        borderRadius: SIZES.radiusMedium,
        height: 200,
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        ...commonStyles.shadow,
    },
    dayColumn: {
        alignItems: 'center',
        flex: 1,
    },
    dayBar: {
        width: 24,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radiusSmall,
        marginBottom: SIZES.xs,
        minHeight: 20,
    },
    dayLabel: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
    },

    achievementCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: SIZES.md,
        borderRadius: SIZES.radiusMedium,
        marginBottom: SIZES.sm,
        ...commonStyles.shadow,
    },
    achievementIcon: {
        fontSize: 40,
        marginRight: SIZES.md,
    },
    achievementContent: {
        flex: 1,
    },
    achievementTitle: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 2,
    },
    achievementDate: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
    },

    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: SIZES.md,
        borderRadius: SIZES.radiusMedium,
        marginBottom: SIZES.sm,
        ...commonStyles.shadow,
    },
    menuIcon: {
        fontSize: 24,
        marginRight: SIZES.md,
    },
    menuText: {
        flex: 1,
        fontSize: SIZES.body,
        color: COLORS.text,
    },
    menuArrow: {
        fontSize: 20,
        color: COLORS.textLight,
    },

    logoutButton: {
        margin: SIZES.md,
        marginTop: SIZES.lg,
        padding: SIZES.md,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radiusMedium,
        borderWidth: 2,
        borderColor: COLORS.danger,
        alignItems: 'center',
    },
    logoutText: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.danger,
    },

    footer: {
        alignItems: 'center',
        padding: SIZES.xl,
    },
    footerText: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
    },
});

export default ProfileScreen;