import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button, Template } from '../components';

function Despesas() {
    const navigation = useNavigation();
    const changePage = (page) => () => navigation.navigate(page);

    return (
        <Template>
            <Text>Despesas</Text>
        </Template>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        marginHorizontal: 0,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    text1: {
        opacity: 0.4,
        fontSize: 14,
        fontFamily: 'Ubuntu_500Medium',
        textAlign: 'center',
        paddingHorizontal: '24%',
        paddingVertical: '4%',
    },
    slide: {
        width: '100%',
        height: '56.65%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 0,
        justifyContent: 'space-around',
    },
    card: {
        width: '37.31%',
        height: '81.95%',
        borderRadius: 24,
        marginHorizontal: -195,
        backgroundColor: '#35BCA4',
    },
    cardPrincipal: {
        width: 150,
        height: 300,
        // paddingHorizontal: 24,
        // paddingVertical: 32,
        borderRadius: 24,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#925BFF',
    },
    cardText: {
        color: '#FAFAFA',
        marginVertical: 8,
        textAlign: 'center',
    },
    arrowRight: {
        top: '50%',
        marginHorizontal: 16,
    },
    arrowLeft: {
        top: '50%',
        right: -92,
        marginHorizontal: 16,
    },
    detalhes: {
        color: '#979797',
        textAlign: 'center',
        marginHorizontal: 64,
        marginVertical: 20,
    },
    buttons: {
        //width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        //   marginHorizontal: '12%',
    },
    buttonLogIn: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 18,
        backgroundColor: '#925BFF',
        paddingVertical: 24,
        paddingHorizontal: 32,
        borderRadius: 24,
        shadowColor: '#925BFF',
        elevation: 5,
    },
    buttonCadastrar: {
        color: '#925BFF',
        fontWeight: 'bold',
        lineHeight: 18,
        fontSize: 16,
    },
})

export default Despesas;