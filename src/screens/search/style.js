import styled from 'styled-components/native';

export const TextStyled = styled.Text`
  font-size: 45px;
  color: #7DE2BA;
  font-weight: bold;
`;

export const TextInstrucciones = styled.Text`
  font-size: 20px;
  color: #c5c5c5;
  font-weight: bold;
`;

export const ContainerView = styled.View`
  background-color: #7DE2BA; 
  flex:1
`; 

export const ContainerForm =  styled.View`
  flex:2
  padding:20px;
`; 

export const ContainerButton=  styled.View`
  flex:3
  padding:0px 45px;
`; 

export const SearchBoxField = styled.TextInput`
  font-size: 26px;
  padding: 16px;
  border-width: 2px;
  border-color: #7DE2BA;
  border-radius: 50px;
  margin: 20px;
`;