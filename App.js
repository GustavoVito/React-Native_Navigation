import React from 'react'
import {Button, View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TelaA from './src/views/TelaA'
import TelaB from './src/views/TelaB'
import TelaC from './src/views/TelaC'
import PassoStack from './src/componentes/PassoStack'

function TelaPrincipal({navigation}) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0AF'}}>
      <Text style={{
        color: '#FFF',
        fontSize: 30
      }}> Primeira Tela - Principal </Text>
      <Button
        title='Segunda Tela - verde'
        onPress={() => navigation.navigate('Detalhes')}
      />
    </View>
  )
}

function TelaDescricao({navigation}) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0F9'
    }}>
      <Text style={{
        color: '#000',
        fontSize: 25
      }}> Tela dos botões para navegação</Text>
      <Button
        title='Para: TelaA'
        onPress={() => navigation.push('TelaA')}
      />
      <Button
        title='Para: TelaB'
        onPress={() => navigation.push('TelaB')}
      />
      <Button
        title='Para: TelaC'
        onPress={() => navigation.push('TelaC')}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();

function TelaStack() {
  return (
    <Stack.Navigator initialRouteName='Principal'
      scrennOptions={{headerShow: false}}>
      <Stack.Screen
        name='Principal'
        component={TelaPrincipal} />

      <Stack.Screen
        name='Detalhes'
        component={TelaDescricao} />

      <Stack.Screen
        name='TelaA'
        options={{title: 'Tela A'}}>
        {comp => (
          <PassoStack {...comp} avancar ='TelaB'>
            <TelaA/>
          </PassoStack>
        )}
      </Stack.Screen>

      <Stack.Screen
        name='TelaB'
        options={{title: 'Tela B'}}
        component={TelaB} />

      <Stack.Screen
        name='TelaC'
        options={{title: 'Tela C'}}
        component={TelaC} />
      </Stack.Navigator>
  )
}

export default function AppFinal(){
  return (
    <NavigationContainer>
      <TelaStack/>
    </NavigationContainer>
  );
}