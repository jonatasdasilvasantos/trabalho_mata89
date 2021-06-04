import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

function Button({ transparent, titulo, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[!transparent ? styles.button1 : styles.button2]}>
      <Text style={[!transparent ? styles.text1 : styles.text2]}>{titulo}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button1: {
    backgroundColor: '#925BFF',
    paddingVertical: '6%',
    paddingHorizontal: '10%',
    borderRadius: 24,
    shadowColor: '#925BFF',
    elevation: 6,
  },
  button2: {
    backgroundColor: 'transparent',
    paddingVertical: '6%',
    paddingRight: '8%',
    borderRadius: 24,
    //elevation: 5,
  },
  text1: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16, lineHeight: 18, fontFamily: 'Ubuntu_700Bold' },
  text2: { color: '#925BFF', fontWeight: 'bold', lineHeight: 16, fontSize: 16, fontFamily: 'Poppins_900Black' },
})

export default Button