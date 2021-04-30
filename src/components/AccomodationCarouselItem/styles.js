import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        aspectRatio: 1 / 1,
        resizeMode: 'cover',
        borderRadius: 0,
    },
    details: {
        marginHorizontal: 10,
        flex: 1,
        padding: 5,
    },
    bedrooms: {
        fontWeight: 'bold',
        color: '#777',
        marginVertical: 5,
    },
    typeAndTitle: {
        fontSize: 18,
        lineHeight: 26,
        marginBottom: 7,
    },
    prices: {
        fontSize: 18,
    },
    newPrice: { fontWeight: 'bold', color: '#000' },
});
