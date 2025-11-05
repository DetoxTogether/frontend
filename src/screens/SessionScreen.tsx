import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import {COLORS, SIZES} from '../utils/colors';
import {commonStyles} from '../utils/styles';

const SessionScreen = ({navigation}: any) => {
    const [sessionName, setSessionName] = useState('');
    const [duration, setDuration] = useState('30');

    const handleCreateSession = () => {
        console.log('세션 생성:', sessionName, duration);
        navigation.navigate('Timer');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>디톡스 세션 만들기</Text>
                <Text style={styles.subtitle}>친구들과 함께 디지털 디톡스를 시작해요</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>세션 이름</Text>
                <TextInput
                    style={styles.input}
                    placeholder="예: 저녁 휴식 타임 ☕"
                    placeholderTextColor={COLORS.textLight}
                    value={sessionName}
                    onChangeText={setSessionName}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>디톡스 시간</Text>
                <View style={styles.durationButtons}>
                    {['15', '30', '60', '90'].map((min) => (
                        <TouchableOpacity
                            key={min}
                            style={[
                                styles.durationButton,
                                duration === min && styles.durationButtonActive,
                            ]}
                            onPress={() => setDuration(min)}>
                            <Text
                                style={[
                                    styles.durationButtonText,
                                    duration === min && styles.durationButtonTextActive,
                                ]}>
                                {min}분
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>친구 초대</Text>
                <TouchableOpacity style={styles.inviteButton}>
                    <Text style={styles.inviteButtonIcon}>➕</Text>
                    <Text style={styles.inviteButtonText}>친구 추가하기</Text>
                </TouchableOpacity>

                <View style={styles.friendsList}>
                    <View style={styles.friendItem}>
                        <View style={styles.friendAvatar}>
                            <Text style={styles.friendAvatarText}>김</Text>
                        </View>
                        <Text style={styles.friendName}>김민재</Text>
                        <TouchableOpacity>
                            <Text style={styles.removeButton}>✕</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.infoIcon}>💡</Text>
                <View style={styles.infoContent}>
                    <Text style={styles.infoTitle}>함께 쉬는 방법</Text>
                    <Text style={styles.infoText}>
                        세션이 시작되면 모두의 활성 상태가 공유됩니다.{'\n'}
                        누군가 앱을 사용하면 알림이 표시되어요.
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.createButton} onPress={handleCreateSession}>
                <Text style={styles.createButtonText}>세션 시작하기 🚀</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>또는</Text>
                <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>초대 코드로 참여하기</Text>
            </TouchableOpacity>
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
    section: {
        padding: SIZES.md,
    },
    label: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SIZES.sm,
    },
    input: {
        height: SIZES.inputHeight,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radiusMedium,
        borderWidth: 1,
        borderColor: COLORS.gray300,
        paddingHorizontal: SIZES.md,
        fontSize: SIZES.body,
        color: COLORS.text,
    },
    durationButtons: {
        flexDirection: 'row',
        gap: SIZES.sm,
    },
    durationButton: {
        flex: 1,
        paddingVertical: SIZES.md,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radiusMedium,
        borderWidth: 2,
        borderColor: COLORS.gray300,
        alignItems: 'center',
    },
    durationButtonActive: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    durationButtonText: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.text,
    },
    durationButtonTextActive: {
        color: COLORS.white,
    },
    inviteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        padding: SIZES.md,
        borderRadius: SIZES.radiusMedium,
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderStyle: 'dashed',
    },
    inviteButtonIcon: {
        fontSize: 20,
        marginRight: SIZES.sm,
    },
    inviteButtonText: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.primary,
    },
    friendsList: {
        marginTop: SIZES.md,
    },
    friendItem: {
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
    friendAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SIZES.md,
    },
    friendAvatarText: {
        fontSize: SIZES.body,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    friendName: {
        flex: 1,
        fontSize: SIZES.body,
        color: COLORS.text,
    },
    removeButton: {
        fontSize: 20,
        color: COLORS.textLight,
    },
    infoCard: {
        flexDirection: 'row',
        backgroundColor: COLORS.info + '20',
        padding: SIZES.md,
        margin: SIZES.md,
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
    createButton: {
        height: SIZES.buttonHeight,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radiusMedium,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SIZES.lg,
        margin: SIZES.md,
        marginTop: SIZES.lg,
    },
    createButtonText: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.white,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZES.md,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.gray300,
    },
    dividerText: {
        paddingHorizontal: SIZES.md,
        fontSize: SIZES.caption,
        color: COLORS.textLight,
    },
    joinButton: {
        height: SIZES.buttonHeight,
        backgroundColor: 'transparent',
        borderRadius: SIZES.radiusMedium,
        borderWidth: 2,
        borderColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SIZES.lg,
        margin: SIZES.md,
        marginBottom: SIZES.xl,
    },
    joinButtonText: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.primary,
    },
});

export default SessionScreen;