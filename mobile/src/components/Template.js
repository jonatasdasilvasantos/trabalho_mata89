import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

function Template({ children, cor }) {
  return (
    <ScrollView
      style={styles}
      contentContainerStyle={[
        styles.container,
        cor ? { backgroundColor: cor } : { backgroundColor: '#fff' },
      ]}>
      <StatusBar style="auto" />
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 30,
    marginHorizontal: 0,
    alignItems: 'center',
  },
  extenal: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#fff',
  },
})

export default Template
