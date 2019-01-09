import React from 'react';
import { StyleSheet, View } from 'react-native';
import Search from './src/screens/search/Search';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      idHas: ""
    }
  }

  render() {    
    return (
      <View style={styles.container}>
        <Search></Search>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
