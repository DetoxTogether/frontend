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

const ChallengeScreen = ({navigation}: any) => {
    // 더미 데이터
    const challenges = [
        {
            id: '1',
            friend: '김민재',
            status: 'active',
            duration: 60,
            timeLeft: 45,  // 이 줄 확인!
            myScore: 5,
            friendScore: 4,
        },
        {
            id: '2',
            friend: '이현수',
            status: 'completed',
            duration: 30,
            timeLeft: 0,  // completed는 0으로
            myScore: 7,
            friendScore: 7,
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>챌린지 🏆</Text>
                <Text style={styles.subtitle}>
                    친구와 함께 디톡스 습관을 만들어가요
                </Text>
            </View>

            {/* 새 챌린지 만들기 */}
            <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonIcon}>➕</Text>
                <View style={styles.createButtonContent}>
                    <Text style={styles.createButtonTitle}>새 챌린지 만들기</Text>
                    <Text style={styles.createButtonSubtitle}>
                        친구와 1:1 디톡스 대결
                    </Text>
                </View>
                <Text style={styles.createButtonArrow}>→</Text>
            </TouchableOpacity>

            {/* 진행 중인 챌린지 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>진행 중인 챌린지</Text>
                {challenges
                    .filter((c) => c.status === 'active')
                    .map((challenge) => (
                        <View key={challenge.id} style={styles.challengeCard}>
                            <View style={styles.challengeHeader}>
                                <View style={styles.friendInfo}>
                                    <View style={styles.friendAvatar}>
                                        <Text style={styles.friendAvatarText}>
                                            {challenge.friend[0]}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.friendName}>{challenge.friend}</Text>
                                        <Text style={styles.challengeDuration}>
                                            {challenge.duration}분 디톡스
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>진행중</Text>
                                </View>
                            </View>

                            {/* 점수 */}
                            <View style={styles.scoreContainer}>
                                <View style={styles.scoreBox}>
                                    <Text style={styles.scoreLabel}>나</Text>
                                    <Text style={styles.scoreValue}>{challenge.myScore}</Text>
                                </View>
                                <Text style={styles.scoreVs}>VS</Text>
                                <View style={styles.scoreBox}>
                                    <Text style={styles.scoreLabel}>상대</Text>
                                    <Text style={styles.scoreValue}>
                                        {challenge.friendScore}
                                    </Text>
                                </View>
                            </View>

                            {/* 프로그레스 */}
                            <View style={styles.progressContainer}>
                                <Text style={styles.progressLabel}>
                                    남은 시간: {challenge.timeLeft}분
                                </Text>
                                <View style={styles.progressBar}>
                                    <View
                                        style={[
                                            styles.progressFill,
                                            {
                                                width: `${
                                                    ((challenge.duration - challenge.timeLeft) /
                                                        challenge.duration) *
                                                    100
                                                }%`,
                                            },
                                        ]}
                                    />
                                </View>
                            </View>
                        </View>
                    ))}
            </View>

            {/* 완료된 챌린지 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>완료된 챌린지</Text>
                {challenges
                    .filter((c) => c.status === 'completed')
                    .map((challenge) => (
                        <View key={challenge.id} style={styles.challengeCard}>
                            <View style={styles.challengeHeader}>
                                <View style={styles.friendInfo}>
                                    <View style={styles.friendAvatar}>
                                        <Text style={styles.friendAvatarText}>
                                            {challenge.friend[0]}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.friendName}>{challenge.friend}</Text>
                                        <Text style={styles.challengeDuration}>
                                            {challenge.duration}분 디톡스
                                        </Text>
                                    </View>
                                </View>
                                <View style={[styles.badge, styles.badgeCompleted]}>
                                    <Text style={styles.badgeText}>완료</Text>
                                </View>
                            </View>

                            {/* 최종 점수 */}
                            <View style={styles.scoreContainer}>
                                <View style={styles.scoreBox}>
                                    <Text style={styles.scoreLabel}>나</Text>
                                    <Text style={styles.scoreValue}>{challenge.myScore}</Text>
                                </View>
                                <Text style={styles.scoreResult}>
                                    {challenge.myScore === challenge.friendScore
                                        ? '🤝 무승부'
                                        : challenge.myScore > challenge.friendScore
                                            ? '🎉 승리'
                                            : '😢 패배'}
                                </Text>
                                <View style={styles.scoreBox}>
                                    <Text style={styles.scoreLabel}>상대</Text>
                                    <Text style={styles.scoreValue}>
                                        {challenge.friendScore}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
            </View>

            {/* 설명 카드 */}
            <View style={styles.infoCard}>
                <Text style={styles.infoIcon}>💡</Text>
                <View style={styles.infoContent}>
                    <Text style={styles.infoTitle}>챌린지 규칙</Text>
                    <Text style={styles.infoText}>
                        • 정해진 시간 동안 앱을 사용하지 않으면 성공{'\n'}
                        • 한 명이라도 중간에 사용하면 실패{'\n'}
                        • 성공 시 포인트 획득 및 도장 적립
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
    title: {
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SIZES.xs,
    },
    subtitle: {
        fontSize: SIZES.body,
        color: COLORS.textLight,
    },

    createButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        padding: SIZES.md,
        margin: SIZES.md,
        borderRadius: SIZES.radiusMedium,
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    createButtonIcon: {
        fontSize: 32,
        marginRight: SIZES.md,
    },
    createButtonContent: {
        flex: 1,
    },
    createButtonTitle: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.white,
        marginBottom: 2,
    },
    createButtonSubtitle: {
        fontSize: SIZES.caption,
        color: COLORS.white,
        opacity: 0.8,
    },
    createButtonArrow: {
        fontSize: 24,
        color: COLORS.white,
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

    challengeCard: {
        backgroundColor: COLORS.white,
        padding: SIZES.md,
        borderRadius: SIZES.radiusMedium,
        marginBottom: SIZES.md,
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    challengeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.md,
    },
    friendInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    friendAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SIZES.md,
    },
    friendAvatarText: {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    friendName: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 2,
    },
    challengeDuration: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
    },
    badge: {
        backgroundColor: COLORS.warning,
        paddingHorizontal: SIZES.md,
        paddingVertical: SIZES.xs,
        borderRadius: SIZES.radiusSmall,
    },
    badgeCompleted: {
        backgroundColor: COLORS.success,
    },
    badgeText: {
        fontSize: SIZES.caption,
        fontWeight: '600',
        color: COLORS.white,
    },

    scoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: SIZES.md,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLORS.gray200,
    },
    scoreBox: {
        alignItems: 'center',
    },
    scoreLabel: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
        marginBottom: SIZES.xs,
    },
    scoreValue: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    scoreVs: {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.textLight,
    },
    scoreResult: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.text,
    },

    progressContainer: {
        marginTop: SIZES.md,
    },
    progressLabel: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
        marginBottom: SIZES.xs,
    },
    progressBar: {
        height: 8,
        backgroundColor: COLORS.gray200,
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: COLORS.primary,
    },

    infoCard: {
        flexDirection: 'row',
        backgroundColor: COLORS.info + '20',
        padding: SIZES.md,
        margin: SIZES.md,
        marginTop: 0,
        marginBottom: SIZES.xl,
        borderRadius: SIZES.radiusMedium,
        borderLeftWidth: 4,
        borderLeftColor: COLORS.info,
    },
    infoIcon: {
        fontSize: 24,
        marginRight: SIZES.md,
    },
    infoContent: {
        flex: 1,
    },
    infoTitle: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SIZES.xs,
    },
    infoText: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
        lineHeight: 20,
    },
});

export default ChallengeScreen;