import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import HomeScreen from '../screens/HomeScreen.tsx';
import SessionScreen from '../screens/SessionScreen.tsx';
import TimerScreen from '../screens/TimerScreen.tsx';
import ChallengeScreen from '../screens/ChallengeScreen.tsx';
import ProfileScreen from '../screens/ProfileScreen.tsx';

import {COLORS, SIZES} from '../utils/colors';
import {Image, Text} from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Stack Navigator
const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
        headerStyle: {
            backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
            headerTitleStyle: {
            fontWeight: 'bold',
        },
    }}>
    <Stack.Screen
        name="HomeMain"
    component={HomeScreen}
    options={{title: 'DetoxTogether'}}
    />
    <Stack.Screen
    name="Timer"
    component={TimerScreen}
    options={{headerShown: false}}
    />
    </Stack.Navigator>
);
};

// Session Stack Navigator
const SessionStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
        headerStyle: {
            backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
            headerTitleStyle: {
            fontWeight: 'bold',
        },
    }}>
    <Stack.Screen
        name="SessionMain"
    component={SessionScreen}
    options={{title: '세션'}}
    />
    <Stack.Screen
    name="Timer"
    component={TimerScreen}
    options={{headerShown: false}}
    />
    </Stack.Navigator>
);
};

// Main Tab Navigator
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.textLight,
                tabBarStyle: {
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderTopColor: COLORS.gray200,
                height: 60,
                paddingBottom: 8,
                paddingTop: 8,
        },
        tabBarLabelStyle: {
            fontSize: 12,
                fontWeight: '600',
        },
        headerShown: false,
    }}>
    <Tab.Screen
        name="Home"
    component={HomeStack}
    options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
            <Image
                source={require('../assets/images/icon-home.png')}
                style={{ width: size ?? 24, height: size ?? 24, tintColor: color }}
                resizeMode="contain"
            />
        ),
    }}
    />
    <Tab.Screen
    name="Session"
    component={SessionStack}
    options={{
        tabBarLabel: '세션',
            tabBarIcon: ({color}) => <Text style={{fontSize: 24}}>🌙</Text>,
    }}
    />
    <Tab.Screen
    name="Challenge"
    component={ChallengeScreen}
    options={{
        tabBarLabel: '챌린지',
            tabBarIcon: ({color}) => <Text style={{fontSize: 24}}>🏆</Text>,
        headerShown: true,
            headerStyle: {
            backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
            headerTitleStyle: {
            fontWeight: 'bold',
        },
        title: '챌린지',
    }}
    />
    <Tab.Screen
    name="Profile"
    component={ProfileScreen}
    options={{
        tabBarLabel: '프로필',
            tabBarIcon: ({color}) => <Text style={{fontSize: 24}}>👤</Text>,
        headerShown: true,
            headerStyle: {
            backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
            headerTitleStyle: {
            fontWeight: 'bold',
        },
        title: '프로필',
    }}
    />
    </Tab.Navigator>
);
};

// App Navigator
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;