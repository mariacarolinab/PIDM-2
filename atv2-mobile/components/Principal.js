import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'


export default class Principal extends Component {
    constructor(props){
        super(props)

        this.state = {
            fortaleza: 0,
            quixada: 0,
            limoeiro: 0,
            juazeiro: 0,
            maisVotada: "",
            menosVotada: ""
        }
        this.votar = this.votar.bind(this);
        this.atualizar = this.atualizar.bind(this);
    }

    atualizar(){
        let maisVotada = Math.max(...[
            this.state.fortaleza,
            this.state.quixada,
            this.state.limoeiro,
            this.state.juazeiro,
        ]);
        let menosVotada = Math.min(...[
            this.state.fortaleza,
            this.state.quixada,
            this.state.limoeiro,
            this.state.juazeiro,
        ]);        
        console.log(menosVotada)
        console.log(maisVotada)

        let arrayMaisVotada = ""
        let arrayMenosVotada = ""

        switch(this.state.fortaleza){
            case maisVotada:
                arrayMaisVotada += ', Fortaleza';
                break;
            case menosVotatada:
                arrayMenosVotada+= ', Fortaleza';
                break;
        }

        switch(this.state.quixada){
            case maisVotada:
                arrayMaisVotada += ', Quixadá';
                break;
            case menosVotada:
                arrayMenosVotada += ', Quixadá';
                break;
        }

        switch(this.state.limoeiro){
            case maisVotada:
                arrayMaisVotada += ', Limoeiro do Norte';
                break;
            case menosVotada:
                arrayMenosVotada += ', Limoeiro do Norte';
                break;
        }

        switch(this.state.juazeiro){
            case maisVotada:
                arrayMaisVotada += ', Juazeiro';
                break;
            case menosVotada:
                arrayMenosVotada += ', Juazeiro';
                break;
        }

        arrayMenosVotada = arrayMenosVotada.substring(2);        
        arrayMaisVotada = arrayMaisVotada.substring(2);

        console.log(arrayMenosVotada)
        console.log(arrayMaisVotada)

        this.setState({
            maisVotada: arrayMaisVotada,
            menosVotada: arrayMenosVotada
        });        
    }

    votar(nomeCidade){
        
            
        switch(nomeCidade) {
            case 'fortaleza':
                this.setState({fortaleza: this.state.fortaleza + 1}, this.atualizar)
              break;
            case 'quixada':
                this.setState({quixada: this.state.quixada + 1}, this.atualizar)
              break;
            case 'limoeiro':
                this.setState({limoeiro: this.state.limoeiro + 1}, this.atualizar)
                break;
            case 'juazeiro':
                this.setState({juazeiro: this.state.juazeiro + 1}, this.atualizar)
                break;
            default:
        }
    }

    render(){
        return(
            <View>              
                <Text>
                    <Text >VOTAÇÃO DE CIDADES</Text>
                    {'\n'}
                    Fortaleza: {this.state.fortaleza} votos
                    {'\n'}
                    Quixadá: {this.state.quixada} votos
                    {'\n'}
                    Limoeiro do Norte: {this.state.limoeiro} votos
                    {'\n'}
                    Juazeiro: {this.state.juazeiro} votos
                    {'\n'}{'\n'}

                    MAIS VOTADA: {this.state.maisVotada}
                    {'\n'}
                    MENOS VOTADA: {this.state.menosVotada}

                </Text> 

                <View>
                    <Button
                        title='Fortaleza'
                        onPress={()=> this.votar('fortaleza')}
                    />
                    <Button                        
                        title='Quixadá'
                        onPress={()=> this.votar('quixada')}
                    />
                    <Button                        
                        title='Limoeiro do Norte'
                        onPress={()=> this.votar('limoeiro')}
                    />
                    <Button                        
                        title='Juazeiro'
                        onPress={()=> this.votar('juazeiro')}
                    />
                </View>
            </View>
        )
    }
}
