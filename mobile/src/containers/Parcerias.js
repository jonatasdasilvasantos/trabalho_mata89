import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Template, Avatar, Header } from '../components'

/* Icons */
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Parcerias() {
  const navigation = useNavigation()
  const changePage = (page) => () => navigation.navigate(page)

  return (
    <Template>
      <Header name="Parcerias" />
      <Avatar
        source={require('../../assets/Avatar.png')}
        name="Jônatas da Silva"
      />
      <View style={{ height: '39%' }}>
        <View style={{ backgroundColor: '#F47318', paddingBottom: '25%', paddingHorizontal: '4%' }}>
          <Text style={{ color: '#fefefe', fontFamily: 'Ubuntu_700Bold', fontSize: 32, paddingVertical: '4%' }}>Seja um parceiro!</Text>
          <Text style={{ color: '#fefefe', opacity: 0.8, fontSize: 20, fontFamily: 'OpenSans_600SemiBold'}}>Ajude a sua Universidade a continuar progredindo no desenvolvimento científico do país!</Text>
        </View>
        <Pressable style={{ paddingHorizontal: '10%', paddingVertical: '6%', backgroundColor: '#09816C', width: '50%', alignSelf: 'center', borderRadius: 14, marginTop: '-9%', zIndex: 10}}>
          <Text style={{ color: '#fefefe', fontSize: 18, fontFamily: 'Ubuntu_700Bold'}}>Fazer doação</Text>
        </Pressable>
      </View>
      <View style={{ backgroundColor: '#F3A150', paddingBottom: '25%', paddingHorizontal: '4%', paddingVertical: '15%', height: '48%', marginTop: '-12%', marginBottom: '-20%' }}>
        <Text style={{ color: '#fff', fontFamily: 'OpenSans_600SemiBold', fontSize: 20, paddingVertical: '4%' }}>Até aqui universidade já foi ajudada por mais de 1.000 parceiros, e já obteve uma soma de aproximadamente:</Text>
        <Text style={{ fontFamily: 'ChakraPetch_700Bold', fontSize: 40, textAlign: 'center', color: '#fff', marginTop: '10%' }}>R$ 1.000.000,00</Text>
      </View>
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
        <View style={styles.selected}>
          <MaterialCommunityIcons name="handshake" size={28} color="#fefefe" />
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
  view: {
    backgroundColor: '#fefefe',
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
});

export default Parcerias
