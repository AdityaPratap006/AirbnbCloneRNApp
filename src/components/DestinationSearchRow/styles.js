import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    searchResultRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    iconContainer: {
        backgroundColor: '#e7e7e7',
        padding: 7,
        borderRadius: 10,
    },
    locationText: {
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: '800',
    },
});
