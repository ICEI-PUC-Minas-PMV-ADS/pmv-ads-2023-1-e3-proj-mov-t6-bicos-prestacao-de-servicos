import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        height: '100%',
        justifyContent: 'center'
    },
    questionText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 25,
        fontFamily: 'DMSans_700Bold'
    },
    buttonAlign: {
        paddingTop: 60,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
    }
    
});

export default styles;