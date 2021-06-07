import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button, Template, CardMenuButton, Pressable } from '../components'

function Parcerias() {
    const navigation = useNavigation();
    const changePage = (page) => () => navigation.navigate(page);

    return (
        <Template>
            <View>
                <Text>Seja um parceiro!</Text>
                <Text>Ajude o progresso do País, nas Universidades públicas!</Text>
                <Text>Faça Uma doação</Text>
            </View>
            <View>
                <Text>Total arecardado</Text>
            </View>
        </Template>
    )
}

const styles = StyleSheet.create({
   
})

export default Parcerias;