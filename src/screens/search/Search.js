import React, { Component } from 'react'
import { StyleSheet,Text, View, Button, AsyncStorage } from 'react-native'
import {
    TextStyled, 
    TextInstrucciones,
    ContainerView, 
    ContainerForm, 
    ContainerButton,
    SearchBoxField
  } from './style';
import LottieView from 'lottie-react-native';
// import buscarIdHashtag from '../../services/api/';
import api from '../../services/api/';
import Postlist from '../postlist/Postlist';


export class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:"",
      idHas: "",
      loaded: true
    }
  }

  async fetchFeed(palabra){

    let response = await fetch(`https://graph.facebook.com/v3.2/ig_hashtag_search?access_token=EAAFeEU2SklMBAG5YbavZAXqYuCjsZCFnHin5S5xhWUOwHuZCfFM53VvFaPPxMFcc9ZBw3donULyEfAfbuu0NuIRyn5wTD908GZByMn3TgO6ZCG3HzxZA6439AVvdT2rJyG8zFT8omLwopiWCrB13j6ky1JenPpfbKUsIV7n2Ai9pbYMbx2yVq25RPxl5kZBMOqIZD&user_id=17841401776702742&q=${palabra}`)
    let ids = await response.json()
    // console.log(ids);
    //Parte BUENA
    // const id = await api.buscarIdHashtag(palabra)
    return ids.data;
  }

  buscar = () => {
    // const resp = this.fetchFeed(this.state.data)
     const resp = this.fetchFeed(this.state.data)
     resp.then(data => {
      // this.setState({  idHas: '17841562822081458'})
      this.setState({  idHas: data[0].id})
      var array = {key:1,id: `${data[0].id}`, hashtag: this.state.data};
      AsyncStorage.setItem('@resources:idHas',JSON.stringify(array)).catch((error)=> console.log(error))
    }).catch((error)=> console.log(error));
     
      // AsyncStorage.setItem('@resourcesk:idHas','17841562822081458').catch((error)=> console.log(error))
   
  }

  render() {
       return (
        <View>
          {this.state.idHas === '' ? 
            <View>
              <ContainerView>
                  <LottieView 
                    source={require('../../../assets/ball_buliding.json')}
                    autoPlay
                    loop
                  />
              </ContainerView>
              <ContainerForm>
              <TextStyled>¡Hola!</TextStyled>
              <TextInstrucciones>Escriba un #hashtag por el cual quiera ver contenido de instagram</TextInstrucciones>
              <SearchBoxField
                onChangeText = {(text) => this.setState({ data : text }) }
                value = {this.state.data}
              />
              <ContainerButton>
                <Button
                  title='Buscar'
                  activeOpacity={0.7}
                  onPress = {() => this.buscar()}
                  color='#7DE2BA' 
                />
              </ContainerButton>
            </ContainerForm>
            </View>
          :  
            <Postlist>
            </Postlist>
          }
          
        </View>
    )
  }
}


export default Search