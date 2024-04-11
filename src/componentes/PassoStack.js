import React from 'react'
import {View, Button, SafeAreaView} from 'react-native'

export default comp => (
  <SafeAreaView style={{flexGrow: 1}}>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
      {comp.avancar
        ? <Button title='Avançar'
          onPress={() => {
            comp.navigation.navigate(comp.avancar)
          }} />
        : false
      }
      {comp.voltar
        ? <Button title='Voltar'
            onPress={() => {
              comp.navigation.goBack()
            }
            } />
        : false
      }
    </View>
    <View style={{flex: 1}}>
      {comp.children}
    </View>
  </SafeAreaView>
)