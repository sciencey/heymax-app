import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';


const RedeemOption = ({ title, description, tag, logo }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
                <Image
                    source={logo}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.tag}>{tag}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(157, 78, 221, 0.1)',
        borderRadius: 16,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    content: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 8,
    },
    tag: {
        color: '#9D4EDD',
        fontSize: 14,
        fontWeight: '600',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
});

export default RedeemOption;
