import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryButton = ({ title, active, onPress }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                active ? styles.activeButton : styles.inactiveButton
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.buttonText,
                    active ? styles.activeText : styles.inactiveText
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginRight: 10,
    },
    activeButton: {
        backgroundColor: '#9D4EDD',
    },
    inactiveButton: {
        backgroundColor: 'rgba(157, 78, 221, 0.2)',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '600',
    },
    activeText: {
        color: 'white',
    },
    inactiveText: {
        color: 'rgba(255, 255, 255, 0.8)',
    },
});

export default CategoryButton;
