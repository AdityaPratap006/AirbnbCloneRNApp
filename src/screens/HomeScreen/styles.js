import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchButton: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        width: windowWidth - 40,
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 100,
        position: 'absolute',
        top: 16,
        elevation: 10,
        zIndex: 10,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    backgroundImage: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    headerContent: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'space-evenly',
        paddingVertical: 50,
    },
    title: {
        color: 'white',
        fontSize: 80,
        fontWeight: 'bold',
        width: '70%',
    },
    button: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
