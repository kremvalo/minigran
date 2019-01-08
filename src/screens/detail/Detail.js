import React, { Component } from 'react'
import { Text, View, Image, Button, Linking } from 'react-native'
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
import LottieView from 'lottie-react-native';

export default class Detail extends Component {
    constructor(props){
        super(props);
    }


    render() {
       
        if(!this.props.verDetalle){
           <View>
               <Text>No hay datos</Text>
           </View>
        }
        const ary = Object.keys(this.props.verDetalle).map((key) => [key,this.props.verDetalle[key]])
        return(
            
            <Contenedor>
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
                <ImagePost source={{uri: `${ary[2][1]}`}}></ImagePost>
                <ContenedorContadoresBg>
                    <ContenedorContadores>
                        <LottieView 
                            style = {{width:30,height:30,marginLeft:5,marginTop:-5}}
                            source={require('../../../assets/like.json')}
                            autoPlay
                            loop
                        />
                        <TextNumber>{` ${ary[4][1]}`}</TextNumber>
                    </ContenedorContadores>
                    <ContenedorContadores>
                        <LottieView 
                            style = {{width:30,height:30,marginRight:5}}
                            source={require('../../../assets/comment.json')}
                            autoPlay
                            loop
                        />
                        <TextNumber>{` ${ary[5][1]}`}</TextNumber>
                    </ContenedorContadores>
                </ContenedorContadoresBg>
                <ContenedorCaption>
                    <TextoCaption>{`${ary[3][1]}`}</TextoCaption>
                </ContenedorCaption>
                <ContainerButtoninsta>
                    <Button color='#7DE2BA' title='Ir a instagram' onPress={() => (Linking.openURL(`${ary[6][1]}`).catch(err => console.error('An error occurred', err)))}></Button>
                </ContainerButtoninsta>
            </Contenedor>
        );
        // return (
        //     <View>
        //             {Object.keys(this.props.verDetalle).map((key,index) => <Text key={index}>{this.props.verDetalle[key]}</Text>)}
        //     </View>
        // )
  }
}