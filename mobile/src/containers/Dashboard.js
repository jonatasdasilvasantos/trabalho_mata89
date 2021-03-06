import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

/* Icons */
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Button, Template, Avatar, CardMenuButton, Header } from '../components'

function Dashboard(props) {
  const navigation = useNavigation()
  const changePage = (page) => () => navigation.navigate(page)

  React.useEffect(() => {
    console.log(props.route.params)
  }, [])

  return (
    <Template>
      <Header name="Dashboard" />
      <Avatar
        source={require('../../assets/Avatar.png')}
        name={
          props.route.params.user ? props.route.params.user : 'Jônatas da Silva'
        }
      />

      <View style={styles.block}>
        <View style={{ paddingBottom: '3.15%' }}>
          <CardMenuButton
            colors={['#925BFF', '#732DFF']}
            title="Receitas"
            value="R$ 32.000.000,00"
            onPress={changePage('Receitas')}
            icon="book-open-page-variant"
          />
        </View>
        <View style={{ paddingTop: '6.30%' }}>
          <CardMenuButton
            colors={['#1E1F22', '#1E1F22']}
            title="Despesas"
            value="R$ 54.000.000,00"
            onPress={changePage('Despesas')}
            icon="clipboard-pulse"
          />
        </View>
      </View>
      <View style={styles.block2}>
        <View style={{ paddingBottom: '3.15%' }}>
          <CardMenuButton
            colors={['#F5912F', '#F47318']}
            title="Parcerias"
            value="R$ 1.000.000,00"
            onPress={changePage('Parcerias')}
            icon="handshake"
          />
        </View>
        <View style={{ paddingTop: '6.30%' }}>
          <CardMenuButton
            colors={['#35BCA4', '#09816C']}
            title="Projetos"
            value="R$ 32.000.000,00"
            onPress={changePage('Projetos')}
            icon="head-lightbulb"
          />
        </View>
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

export default Dashboard
