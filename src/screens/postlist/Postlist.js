import React, { Component } from 'react'
import { Text, View, FlatList, TouchableHighlight } from 'react-native'
import api from '../../services/api/';
import { 
  Titulo, 
  ContenedorTitulo, 
  ContenedorImagenes, 
  ContenedorTituloMini, 
  ImagePost,
  ImageIcon 
} from '../postlist/style';
import Detail from '../detail/Detail';
import PropTypes from 'prop-types';

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

  static get propTypes(){
    return{
      children: PropTypes.any,
      verPost: PropTypes.string,
      cargarHashtag: PropTypes.string
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
    }).catch((error)=> alert(error));
  }

  verDetallePosts = (item) =>{
    this.setState({
      mustraDetalle: true,
      detalle: item
    });
  }

  atras = () =>{
    alert('Hola');
  }

  componentDidMount(){
    this.cargaPosts();
  }

  renderItem = ( item ) => {
      return(
        <TouchableHighlight 
          onPress={() => this.verDetallePosts(item)} >
          <ImagePost  source={{uri: `${item.item.media_url}`}} ></ImagePost>
        </TouchableHighlight>
      );
  };

  render() {
    if (this.props.verPost != ''){
      return(
        <View>
          <ContenedorTitulo>
              <ImageIcon source={require('../../../assets/left-arrow.png')}></ImageIcon>
              <ContenedorTituloMini>
                <Titulo>
                  {`#${this.props.cargarHashtag}`}
                </Titulo>
              </ContenedorTituloMini>
            </ContenedorTitulo>
          {
            this.state.mustraDetalle === true ? 
            <Detail verDetalle={this.state.detalle} cargarHashtag={this.props.cargarHashtag}></Detail> 
            : 
            <ContenedorImagenes>
              <FlatList 
                data={this.state.posts} 
                renderItem={this.renderItem} 
                numColumns={numColumns} 
                keyExtractor={(item) => item.id} 
              /> 
            </ContenedorImagenes>
          }
        </View>
      );
    }
    return (
      <View>
        <Text> No hay datos </Text>
      </View>
    )

  }
}
