import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginHorizontal: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    bedrooms: {
        fontWeight: 'bold',
        color: '#777',
        marginVertical: 10,
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
    },
    oldPrice: {
        color: '#777',
        textDecorationLine: 'line-through',
    },
    newPrice: { fontWeight: 'bold' },
    totalPrice: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});
