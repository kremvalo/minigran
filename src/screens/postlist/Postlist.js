import React, { Component } from 'react'
import { Text, View, FlatList, Image, TouchableHighlight } from 'react-native'
import api from '../../services/api/';
import { Titulo, ContenedorTitulo, ContenedorImagenes, ContenedorTituloMini, ImagePost,ImageIcon } from '../postlist/style';
import Detail from '../detail/Detail';

const numColumns = 3;

export default class Postlist extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts: [],
      mustraDetalle: false,
      detalle:[]
    }
  }

  async traerListaPosts (){
    const resp = await api.obtenerListaPosts(this.props.verPost);
    return resp;
  }

  cargaPosts = () => {
    this.traerListaPosts().then((valor) => {
       this.setState({
          posts: valor.data.filter( x => x.media_type === 'IMAGE')
       })
    }).catch((error)=> console.log(error));
  }

  verDetallePosts = (item) =>{
    this.setState({
      mustraDetalle: true,
      detalle: item
    });
  }

  atras = () =>{
    console.log('Dentro de atras');
      
  }

    renderItem = ({ item, index }) => {
      return(
        <TouchableHighlight 
          onPress={() => this.verDetallePosts(item)} >
          <ImagePost source={{uri: `${item.media_url}`}} ></ImagePost>
        </TouchableHighlight>
      );
  };

  render() {
    if (this.props.verPost != ''){
      if(this.state.mustraDetalle){
        return(
          <View>
            <Detail verDetalle={this.state.detalle}></Detail>
          </View>
        );
      }else{
        this.cargaPosts();
        return (
          <View>
            <ContenedorTitulo>
              <TouchableHighlight onPress={()=>this.atras}>
                <ImageIcon source={require('../../../assets/left-arrow.png')}></ImageIcon>
              </TouchableHighlight>
              <ContenedorTituloMini>
                <Titulo>
                  {`#${this.props.cargarHashtag}`}
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
    }
    return (
      <View>
        <Text> No hay datos </Text>
      </View>
    )

  }
}
