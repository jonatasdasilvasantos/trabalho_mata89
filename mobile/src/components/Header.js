import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Header({ name, push, notifications }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.iconBox}>
        <MaterialCommunityIcons
          name="arrow-up-bold"
          size={32}
          color="#f4f4f4"
          onPress={push}
          style={{ alignSelf: 'center' }}
        />
        {/*<MaterialCommunityIcons
          name="bell"
          size={32}
          color="#f4f4f4"
          onPress={notifications}
          style={{ alignSelf: 'center' }}
        />*/}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  containerTitle: {
    flex: 4,
  },
  title: {
    fontSize: 24,
    color: '#925BFF',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginTop: 16,
    marginHorizontal: 24,
    fontFamily: 'Ubuntu_700Bold',
  },
  iconBox: {
    flex: 1,
    flexDirection: 'row',
  },
})

export default Header
