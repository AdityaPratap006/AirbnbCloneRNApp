import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: '#e7e7e7',
    },
    title: {
        marginHorizontal: 5,
    },
    guestType: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    guestAge: {
        fontSize: 16,
        color: 'grey',
    },
    actions: {
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        marginHorizontal: 5,
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    value: {
        marginHorizontal: 10,
        fontSize: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    searchButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f15454',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    searchText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
