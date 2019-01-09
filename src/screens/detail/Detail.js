import React, { Component } from 'react';
import { Text, View, Button, Linking, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import {
  Contenedor,
  ContainerButtoninsta,
  ContenedorCaption,
  ContenedorContadores,
  ContenedorContadoresBg,
  TextoCaption,
  TextNumber,
  ImagePost,
} from './style';
import PropTypes from 'prop-types';

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes(){
    return{
      children: PropTypes.any,
      verDetalle: PropTypes.any,
      cargarHashtag: PropTypes.string
    }
  }

  componentDidUpdate(){
    
  }

  render() {

    if (!this.props.verDetalle) {
      <View>
        <Text>No hay datos</Text>
      </View>;
    }
    
    const item = this.props.verDetalle.item

    return (
      <Contenedor style={{marginTop:-30}}>
        <ScrollView>
          <ImagePost source={{ uri: `${item.media_url}` }} />
          <ContenedorContadoresBg>
            <ContenedorContadores>
              <LottieView
                  style={{
                      width: 30, height: 30, marginLeft: -7, marginTop: -5,
                    }}
                  source={require('../../../assets/like.json')}
                  autoPlay
                  loop
                  />
              <TextNumber>{` ${item.like_count}`}</TextNumber>
            </ContenedorContadores>
            <ContenedorContadores>
              <LottieView
                  style={{ width: 30, height: 30, marginRight: 5 }}
                  source={require('../../../assets/comment.json')}
                  autoPlay
                  loop
                  />
              <TextNumber>{` ${item.comments_count}`}</TextNumber>
            </ContenedorContadores>
          </ContenedorContadoresBg>
          <ContenedorCaption>
              <TextoCaption>{`${item.caption}`}</TextoCaption>
          </ContenedorCaption>
          <ContainerButtoninsta>
            <Button color="#7DE2BA" title="Ir a instagram" onPress={() => (Linking.openURL(`${item.permalink}`).catch(err => alert('An error occurred', err)))} />
          </ContainerButtoninsta>
        </ScrollView>
      </Contenedor>
    );
  }
}
