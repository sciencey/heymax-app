import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import PageIndicator from '../components/PageIndicator';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>
                    <Text style={styles.logoTextWhite}>HEY</Text>
                    <Text style={styles.logoTextPurple}>MAX</Text>
                </Text>
            </View>

            {/* World Map */}
            <View style={styles.mapContainer}>
                <Image
                    source={require('../assets/Flyanywhere_darker.png')}
                    style={styles.mapImage}
                    resizeMode="contain"
                />
            </View>

            {/* Text Content */}
            <View style={styles.contentContainer}>
                <Text style={styles.heading}>
                    Shop your way to a{'\n'}
                    <Text style={styles.headingHighlight}>Dream Vacation</Text>
                </Text>
                <Text style={styles.subheading}>
                    Turn your expenses into dream vacations{'\n'}
                    by earning miles every time you shop
                </Text>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomContainer}>
                <PageIndicator currentPage={0} totalPages={3} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Shop')}
                >
                    <Text style={styles.buttonText}>See how it works</Text>
                    <Ionicons name="chevron-forward" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#120B29',
        paddingHorizontal: 20,
    },
    logoContainer: {
        marginTop: height * 0.08,
        alignItems: 'center',
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    logoTextWhite: {
        color: 'white',
    },
    logoTextPurple: {
        color: '#9D4EDD',
    },
    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    mapImage: {
        width: '100%',
        height: '100%',
        opacity: 0.5,
    },
    contentContainer: {
        marginBottom: 40,
    },
    heading: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    headingHighlight: {
        color: '#9D4EDD',
    },
    subheading: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#9D4EDD',
        paddingVertical: 15,
        paddingHorizontal: 24,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginRight: 8,
    },
});

export default OnboardingScreen;
