import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

function Home({ children, color }) {
  return (
    <View style={styles.hexagon}>
      <View style={styles.hexagonInner}>{children}</View>
      <View style={styles.hexagonBefore} />
      <View style={styles.hexagonAfter} />
    </View>
  )
}

const styles = StyleSheet.create({
  hexagon: {
    width: 300,
    height: 300,
  },
  hexagonInner: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -25,
    left: 0,
    width: 300,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 150,
    borderLeftColor: 'transparent',
    borderRightWidth: 150,
    borderRightColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'red',
  },
  hexagonBefore: {
    position: 'absolute',
    top: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 150,
    borderLeftColor: 'transparent',
    borderRightWidth: 150,
    borderRightColor: 'transparent',
    borderBottomWidth: 25,
    borderBottomColor: 'red',
  },
})
