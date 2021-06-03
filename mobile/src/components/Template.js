import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

function Template({ children }) {
  return <View style={styles.container}>{children}</View>
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
})

export default Template
