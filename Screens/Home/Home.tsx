//Arquivo JavaScript da tela Home

import React, { useState } from 'react'
import { TextInput, Button, Text, View } from 'react-native'
import { styles } from './style'


export function Home({ navigation }: any) {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    return (

        <View style={styles.container}>
            <View style={styles.text}>
                <Text>Nome:</Text>
                <TextInput style={styles.input}
                    onChangeText={setNome}
                >

                </TextInput>
            </View>

            <View style={styles.text}>
                <Text>Telefone:</Text>
                <TextInput style={styles.input}
                    onChangeText={setTelefone}
                >

                </TextInput>
            </View>

            <View style={styles.text}>
                <Text>Endereço:</Text>
                <TextInput style={styles.input}
                    onChangeText={setEndereco}
                >

                </TextInput>
            </View>

            <View style={styles.text} >
                <Text>Número:</Text>
                <TextInput style={styles.input}
                    onChangeText={setNumero}
                >
                </TextInput>
            </View>

            <View style={styles.text}>
                <Text>Cidade:</Text>
                <TextInput style={styles.input}
                    onChangeText={setCidade}
                >

                </TextInput>
            </View>

            <View style={styles.text}>
                <Text>Estado:</Text>
                <TextInput style={styles.input}
                    onChangeText={setEstado}
                >

                </TextInput>
            </View>

            <Button title='Ir para as informações do usuário'
                onPress={() => navigation.navigate('Resultado', {
                    nome,
                    telefone,
                    endereco,
                    numero,
                    cidade,
                    estado
                })}
            />
        </View>
    )
}