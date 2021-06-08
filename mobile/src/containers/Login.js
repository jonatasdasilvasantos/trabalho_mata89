import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Octicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import api from '../services'
import { Button, Template } from '../components'

function Login() {
  const navigation = useNavigation()
  const changePage = (page) => () => navigation.navigate(page)
  const [user, setUser] = useState('')
  const [pass, setPassword] = useState('')

  const login = async () => {
    try {
      let { status } = await api.post('/login', { login: user, password: pass })

      if (status === 200) {
        navigation.navigate('Dashboard')
      }
    } catch (error) {
      Alert.alert('Falha no Login, tente novamente')
      console.log(error)
    }
  }

  return (
    <Template>
      <Image source={require('../../assets/Logo.png')} />
      <Text style={styles.text1}>
        O portal da transparência da sua universidade pública.
      </Text>
      <Image
        source={require('../../assets/Login.png')}
        style={{ marginTop: '5%' }}
      />
      <Text style={styles.chamada}>Informe suas credenciais</Text>
      <View style={styles.form}>
        <Octicons name="person" size={32} color="#C4C4C4" style={styles.icon} />
        <TextInput
          placeholder="usuário"
          placeholderTextColor="#979797"
          style={styles.input}
          onChangeText={(text) => setUser(text)}
        />
      </View>
      <View style={styles.form}>
        <MaterialIcons
          name="vpn-key"
          size={32}
          color="#C4C4C4"
          style={styles.icon}
        />
        <TextInput
          placeholder="senha"
          placeholderTextColor="#979797"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          transparent
          titulo="Esqueceu sua senha?"
          onPress={changePage('Password')}
        />
        <Button titulo="Entrar" onPress={login} />
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
  chamada: {
    fontSize: 18,
    marginTop: '15%',
    color: '#925BFF',
    textAlign: 'left',
    fontFamily: 'OpenSans_800ExtraBold',
  },
  form: {
    width: '80%',
    marginTop: 18,
    borderWidth: 2,
    borderRadius: 14,
    paddingVertical: 2,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: '2%',
    marginVertical: '6%',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderColor: 'transparent',
    backgroundColor: '#F4F4F4',
  },
  input: {
    width: '80%',
    color: '#925BFF',
    fontSize: 16,
    fontFamily: 'Ubuntu_700Bold',
  },
  icon: {
    opacity: 0.9,
    marginRight: '4%',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '12%',
  },
})

export default Login
