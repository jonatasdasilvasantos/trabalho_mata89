import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button, CardMenuButton, Template, Avatar, Header } from '../components'

/* Icons */
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Receitas() {
  const navigation = useNavigation()
  const changePage = (page) => () => navigation.navigate(page)

  return (
    <Template>
      <Header name="Receitas" />
      <Avatar
        source={require('../../assets/Avatar.png')}
        name="Jônatas da Silva"
      />
      <View style={styles.block}>
          <LinearGradient onPress={changePage('Receitas')} colors={['#925BFF', '#732DFF']} style={styles.card} >
            <Text style={styles.cardText}>Ministério da Educação</Text>
            <Text style={styles.cardDesc}>Oraçamento para 2021</Text>
            <Text style={styles.cardMoney}>R$ 32.000.000,00</Text>
        </LinearGradient>
        <LinearGradient onPress={changePage('Receitas')} colors={['#323438', '#1E1F22']} style={{ ...styles.card, marginTop: '3%', }} >
          <Text style={styles.cardText}>Parcerias Universitárias</Text>
          <Text style={styles.cardDesc}>Oraçamento previsto 2021</Text>
          <Text style={styles.cardMoney}>R$ 1.000.000,00</Text>
        </LinearGradient>
        <LinearGradient onPress={changePage('Receitas')} colors={['#F3A150', '#E5711F']} style={{ ...styles.card, marginTop: '3%', }} >
          <Text style={styles.cardText}>Projetos Acadêmicos</Text>
          <Text style={styles.cardDesc}>Oraçamento para 2021</Text>
          <Text style={styles.cardMoney}>R$ 8.000.000,00</Text>
        </LinearGradient>
      </View>
        {/*<View style={{ paddingTop: '6.30%' }}>
          <View>
            colors={['#1E1F22', '#1E1F22']}
            title="Despesas"
            value="R$ 54.000.000,00"
            onPress={changePage('Despesas')}
            icon="clipboard-pulse"
          </View>
        </View>
        <View style={{ paddingTop: '6.30%' }}>
          <View>
            colors={['#F3A150', '#E5711F']}
            title="Despesas"
            value="R$ 54.000.000,00"
            onPress={changePage('Despesas')}
            icon="clipboard-pulse"
          </View>
  </View>*/}
      {/* Menu */}
      <View style={styles.bar}>
        <View style={styles.disable}>
          <Pressable
            onPress={changePage('Dashboard')}
            style={{
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="view-grid"
              size={24}
              color="#fefefe"
              style={{ opacity: 0.7 }}
            />
            <Text style={styles.route}>Dashboard</Text>
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
          <MaterialCommunityIcons name="book-open-page-variant" size={28} color="#fefefe" />
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
            onPress={changePage('Receitas')}
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
  bar: {
    zIndex: 10,
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#925BFF',
    position: 'absolute',
    marginBottom: '-3%',
    position: 'absolute',
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
  block: {
    marginBottom: '1%',
    flexDirection: 'column',
  },
  card: {
    padding: '4%',
    marginTop: '5%',
    borderRadius: 18,
  },
  cardText: {
    fontSize: 26,
    color: '#fff',
    marginBottom: '6%',
    textAlign: 'center',
    fontFamily: 'Ubuntu_700Bold',
  },
  cardMoney: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ChakraPetch_700Bold'
  },
  cardDesc: {
    opacity: 0.8,
    color: '#fff',
    marginBottom: '2%',
    textAlign: 'center',
    fontFamily: 'OpenSans_600SemiBold'
  },
})

export default Receitas
