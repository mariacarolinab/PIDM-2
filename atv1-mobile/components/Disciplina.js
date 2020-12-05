import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Disciplina extends Component{
    render(){
        return(<Text>Disciplina: {this.props.disciplina}</Text>);
    }
}