import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Main from './Main';
import Home from './Home';
import Login from './Login';
import Cadastrar from './Cadastrar';
import Dashboard from './Dashboard';
import Parcerias from './Parcerias';
import Projetos from './Projetos';
import Despesas from './Despesas';
import Receitas from './Receitas';

const Stack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Receitas" component={Receitas} />
        <Stack.Screen name="Despesas" component={Despesas} />
        <Stack.Screen name="Parcerias" component={Parcerias} />
        <Stack.Screen name="Projetos" component={Projetos} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
