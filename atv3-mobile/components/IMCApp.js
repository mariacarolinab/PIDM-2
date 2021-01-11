import React, { Component } from 'react'
import { StyleSheet, Button, Text, TextInput, View } from 'react-native'
import IMCCalc from './IMCCalc'

export default class IMCApp extends Component {
    
    constructor(props){
        super(props)
            this.state = {peso:null, altura: null}
    }
    
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Peso: {this.state.peso}</Text>
                <Text style={styles.headerText}>Altura: {this.state.altura}</Text>
                
                <TextInput style={styles.textInput} placeholder = 'Digite seu peso'
                onChangeText={
                    (meuPeso) => {
                        this.setState({peso:meuPeso})
                    }

                }>
                </TextInput>

                <TextInput style={styles.textInput} placeholder = 'Digite sua altura'
                onChangeText={
                    (minhaAltura) => {
                        this.setState({altura:minhaAltura})
                    }

                }></TextInput>

                <IMCCalc peso = {this.state.peso} altura = {this.state.altura}></IMCCalc>

                <Button title="aperte para começar"style={styles.viewButton}>oi</Button>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#e5e5e5"
    }, 
    
    headerText : {
        fontSize:20,
        textAlign:"center",
        margin:10,
        fontWeight:"bold"
    }, 
    
    textInput : {
        height:45,
        width:"95%",
        borderColor:"gray",
        borderWidth:2,
        paddingLeft:20
    }, 

    viewButton : {
        width:"93%",
        margin:15,
        backgroundColor:"red"
    }
});
