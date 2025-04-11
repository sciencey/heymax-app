import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PageIndicator from '../components/PageIndicator';
import RedeemOption from '../components/RedeemOption';

const RedeemScreen = ({ navigation }) => {
    const redeemOptions = [
        {
            id: 1,
            title: 'Transfer miles',
            description: '25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio',
            tag: 'Best for Business & First Class',
            logo: require('../assets/1.png'),
        },
        {
            id: 2,
            title: 'Fly and Claim',
            description: 'Upload your flight ticket, and get reimbursed within 5 days.',
            tag: 'Best for Economy',
            logo: require('../assets/2.png'),
        },
        {
            id: 3,
            title: 'Not flying soon',
            description: 'You can always redeem Gift Cards with your Max Miles.',
            tag: 'Best for Starters',
            logo: require('../assets/3.png'),
        },
    ];

    return (
        <View style={styles.container}>
            {/* Number indicator */}
            <View style={styles.numberContainer}>
                <View style={styles.numberLine} />
                <View style={styles.numberCircle}>
                    <Text style={styles.numberText}>2</Text>
                </View>
            </View>

            {/* Content */}
            <Text style={styles.heading}>Redeem your trip</Text>

            {/* Redeem Options */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.optionsContainer}
            >
                {redeemOptions.map(option => (
                    <RedeemOption
                        key={option.id}
                        title={option.title}
                        description={option.description}
                        tag={option.tag}
                        logo={option.logo}
                    />
                ))}
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomContainer}>
                <PageIndicator currentPage={2} totalPages={3} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Onboarding')}
                >
                    <Text style={styles.buttonText}>Get started</Text>
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
    numberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
    },
    numberCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#9D4EDD',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#9D4EDD',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    numberText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    numberLine: {
        flex: 1,
        height: 2,
        backgroundColor: '#9D4EDD',
        opacity: 0.5,
    },
    heading: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
    },
    optionsContainer: {
        paddingBottom: 20,
        gap: 16,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#9D4EDD',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default RedeemScreen;
