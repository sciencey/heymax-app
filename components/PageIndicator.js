import React from 'react';
import { View, StyleSheet } from 'react-native';

const PageIndicator = ({ currentPage, totalPages }) => {
    return (
        <View style={styles.container}>
            {Array.from({ length: totalPages }).map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.dot,
                        currentPage === index ? styles.activeDot : styles.inactiveDot
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    activeDot: {
        width: 24,
        backgroundColor: 'white',
    },
    inactiveDot: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
});

export default PageIndicator;
