import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import ShopScreen from './screens/ShopScreen';
import RedeemScreen from './screens/RedeemScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator
                initialRouteName="Onboarding"
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: '#120B29' }
                }}
            >
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen name="Shop" component={ShopScreen} />
                <Stack.Screen name="Redeem" component={RedeemScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
