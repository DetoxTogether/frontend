import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Participant {
    id: string;
    name: string;
    isActive: boolean;
}

interface Session {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    participants: Participant[];
    createdBy: string;
}

interface SessionState {
    sessions: Session[];
    currentSession: Session | null;
    loading: boolean;
    error: string | null;
}

const initialState: SessionState = {
    sessions: [],
    currentSession: null,
    loading: false,
    error: null,
};

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setSessions: (state, action: PayloadAction<Session[]>) => {
            state.sessions = action.payload;
        },
        setCurrentSession: (state, action: PayloadAction<Session | null>) => {
            state.currentSession = action.payload;
        },
        addSession: (state, action: PayloadAction<Session>) => {
            state.sessions.push(action.payload);
        },
        updateParticipantStatus: (state, action: PayloadAction<{
            userId: string;
            isActive: boolean;
        }>) => {
            if (state.currentSession) {
                const participant = state.currentSession.participants.find(
                    p => p.id === action.payload.userId
                );
                if (participant) {
                    participant.isActive = action.payload.isActive;
                }
            }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    setSessions,
    setCurrentSession,
    addSession,
    updateParticipantStatus,
    setLoading,
    setError,
    clearError,
} = sessionSlice.actions;

export default sessionSlice.reducer;