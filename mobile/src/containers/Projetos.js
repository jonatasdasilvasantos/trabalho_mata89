import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native'
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
      <View style={styles.chamada}>
        <View>
          <Text style={styles.apresentation}>Conheça os projetos da sua Universidade</Text>
        </View>
        <View style={styles.cards}>
          <View style={styles.card}>
            <Image
              source={require('../../assets/projetos/ondadigital_display.png')}
            />
            <Text style={styles.instute}>Computação</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../../assets/projetos/formas.png')}
            />
            <Text style={styles.instute}>Computação</Text>
          </View>
        </View>
        <View style={styles.value}>
          <Text style={styles.valueTitle}>A universidade é apoiada com:</Text>
          <Text style={styles.valueValue}>R$ 8.000.000,00</Text>
          <Text style={styles.valuePro}>Provindos de projetos acadêmicos</Text>
        </View>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Conheça outros projetos</Text></Pressable>
      </View>

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
    borderTopColor: '#fefefe',
    borderTopWidth: 1,
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
  chamada: {
    zIndex: 0,
    padding: '4%',
    width: '100%',
    height: '92%',
    marginTop: '2%',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#47d65f',
  },
  apresentation: {
    fontSize: 26,
    color: '#fff',
    lineHeight: 40,
    fontFamily: 'Ubuntu_700Bold',
  },
  button: {
    color: '#fff',
    padding: '8%',
    borderRadius: 14,
    alignSelf: 'center',
    marginVertical: '10%',
    backgroundColor: '#121212',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
  cards: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
    justifyContent: 'space-around'
  },
  card: {
    padding: '3%',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: '5%',
  },
  instute: {
    fontSize: 14,
    marginTop: '1%',
    fontFamily: 'OpenSans_600SemiBold',
    textAlign: 'center',
  },
  valueTitle: {
    color: '#fff',
    fontSize: 22,
    marginTop: '6%',
    fontFamily: 'Ubuntu_500Medium',
  },
  valueValue: {
    color: '#fff',
    fontSize: 34,
    textAlign: 'center',
    fontFamily: 'ChakraPetch_700Bold',
  },
  valuePro: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Ubuntu_500Medium',
  },
})

export default Projetos
