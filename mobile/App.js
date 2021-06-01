import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image } from 'react-native';
// Fonts externas
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';

// Files png
import logo from './assets/Logo.png';
import book from './assets/Book.png';
import arrow_left from './assets/ArrowLeft.png';
import arrow_right from './assets/ArrowRight.png';

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text style={styles.text1}>O portal da transparência da sua universidade pública.</Text>
      <View style={styles.slide}>
        <View style={styles.card}>
          <Image source={arrow_left} style={styles.arrowLeft} />
        </View>
        <LinearGradient colors={['#925BFF', '#732DFF']} style={styles.cardPrincipal}>
          <Image source={book} />
          <Text style={{ ...styles.cardText, fontSize: 32, fontWeight: 'bold', fontFamily: 'Ubuntu_700Bold' }}>Receitas</Text>
          <Text style={{ ...styles.cardText, fontFamily: 'Ubuntu_500Bold', fontSize: 14, opacity: 0.8, fontWeight: '600' }}>A receita da Universidade Federal da Bahia</Text>
          <Text style={{ ...styles.cardText, fontSize: 27, fontWeight: 'bold' }}>R$ 32.000.00,00</Text>
        </LinearGradient>
        <View style={styles.card}>
          <Image source={arrow_right} style={ styles.arrowRight }/>
        </View>
      </View>
      <Text style={styles.detalhes} >Acompanhe os ganhos da sua Universidade pública e veja como é difícil ela se manter.</Text>
      <View style={styles.buttons} >
        <Text style={styles.buttonCadastrar}>Cadastrar</Text>
        <Text style={styles.buttonLogIn}>Log In</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 32,
  },
  text1: {
    opacity: 0.4,
    fontSize: 14,
    fontFamily: 'Ubuntu_500Medium',
    textAlign: "center",
    paddingHorizontal: "24%",
    paddingVertical: "4%",
  },
  slide: {
    width: '100%',
    height: '56.65%',
    flexDirection: 'row',
    alignItems: "center",
    marginHorizontal: 0,
    justifyContent: "space-around",
  },
  card: {
    width: "37.31%",
    height: "81.95%",
    borderRadius: 24,
    marginHorizontal: -195,
    backgroundColor: "#DCDFE2"
  },
  cardPrincipal: {
    width: "65.07%",
    height: "100%",
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderRadius: 24,
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#925BFF",
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
    marginHorizontal: 64,
    marginVertical: 20,
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
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 18,
    backgroundColor: '#925BFF',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 24,
    shadowColor: '#925BFF',
    
  },
  buttonCadastrar: {
    color: '#925BFF',
    fontWeight: 'bold',
    lineHeight: 18,
    fontSize: 16,
  },
});
