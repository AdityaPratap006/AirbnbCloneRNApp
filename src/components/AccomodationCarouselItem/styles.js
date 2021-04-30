import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        marginVertical: 5,
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
        fontSize: 14,
        marginBottom: 5,
    },
    prices: {
        fontSize: 18,
    },
    newPrice: { fontWeight: 'bold', color: '#000' },
});
