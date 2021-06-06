import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

/* Icons */
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import { Button, Template, Avatar, CardMenuButton } from '../components'

function Dashboard() {
  const navigation = useNavigation()
  const changePage = (page) => () => navigation.navigate(page)

  return (
    <Template>
      <Text style={styles.title}>Dashboard</Text>
      <View
        style={{
          marginTop: 15,
          marginLeft: 30,
          flexDirection: 'row',
          alignSelf: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Image source={require('../../assets/Avatar.png')} />
        <Text
          style={{
            color: '#584E7E',
            fontSize: 24,
            fontFamily: 'Ubuntu_400Regular',
            marginLeft: 15,
            alignSelf: 'center',
          }}>
          Jônatas da Silva
        </Text>
      </View>

      <View style={styles.block}>
        <LinearGradient colors={['#925BFF', '#732DFF']} style={styles.receitas}>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontFamily: 'Ubuntu_700Bold',
              alignSelf: 'flex-start',
            }}>
            Receitas
          </Text>
          <MaterialCommunityIcons
            name="book-open-page-variant"
            size={128}
            color="#f4f4f4"
            style={{ alignSelf: 'center' }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontFamily: 'ChakraPetch_700Bold',
              alignSelf: 'center',
            }}>
            R$ 32.000.000,00
          </Text>
        </LinearGradient>
        <LinearGradient colors={['#323438', '#1E1F22']} style={ styles.receitas }>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontFamily: 'Ubuntu_700Bold',
              alignSelf: 'flex-start',
            }}>
            Despesas
          </Text>
          <MaterialCommunityIcons
            name="clipboard-pulse"
            size={128}
            color="#f4f4f4"
            style={{ alignSelf: 'center' }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontFamily: 'ChakraPetch_700Bold',
              alignSelf: 'center',
            }}>
            R$ 54.000.000,00
          </Text>
        </LinearGradient>
      </View>
      <View style={styles.block}>
        <LinearGradient colors={['#F5912F', '#F47318']} style={styles.receitas}>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontFamily: 'Ubuntu_700Bold',
              alignSelf: 'flex-start',
            }}>
            Parcerias
          </Text>
          <MaterialCommunityIcons
            name="handshake"
            size={128}
            color="#f4f4f4"
            style={{ alignSelf: 'center' }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontFamily: 'ChakraPetch_700Bold',
              alignSelf: 'center',
            }}>
            R$ 1.000.000,00
          </Text>
        </LinearGradient>
        <LinearGradient colors={['#35BCA4', '#09816C']} style={styles.receitas}>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontFamily: 'Ubuntu_700Bold',
              alignSelf: 'flex-start',
            }}>
            Projetos
          </Text>
          <MaterialCommunityIcons
            name="head-lightbulb"
            size={128}
            color="#f4f4f4"
            style={{ alignSelf: 'center' }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontFamily: 'ChakraPetch_700Bold',
              alignSelf: 'center',
            }}>
            R$ 32.000.000,00
          </Text>
        </LinearGradient>
        {/* <View style={styles.despesas}></View>
        <View style={styles.parcerias}></View>
        <View style={styles.projetos}></View> */}
      </View>
      { /* Menu */}
      <View style={styles.bar}>
        <View style={styles.disable}>
          <Pressable
            onPress={changePage('Receitas')}
            style={{
              alignItems: 'center',
             }}
          >
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
            onPress={changePage('Receitas')}
            style={{
              alignItems: 'center',
            }}
          >
            <MaterialCommunityIcons
              name="clipboard-pulse"
              size={24}
              color="#fefefe"
              onPress={changePage('Despesas')}
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
            onPress={changePage('Receitas')}
            style={{
              alignItems: 'center',
            }}
          >
            <MaterialCommunityIcons
              name="handshake"
              size={24}
              color="#fefefe"
              onPress={changePage('Parcerias')}
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
            }}
          >
            <MaterialCommunityIcons
              name="head-lightbulb"
              size={24}
              color="#fefefe"
              onPress={changePage('Projetos')}
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
    //paddingHorizontal: '6.4%',
    //paddingVertical: '3.2%',
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
    //opacity: 0.6,
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
    flexDirection: 'row',
  },
})

export default Dashboard
