import React, { Component } from 'react'
import { Text, View, AsyncStorage, FlatList, Image, TouchableHighlight } from 'react-native'
import api from '../../services/api/';
import { Titulo, ContenedorTitulo, ContenedorImagenes, ContenedorTituloMini, ImagePost,ImageIcon } from '../postlist/style';
import { Icon } from 'react-native-elements';
import { __values } from 'tslib';

const numColumns = 3;

export default class Postlist extends Component {

  constructor(props){
    super(props);

    this.state = {
      idHas: '',
      posts: [],
      hashtag: ''
    }

    AsyncStorage.getItem('@resources:idHas').then((valor) => {
      var array = JSON.parse(valor);
      this.setState({
        idHas: array.id,
        hashtag: array.hashtag
      });
      
    }).catch((error)=> console.log(error));

  }

  async traerListaPosts (idHas){
    const resp = await api.obtenerListaPosts(idHas);
    return resp;
  }

  cargaPosts = () => {
    this.traerListaPosts(this.state.idHas).then((valor) => {
       this.setState({
          posts: valor.data.filter( x => x.media_type === 'IMAGE')
       })
    }).catch((error)=> console.log(error));
  }

  presionando = (id) =>{
    console.log('Pasa antes',id)
  }

    renderItem = ({ item, index }) => {
      return(
        <TouchableHighlight 
          onPress={() => this.presionando(item)} >
          <ImagePost source={{uri: `${item.media_url}`}} ></ImagePost>
        </TouchableHighlight>
      );
  };

  render() {
    if (this.state.idHas != ''){
      this.cargaPosts();
      return (
        <View>
          <ContenedorTitulo>
            <ContenedorTituloMini>
              <ImageIcon source={require('../../../assets/left-arrow.png')}></ImageIcon>
              <Titulo>
                {`#${this.state.hashtag}`}
              </Titulo>
            </ContenedorTituloMini>
          </ContenedorTitulo>
          <ContenedorImagenes>
            <FlatList
              data={this.state.posts}
              renderItem={this.renderItem}
              numColumns={numColumns}
              keyExtractor={(item,index) => item.id}
            />
          </ContenedorImagenes>
        </View>
      )
    }
    return (
      <View>
        <Text> No hay datos </Text>
      </View>
    )

  }
}
