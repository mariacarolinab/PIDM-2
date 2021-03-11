import React, { Component } from 'react'
import {View, Text} from 'react-native'

import firestore from '@react-native-firebase/firestore'

export class FirebaseApp extends Component {

    constructor(props){
        super(props)
        this.getUser()
        this.state = {aluno : ''}
    }

    getUser = async () => { 
        const userDocument = await firestore().collection('alunosUFC')
        .doc('hwyf0cF2UTFRF38ilzXb') 
        .get();
        this.setState({aluno: userDocument._data.nome})
    }

    render() {
        return (
            <View style = {{justifyContent:'center', alignItems:'center', flex: 1}}>
                <Text style={{fontSize:25}}>
                    {this.setState.aluno}
                </Text>
            </View>
        )
    }
}

export default FirebaseApp
