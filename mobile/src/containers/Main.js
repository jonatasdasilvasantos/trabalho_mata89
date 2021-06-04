import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button, Template } from '../components'

function Main() {
  const navigation = useNavigation()

  const changePage = (page) => () => navigation.navigate(page)

  return (
    <Template>
      <Image source={require('../../assets/Logo.png')} />
      <Text style={styles.text1}>
        O portal da transparência da sua universidade pública.
      </Text>
      <View style={styles.slide}>
        <View style={styles.card}>
          <Image
            source={require('../../assets/ArrowLeft.png')}
            style={styles.arrowLeft}
          />
        </View>
        <LinearGradient
          colors={['#925BFF', '#732DFF']}
          style={styles.cardPrincipal}>
          <Image source={require('../../assets/Book.png')} />
          <Text
            style={{
              ...styles.cardText,
              fontSize: 32,
              fontFamily: 'Poppins_700Bold',
            }}>
            Receitas
          </Text>
          <Text
            style={{
              ...styles.cardText,
              fontFamily: 'OpenSans_600SemiBold',
              fontSize: 14,
              opacity: 0.8,
            }}>
            A receita da Universidade Federal da Bahia
          </Text>
          <Text
            style={{ ...styles.cardText, fontSize: 25, fontFamily: 'OpenSans_800ExtraBold' }}>
            R$ 32.000.00,00
          </Text>
        </LinearGradient>
        <View style={styles.card}>
          <Image
            source={require('../../assets/ArrowRight.png')}
            style={styles.arrowRight}
          />
        </View>
      </View>
      <Text style={styles.detalhes}>
        Acompanhe os ganhos da sua Universidade pública e veja como é difícil
        ela se manter.
      </Text>

      <View style={styles.buttons}>
        <Button transparent titulo="Cadastrar" onPress={changePage('Cadastrar')}/>
        <Button titulo="Log In" onPress={changePage('Login')} />
      </View>
    </Template>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    marginHorizontal: 0,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text1: {
    opacity: 0.4,
    fontSize: 14,
    fontFamily: 'Ubuntu_500Medium',
    textAlign: 'center',
    paddingHorizontal: '24%',
    paddingVertical: '4%',
  },
  slide: {
    width: '100%',
    height: '56.65%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 0,
    justifyContent: 'space-around',
  },
  card: {
    width: '37.31%',
    height: '81.95%',
    borderRadius: 40,
    marginHorizontal: -195,
    backgroundColor: '#35BCA4',
  },
  cardPrincipal: {
    width: '65.07%',
    height: '100%',
    paddingHorizontal: '6%',
    paddingVertical: '8%',
    borderRadius: 32,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#925BFF',
  },
  cardText: {
    color: '#FAFAFA',
    marginVertical: 8,
    textAlign: 'center',
  },
  arrowRight: {
    top: '50%',
    marginHorizontal: 16,
  },
  arrowLeft: {
    top: '50%',
    right: -92,
    marginHorizontal: 16,
  },
  detalhes: {
    color: '#979797',
    textAlign: 'center',
    marginHorizontal: '20%',
    marginVertical: '4%',
    fontFamily: 'Ubuntu_400Regular'
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: '12%',
  },
  buttonLogIn: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 18,
    backgroundColor: '#925BFF',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 24,
    shadowColor: '#925BFF',
    elevation: 5,
    fontFamily: 'Poppins_900Black',
  },
  buttonCadastrar: {
    color: '#925BFF',
    fontWeight: 'bold',
    lineHeight: 18,
    fontSize: 16,
  },
})

export default Main
