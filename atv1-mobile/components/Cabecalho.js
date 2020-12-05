import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Cabecalho extends Component{
    render(){
        return (
        <Text>Aluno: {this.props.nome} <br></br>
        Curso: {this.props.curso}</Text>
        );
    }
}