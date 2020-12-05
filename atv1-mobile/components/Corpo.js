import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Corpo extends Component{
    render(){
    return(<Image source = {require('../assets/Lizzo.jpg')} style = {{width: 193, height: 110}}/>);
    }
}