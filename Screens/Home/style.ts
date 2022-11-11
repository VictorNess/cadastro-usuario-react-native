//Arquivo de estilização TypeScript da Home

import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#A9E451',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        fontSize: 16,
        borderWidth: 3,
        width: 240,
        color: 'black',
        paddingLeft: 10,
        borderRadius: 7,
        marginLeft: 10
    },

    text: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'flex-end',
        width: 320,

    }

})