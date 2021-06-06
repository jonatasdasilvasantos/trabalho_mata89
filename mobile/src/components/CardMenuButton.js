import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function CardMenuButton({ title, colors, value, icon, onPress }) {
  return (
    <LinearGradient colors={colors} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <MaterialCommunityIcons
        name={icon}
        size={128}
        color="#f4f4f4"
        style={{ alignSelf: 'center' }}
      />
      <Text style={styles.value}>{value}</Text>
      <MaterialCommunityIcons
        name="location-enter"
        size={32}
        color="#f4f4f4"
        onPress={onPress}
        style={{ alignSelf: 'center' }}
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 240,
    padding: 15,
    borderRadius: 24,
    marginTop: 24,
    marginHorizontal: 5,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Ubuntu_700Bold',
    alignSelf: 'flex-start',
  },
  value: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'ChakraPetch_700Bold',
    alignSelf: 'center',
  },
})

export default CardMenuButton
