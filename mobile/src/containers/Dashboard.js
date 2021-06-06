import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View, Image } from 'react-native'
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
      <Avatar
        source={require('../../assets/Avatar.png')}
        name="Jônatas da Silva"
      />

      <View style={styles.block}>
        <CardMenuButton
          colors={['#925BFF', '#732DFF']}
          title="Receitas"
          value="R$ 32.000.000,00"
          icon="menu-book"
        />
        <CardMenuButton
          colors={['#1E1F22', '#1E1F22']}
          title="Despesas"
          value="R$ 54.000.000,00"
          icon="menu-book"
        />
      </View>
      <View style={styles.block}>
        <CardMenuButton
          colors={['#F5912F', '#F47318']}
          title="Parcerias"
          value="R$ 1.000.000,00"
          icon="menu-book"
        />
        <CardMenuButton
          colors={['#35BCA4', '#09816C']}
          title="Projetos"
          value="R$ 32.000.000,00"
          icon="menu-book"
        />
      </View>
      <View style={styles.bar}>
        <View style={styles.disable}>
          <MaterialIcons
            name="menu-book"
            size={24}
            color="#fefefe"
            onPress={changePage('Receitas')}
            style={{ opacity: 0.7 }}
          />
          <Text style={styles.route}>Receitas</Text>
        </View>
        <View style={styles.disable}>
          <MaterialIcons
            name="assignment"
            size={24}
            color="#fefefe"
            onPress={changePage('Despesas')}
            style={{ opacity: 0.7 }}
          />
          <Text style={styles.route}>Despesas</Text>
        </View>
        <View style={styles.selected}>
          <MaterialIcons name="grid-view" size={24} color="#fefefe" />
        </View>
        <View style={styles.disable}>
          <MaterialCommunityIcons
            name="handshake"
            size={24}
            color="#fefefe"
            onPress={changePage('Parcerias')}
            style={{ opacity: 0.7 }}
          />
          <Text style={styles.route}>Parcerias</Text>
        </View>
        <View style={styles.disable}>
          <MaterialCommunityIcons
            name="medal"
            size={24}
            color="#fefefe"
            onPress={changePage('Projetos')}
            style={{ opacity: 0.7 }}
          />
          <Text style={styles.route}>Projetos</Text>
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
  },
  selected: {
    borderWidth: 3,
    borderRadius: 18,
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
