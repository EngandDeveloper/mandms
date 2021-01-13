import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Note from './Note';
import DataManager from './DataManager';

// Import and initialize DataManager: which is a wrapper class around AsyncStorage
var data = new DataManager();

export default class App extends Component {

  state = {
    numberOfNotes: 0,
  }

  //TODO: store number of M&Ms in local storage, make a loop based on that number and pass key to Note via props to used as a local storage key

  /*
    @brief get numberOfNotes from local storage and setState
  */
  initialize(){
    this.setState({numberOfNotes: parseInt(data.getString('numberOfNotes'), 10)});
  }

  render(){
    this.initialize();
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />
        {/* Default code ends */}

        <Note key='1'/>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
