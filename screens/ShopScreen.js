import React,{ useState,useEffect }  from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PageIndicator from '../components/PageIndicator';
import BrandCard from '../components/BrandCard';
import CategoryButton from '../components/CategoryButton';

const { width } = Dimensions.get('window');

const ShopScreen = ({ navigation }) => {
    const categories = [
        { id: 1, title: 'Shop online', active: true },
        { id: 2, title: 'Book travel', active: false },
        { id: 3, title: 'Order food', active: false },
    ];

    const brands = [
        { id: 1, name: 'Shopee', category: 1,logo: require('../assets/Shopee.png'), bgColor: '#EE4D2D', size: 'large' },
        { id: 2, name: 'Lazada',category: 1, logo: require('../assets/Lazada.png'), bgColor: '#0F146E', size: 'large' },
        { id: 3, name: 'H&M', category: 1,logo: require('../assets/merchant_hnm.png'), bgColor: '#E50010', size: 'small' },
        { id: 4, name: 'Fave', category: 2,logo: require('../assets/fave.png'), bgColor: '#E91E63', size: 'small' },
        { id: 5, name: 'Uniqlo', category: 2,logo: require('../assets/merchant logo.png'), bgColor: '#FFFFFF', size: 'small' },
        { id: 6, name: 'Amazon', category: 3,logo: require('../assets/amazon.sg.png'), bgColor: '#FFFFFF', size: 'medium' },
        { id: 7, name: 'FairPrice', category: 3,logo: require('../assets/merchant_ntucfairprice.png'), bgColor: '#0F146E', size: 'medium' },
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

    // 根据选中的 category 过滤 brands
    const filteredBrands = brands.filter(b => b.category === selectedCategory);
    useEffect(() => {
        // 如果你想在切换时重置 ScrollView 的滚动位置，可以在这里做
    }, [selectedCategory]);
    return (
        <View style={styles.container}>
            {/* Number indicator */}
            <View style={styles.numberContainer}>
                <View style={styles.numberCircle}>
                    <Text style={styles.numberText}>1</Text>
                </View>
                <View style={styles.numberLine} />
            </View>

            {/* Content */}
            <Text style={styles.heading}>Shop your favourite{'\n'}brands, earn miles</Text>

            {/* Categories */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0, flexShrink: 0 }} // 这才是改 wrapper 的方式！
                contentContainerStyle={styles.categoriesContainer}
            >
                {categories.map(category => (
                    <CategoryButton
                        key={category.id}
                        title={category.title}
                        active={category.id === selectedCategory}
                        onPress={() => setSelectedCategory(category.id)}
                    />
                ))}
            </ScrollView>

            {/* Brands Grid */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.brandsContainer}
            >
                <View style={styles.brandsGrid}>
                    {filteredBrands.map(brand => (
                        <BrandCard
                            key={brand.id}
                            name={brand.name}
                            logo={brand.logo}
                            bgColor={brand.bgColor}
                            size={brand.size}
                        />
                    ))}
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomContainer}>
                <PageIndicator currentPage={1} totalPages={3} />

                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('Redeem')}
                >
                    <Ionicons name="chevron-forward" size={24} color="white" />
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
    categoriesContainer: {
        flexGrow: 0,
        paddingVertical: 10,
        gap: 10,
    },
    brandsContainer: {
        paddingBottom: 20,
    },
    brandsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
        paddingHorizontal: 10,
    },
    nextButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#9D4EDD',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ShopScreen;
