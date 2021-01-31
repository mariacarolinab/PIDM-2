  
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { style } from './style'

export class Perfil extends Component {
    render() {
        return (
            <View style={style.container}>
                <Image style={{height:150, width:150, margin: 10}} source={{uri: "https://i0.wp.com/glowstreamtv.com/wp-content/uploads/2020/12/lizzo-juice-box.jpeg?fit=300%2C300&ssl=1"}}/>

                <Text>
                    Nome: {this.props.route.params.nome}
                </Text>
                <Text>
                    Idade: {this.props.route.params.nome}
                </Text>
                <Text>
                    Email: {this.props.route.params.email}
                </Text>

                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.navigate('Home')}>
                    <Text style={style.buttonText}>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Perfil