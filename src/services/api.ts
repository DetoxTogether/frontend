import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: 백엔드 서버 주소로 변경하세요
const API_BASE_URL = __DEV__
    ? 'http://localhost:8080/api'  // 개발 환경
    : 'https://your-production-api.com/api';  // 프로덕션 환경

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor - 토큰 자동 추가
apiClient.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor - 에러 처리
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // 토큰 만료 시 로그아웃 처리
            await AsyncStorage.removeItem('accessToken');
            await AsyncStorage.removeItem('refreshToken');
            // TODO: 로그인 화면으로 이동
        }
        return Promise.reject(error);
    }
);

// API 함수들
export const authAPI = {
    login: (email: string, password: string) =>
        apiClient.post('/auth/login', {email, password}),

    register: (email: string, password: string, name: string) =>
        apiClient.post('/auth/register', {email, password, name}),

    logout: () =>
        apiClient.post('/auth/logout'),
};

export const sessionAPI = {
    // 디톡스 세션 생성
    createSession: (data: {
        name: string;
        startTime: string;
        endTime: string;
        participants: string[];
    }) =>
        apiClient.post('/sessions', data),

    // 세션 목록 조회
    getSessions: () =>
        apiClient.get('/sessions'),

    // 세션 상세 조회
    getSession: (sessionId: string) =>
        apiClient.get(`/sessions/${sessionId}`),

    // 세션 참여
    joinSession: (sessionId: string) =>
        apiClient.post(`/sessions/${sessionId}/join`),

    // 세션 나가기
    leaveSession: (sessionId: string) =>
        apiClient.post(`/sessions/${sessionId}/leave`),

    // 세션 상태 업데이트 (활성/비활성)
    updateStatus: (sessionId: string, isActive: boolean) =>
        apiClient.patch(`/sessions/${sessionId}/status`, {isActive}),
};

export const challengeAPI = {
    // 챌린지 생성
    createChallenge: (data: {
        friendId: string;
        duration: number;
        startTime: string;
    }) =>
        apiClient.post('/challenges', data),

    // 챌린지 목록
    getChallenges: () =>
        apiClient.get('/challenges'),

    // 챌린지 완료
    completeChallenge: (challengeId: string) =>
        apiClient.post(`/challenges/${challengeId}/complete`),
};

export const userAPI = {
    // 프로필 조회
    getProfile: () =>
        apiClient.get('/users/me'),

    // 프로필 수정
    updateProfile: (data: {name?: string; avatar?: string}) =>
        apiClient.patch('/users/me', data),

    // 사용 패턴 조회
    getUsagePattern: () =>
        apiClient.get('/users/me/usage-pattern'),

    // 친구 목록
    getFriends: () =>
        apiClient.get('/users/me/friends'),

    // 친구 추가
    addFriend: (friendId: string) =>
        apiClient.post('/users/me/friends', {friendId}),
};

export const statsAPI = {
    // 통계 조회
    getStats: (period: 'day' | 'week' | 'month') =>
        apiClient.get(`/stats?period=${period}`),

    // 리더보드
    getLeaderboard: () =>
        apiClient.get('/stats/leaderboard'),
};

export default apiClient;