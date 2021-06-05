import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* Icons */
//import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Button, Template } from '../components';

function Dashboard() {
  const navigation = useNavigation();
  const changePage = (page) => () => navigation.navigate(page);

  return (
    <Template>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.block}>
        <LinearGradient colors={['#925BFF', '#732DFF']} style={styles.receitas}>
          <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Ubuntu_700Bold', alignSelf: 'flex-start' }}>Receitas</Text>
          <MaterialIcons name="menu-book" size={128} color="#f4f4f4" style={{ alignSelf: 'center' }}/>
          <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'ChakraPetch_700Bold', alignSelf: 'center' }}>R$ 32.000.000,00</Text>
        </LinearGradient>
        <View style={styles.despesas}></View>
        <View style={styles.parcerias}></View>
        <View style={styles.projetos}></View>
      </View>
      <View style={styles.bar}>
        <View style={styles.disable}>
          <MaterialIcons name="menu-book" size={24} color="#fefefe" onPress={changePage('Receitas')} style={{ opacity: 0.7 }} />
          <Text style={styles.route}>Receitas</Text>
        </View>
        <View style={styles.disable}>
          <MaterialIcons name="assignment" size={24} color="#fefefe" onPress={changePage('Despesas')} style={{ opacity: 0.7 }} />
          <Text style={styles.route}>Despesas</Text>
        </View>
        <View style={styles.selected}><MaterialIcons name="grid-view" size={24} color="#fefefe" /></View>
        <View style={styles.disable}>
          <MaterialCommunityIcons name="handshake" size={24} color="#fefefe" onPress={changePage('Parcerias')} style={{ opacity: 0.7 }} />
          <Text style={styles.route}>Parcerias</Text>
        </View>
        <View style={styles.disable}>
          <MaterialCommunityIcons name="medal" size={24} color="#fefefe" onPress={changePage('Projetos')} style={{ opacity: 0.7 }} />
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
    width: "100%",
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
  }
})

export default Dashboard;