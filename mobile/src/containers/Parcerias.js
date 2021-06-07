import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Template, Avatar, Header } from '../components'

function Parcerias() {
  const navigation = useNavigation()
  const changePage = (page) => () => navigation.navigate(page)

  return (
    <Template>
      <Header name="Parcerias" />
      <Avatar
        source={require('../../assets/Avatar.png')}
        name="Jônatas da Silva"
      />
    </Template>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fefefe',
  }
})

export default Parcerias
