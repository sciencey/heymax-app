import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const gap = 10;

const BrandCard = ({ name, logo, bgColor, size }) => {
    // Calculate dimensions based on size
    const getDimensions = () => {
        const baseWidth = (width - 40 - gap) / 2; // 40 for container padding, gap between items

        switch(size) {
            case 'large':
                return { width: baseWidth, height: baseWidth * 0.8 };
            case 'medium':
                return { width: baseWidth, height: baseWidth * 0.6 };
            case 'small':
                return { width: (baseWidth - gap/2), height: (baseWidth - gap/2) * 0.8 };
            default:
                return { width: baseWidth, height: baseWidth * 0.6 };
        }
    };

    const { width: cardWidth, height: cardHeight } = getDimensions();

    return (
        <TouchableOpacity
            style={[
                styles.card,
                {
                    backgroundColor: bgColor,
                    width: cardWidth,
                    height: cardHeight,
                    marginBottom: gap,
                }
            ]}
        >
            <Image
                source={logo}
                style={styles.logo}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        width: '70%',
        height: '70%',
    },
});

export default BrandCard;
