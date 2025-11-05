import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {COLORS, SIZES} from '../utils/colors';
import {commonStyles} from '../utils/styles';

const TimerScreen = ({navigation}: any) => {
    const [timeLeft, setTimeLeft] = useState(1800);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((time) => time - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const participants = [
        {id: '1', name: '김민재', isActive: true},
        {id: '2', name: '이현수', isActive: true},
        {id: '3', name: '박유정', isActive: false},
    ];

    const activeCount = participants.filter(p => p.isActive).length;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={styles.sessionName}>저녁 휴식 타임 ☕</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.timerContainer}>
                    <View style={styles.timerCircle}>
                        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
                        <Text style={styles.timerLabel}>남은 시간</Text>
                    </View>
                </View>

                <View style={styles.statusContainer}>
                    <Text style={styles.statusTitle}>함께 쉬는 중 🌙</Text>
                    <Text style={styles.statusCount}>
                        {activeCount}/{participants.length}명 집중 중
                    </Text>
                </View>

                <View style={styles.participantsContainer}>
                    {participants.map((participant) => (
                        <View key={participant.id} style={styles.participantCard}>
                            <View
                                style={[
                                    styles.participantStatus,
                                    participant.isActive ? styles.statusActive : styles.statusInactive,
                                ]}
                            />
                            <View style={styles.participantAvatar}>
                                <Text style={styles.participantAvatarText}>
                                    {participant.name[0]}
                                </Text>
                            </View>
                            <View style={styles.participantInfo}>
                                <Text style={styles.participantName}>{participant.name}</Text>
                                <Text style={styles.participantStatusText}>
                                    {participant.isActive ? '🧘 집중 중' : '💤 잠깐 휴식'}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.encouragementCard}>
                    <Text style={styles.encouragementIcon}>💪</Text>
                    <Text style={styles.encouragementText}>
                        모두 잘 버티고 있어요! 조금만 더 힘내요!
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.giveUpButton}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.giveUpButtonText}>세션 종료하기</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.md,
        paddingTop: SIZES.lg,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray200,
    },
    backButton: {
        fontSize: 28,
        color: COLORS.primary,
    },
    sessionName: {
        fontSize: SIZES.h3,
        fontWeight: '600',
        color: COLORS.text,
    },
    placeholder: {
        width: 28,
    },
    content: {
        padding: SIZES.lg,
    },
    timerContainer: {
        alignItems: 'center',
        marginVertical: SIZES.xl,
    },
    timerCircle: {
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    timerText: {
        fontSize: 56,
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: SIZES.xs,
    },
    timerLabel: {
        fontSize: SIZES.body,
        color: COLORS.white,
        opacity: 0.8,
    },
    statusContainer: {
        alignItems: 'center',
        marginBottom: SIZES.xl,
    },
    statusTitle: {
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SIZES.xs,
    },
    statusCount: {
        fontSize: SIZES.body,
        color: COLORS.textLight,
    },
    participantsContainer: {
        marginBottom: SIZES.lg,
    },
    participantCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: SIZES.md,
        borderRadius: SIZES.radiusMedium,
        marginBottom: SIZES.sm,
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    participantStatus: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: SIZES.md,
    },
    statusActive: {
        backgroundColor: COLORS.success,
    },
    statusInactive: {
        backgroundColor: COLORS.warning,
    },
    participantAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SIZES.md,
    },
    participantAvatarText: {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    participantInfo: {
        flex: 1,
    },
    participantName: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 2,
    },
    participantStatusText: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
    },
    encouragementCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.success + '20',
        padding: SIZES.md,
        borderRadius: SIZES.radiusMedium,
        borderLeftWidth: 4,
        borderLeftColor: COLORS.success,
        marginBottom: SIZES.lg,
    },
    encouragementIcon: {
        fontSize: 28,
        marginRight: SIZES.md,
    },
    encouragementText: {
        flex: 1,
        fontSize: SIZES.body,
        color: COLORS.text,
    },
    giveUpButton: {
        height: SIZES.buttonHeight,
        backgroundColor: 'transparent',
        borderRadius: SIZES.radiusMedium,
        borderWidth: 2,
        borderColor: COLORS.danger,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SIZES.lg,
    },
    giveUpButtonText: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.danger,
    },
});

export default TimerScreen;