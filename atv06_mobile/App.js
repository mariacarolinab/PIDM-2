import React, { Component } from 'react'
import {View} from 'react-native'
import FirebaseApp from './componentes/FirebaseApp'

export class App extends Component {
  render() {
    return (
      <View>
        <FirebaseApp></FirebaseApp>
      </View>
    )
  }
}

export default App
