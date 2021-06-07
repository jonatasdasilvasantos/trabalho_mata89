import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

function Avatar({ source, name }) {
  return (
    <View style={styles.container}>
      <Image source={source} />
      <Text style={styles.nameStyle}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 30,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },

  nameStyle: {
    color: '#584E7E',
    fontSize: 16,
    fontFamily: 'Ubuntu_700Bold',
    marginLeft: 15,
    alignSelf: 'center',
  },
})

export default Avatar
