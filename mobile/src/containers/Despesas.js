import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

/* Icons */
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Button, Template, Avatar, CardMenuButton, Header } from '../components'

function Despesas() {
  const navigation = useNavigation()
  const changePage = (page) => () => navigation.navigate(page)

  return (
    <Template>
      <Header name="Despesas" />
      <Avatar
        source={require('../../assets/Avatar.png')}
        name="Jônatas da Silva"
      />

      {/* Despesas por enquanto */}
      <View
        style={{
          marginTop: 20,
          height: 39,
          width: 330,
          backgroundColor: '#A893FF',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: 6,
        }}>
        <Text
          style={{ fontFamily: 'Ubuntu_700Bold', color: '#fff', fontSize: 16 }}>
          Destino
        </Text>
        <Text
          style={{ fontFamily: 'Ubuntu_700Bold', color: '#fff', fontSize: 16 }}>
          Valor
        </Text>
      </View>
      <View
        style={{
          width: 315,
          height: 420,
          backgroundColor: '#6746ED',
          borderBottomRightRadius: 28,
          borderBottomLeftRadius: 28,
        }}>
        {[0, 1, 2, 3, 4, 5, 6].map((itens) => (
          <View
            style={{
              width: 315,
              height: 50,
              backgroundColor: '#6746ED',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderBottomWidth: 0.8,
              borderBottomColor: '#A893FF',
            }}
            key={itens}>
            <Text
              style={{
                fontFamily: 'Ubuntu_700Bold',
                color: '#fff',
                fontSize: 16,
              }}>
              Energia eletrica
            </Text>
            <Text
              style={{
                fontFamily: 'Ubuntu_700Bold',
                color: '#fff',
                fontSize: 16,
              }}>
              R$ 35.000,00
            </Text>
          </View>
        ))}
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
              name="book-open-page-variant"
              size={24}
              color="#fefefe"
              style={{ opacity: 0.7 }}
            />
            <Text style={styles.route}>Receitas</Text>
          </Pressable>
        </View>
        <View style={styles.selected}>
          <MaterialCommunityIcons name="clipboard-pulse" size={28} color="#fefefe" />
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

export default Despesas
