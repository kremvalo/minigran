import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './src/screens/search/Search';
import Postlist from './src/screens/postlist/Postlist';



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
        {/* <Postlist></Postlist> */}
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
