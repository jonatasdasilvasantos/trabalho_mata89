import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
//import PersonFill from 'react-native-bootstrap-icons/icons/person-fill';
//import CheckCircleFillIcon from "react-native-bootstrap-icons/icons/check-circle-fill";

import { Button, Template } from '../components';

function Cadastrar() {
    const navigation = useNavigation()
    const changePage = (page) => () => navigation.navigate(page)
    const [user, setUser] = useState('');
    const [pass, setPassword] = useState('');

    return (
        <Template>
            <Image source={require('../../assets/Logo.png')} />
            <Text style={styles.text1}>
                O portal da transparência da sua universidade pública.
            </Text>
            <Image source={require('../../assets/Registrar.png')} style={{ marginTop: "5%" }} />
            <Text style={styles.chamada}>Registre-se no UniTransp</Text>
            <View style={styles.form}>
                <Octicons name="person" size={32} color="#979797" style={styles.icon} />
                <TextInput placeholder="usuário" placeholderTextColor="#979797" style={styles.input} onChangeText={(text) => setUser(text)} />
            </View>
            <View style={styles.form}>
                <MaterialIcons name="vpn-key" size={32} color="#979797" style={styles.icon} />
                <TextInput placeholder="senha" placeholderTextColor="#979797" style={styles.input} secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
            </View>
            <View style={styles.buttons}>
                <Button transparent titulo="Já tem cadastro?" onPress={changePage('Login')} />
                <Button titulo="Registrar" onPress={changePage('Login')} />
            </View>
        </Template>
    )
};

const styles = StyleSheet.create({
    text1: {
        opacity: 0.4,
        fontSize: 14,
        fontFamily: 'Ubuntu_500Medium',
        textAlign: 'center',
        paddingHorizontal: '24%',
        paddingVertical: '4%',
    },
    chamada: {
        fontSize: 18,
        marginTop: '15%',
        color: '#925BFF',
        textAlign: 'left',
        fontFamily: 'OpenSans_800ExtraBold',
    },
    form: {
        width: "80%",
        marginTop: 18,
        borderWidth: 2,
        borderRadius: 14,
        paddingVertical: 2,
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: "2%",
        marginVertical: "6%",
        paddingHorizontal: "4%",
        paddingVertical: "3%",
        borderColor: "transparent",
        backgroundColor: "#F4F4F4",
    },
    icon: {
        opacity: 0.9,
        marginRight: "4%",
    },
    input: {
        width: '80%',
        color: '#925BFF',
        fontSize: 16,
        fontFamily: 'Ubuntu_700Bold',
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //marginHorizontal: '15%',
        //marginVertical: "4%"
    },
});

export default Cadastrar