import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class componentName extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          details: []
        }

        console.log('Contructor',this.props.details);
    
        // AsyncStorage.getItem('@resources:idHas').then((valor) => {
        //   var array = JSON.parse(valor);
        //   this.setState({
        //     idHas: array.id,
        //     hashtag: array.hashtag
        //   });
          
        // }).catch((error)=> console.log(error));
    
      }
    render() {
        return (
            <View>
                <Text> Hola componente detalle </Text>
            </View>
        )
  }
}