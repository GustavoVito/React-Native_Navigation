import React from 'react'
import {View, Button} from 'react-native'

export default comp => (
  <View style={{flex: 1}}>
    <View>
      {comp.avancar
        ? <Button title='Avançar'
          onPress={() => {
            comp.navigation.navigate(comp.avancar)
          }} />
        : false
      }
    </View>
    <View style={{flex: 1}}>
      {comp.children}
    </View>
  </View>
)