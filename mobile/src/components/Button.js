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
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 24,
    shadowColor: '#925BFF',
    elevation: 5,
  },
  button2: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 24,
    elevation: 5,
  },
  text1: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16, lineHeight: 18 },
  text2: { color: '#925BFF', fontWeight: 'bold', lineHeight: 18, fontSize: 16 },
})

export default Button
