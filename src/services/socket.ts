import {io, Socket} from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: 백엔드 소켓 서버 주소로 변경하세요
const SOCKET_URL = __DEV__
    ? 'http://localhost:8080'
    : 'https://your-production-api.com';

class SocketService {
    private socket: Socket | null = null;

    // 소켓 연결
    async connect() {
        const token = await AsyncStorage.getItem('accessToken');

        this.socket = io(SOCKET_URL, {
            auth: {
                token,
            },
            transports: ['websocket'],
        });

        this.socket.on('connect', () => {
            console.log('✅ Socket connected:', this.socket?.id);
        });

        this.socket.on('disconnect', () => {
            console.log('❌ Socket disconnected');
        });

        this.socket.on('error', (error) => {
            console.error('Socket error:', error);
        });
    }

    // 소켓 연결 해제
    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }

    // 세션 참여
    joinSession(sessionId: string) {
        this.socket?.emit('join-session', {sessionId});
    }

    // 세션 나가기
    leaveSession(sessionId: string) {
        this.socket?.emit('leave-session', {sessionId});
    }

    // 상태 업데이트 (활성/비활성)
    updateStatus(sessionId: string, isActive: boolean) {
        this.socket?.emit('update-status', {sessionId, isActive});
    }

    // 세션 상태 변경 리스너
    onSessionStatusChange(callback: (data: {
        userId: string;
        userName: string;
        isActive: boolean;
    }) => void) {
        this.socket?.on('session-status-changed', callback);
    }

    // 세션 참여자 변경 리스너
    onParticipantChange(callback: (data: {
        sessionId: string;
        participants: Array<{
            id: string;
            name: string;
            isActive: boolean;
        }>;
    }) => void) {
        this.socket?.on('participant-changed', callback);
    }

    // 챌린지 업데이트 리스너
    onChallengeUpdate(callback: (data: {
        challengeId: string;
        status: 'active' | 'completed' | 'failed';
        message: string;
    }) => void) {
        this.socket?.on('challenge-update', callback);
    }

    // AI 추천 알림 리스너
    onRecommendation(callback: (data: {
        message: string;
        suggestedTime: string;
    }) => void) {
        this.socket?.on('detox-recommendation', callback);
    }

    // 리스너 제거
    off(event: string) {
        this.socket?.off(event);
    }

    // 소켓 인스턴스 가져오기
    getSocket() {
        return this.socket;
    }
}

export default new SocketService();