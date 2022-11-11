//Arquivo JavaScript da tela Resultado

import React from 'react'
import {TextInput, View, Text} from 'react-native'
import { styles } from './style'


export function Resultado ({route}: any) {
    return(
        <View style = {styles.container}>

            <Text style = {styles.text}>
                Nome: {route.params.nome}
            </Text>

            <Text style = {styles.text}>
                Telefone: {route.params.telefone}
            </Text>

            <Text style = {styles.text}>
                Endereço: {route.params.endereco}
            </Text>

            <Text style = {styles.text}>
                Número: {route.params.numero}
            </Text>

            <Text style = {styles.text}>
                Cidade: {route.params.cidade}
            </Text>

            <Text style = {styles.text}>
                Estado: {route.params.estado}
            </Text>

        </View>
    )
}