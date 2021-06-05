import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

function Template({ children }) {
  return (
    <ScrollView style={styles} contentContainerStyle={styles.container}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  extenal: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#fff',
  },
})

export default Template
