import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

/* Icons */
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Button, Template, Avatar, CardMenuButton, Header } from '../components'

function Projetos() {
  const navigation = useNavigation()
  const changePage = (page) => () => navigation.navigate(page)

  return (
    <Template>
      <Header name="Projetos" />
      <Avatar
        source={require('../../assets/Avatar.png')}
        name="Jônatas da Silva"
      />

      {/* Menu */}
      <View style={styles.bar}>
        <View style={styles.disable}>
          <Pressable
            onPress={changePage('Receitas')}
            style={{
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={24}
              color="#fefefe"
              style={{ opacity: 0.7 }}
            />
            <Text style={styles.route}>Receitas</Text>
          </Pressable>
        </View>
        <View style={styles.disable}>
          <Pressable
            onPress={changePage('Despesas')}
            style={{
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="clipboard-pulse"
              size={24}
              color="#fefefe"
              style={{ opacity: 0.7 }}
            />
            <Text style={styles.route}>Despesas</Text>
          </Pressable>
        </View>
        <View style={styles.selected}>
          <MaterialCommunityIcons name="view-grid" size={28} color="#fefefe" />
        </View>
        <View style={styles.disable}>
          <Pressable
            onPress={changePage('Parcerias')}
            style={{
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="handshake"
              size={24}
              color="#fefefe"
              style={{ opacity: 0.7 }}
            />
            <Text style={styles.route}>Parcerias</Text>
          </Pressable>
        </View>
        <View style={styles.disable}>
          <Pressable
            onPress={changePage('Projetos')}
            style={{
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="head-lightbulb"
              size={24}
              color="#fefefe"
              style={{ opacity: 0.7 }}
            />
            <Text style={styles.route}>Projetos</Text>
          </Pressable>
        </View>
      </View>
    </Template>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#925BFF',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginTop: 16,
    marginHorizontal: 24,
    fontFamily: 'Ubuntu_700Bold',
  },
  bar: {
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#925BFF',
    position: 'absolute',
    marginBottom: '-3%',
  },
  selected: {
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '-8%',
    padding: '4%',
    backgroundColor: '#925BFF',
  },
  disable: {
    alignItems: 'center',
    marginTop: '-3%',
    paddingHorizontal: '6.4%',
  },
  route: {
    fontSize: 10,
    color: '#fff',
    opacity: 1,
    fontFamily: 'OpenSans_600SemiBold',
  },
  receitas: {
    padding: '4%',
    borderRadius: 24,
    marginTop: 32,
    marginHorizontal: 5,
  },
  block: {
    marginBottom: -10,
    flexDirection: 'row',
  },
  block2: {
    marginTop: '-7.30%',
    marginBottom: '-7.30%',
    flexDirection: 'row',
  },
})

export default Projetos
