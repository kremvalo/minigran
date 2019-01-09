import styled from 'styled-components/native';

export const Titulo = styled.Text`
    color: #fff;
    fontSize: 40px;
    fontWeight: bold;
    alignItems: center;
`;

export const ContenedorTitulo = styled.View`
    flex: 2;
    margin: -20px;
    padding: 10px;
    background-color: #7DE2BA; 
    alignItems: center;
    justifyContent: center;
    flexDirection: row;
`;

export const ContenedorTituloMini = styled.View`
    padding-top: 20px;
    alignItems: center;
`;

export const ImageIcon = styled.Image`
    width:40px;
    height:40px;
    margin-right: 70px;
    margin-top: 20px;
    marginLeft: -100px;
`;

export const ContenedorImagenes = styled.View`
    flex:10;
`;

export const ImagePost = styled.Image`
    width: 120px;
    height: 120px;
    margin:5px;
    border-radius: 7px;
`;
