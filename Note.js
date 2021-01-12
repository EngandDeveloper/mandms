import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import DataManager from './DataManager';

// Import and initialize DataManager: which is a wrapper class around AsyncStorage
var data = new DataManager();

export default class Note extends Component{
    state = {
        note: "",
        course: "3MX3",
    }

    handleInput = (text) => {
        this.setState({note:text});
        // console.log("Text is: " + text);
    }

    render(){

        //this.state, this.props eliminaters
        const {note, course} = this.state;

        //TODO: get M&M from local storage and assign it to state.note if exist based on the id of the TextInput which will be passed as prop from App.js

        return(
            <>
            <Text>Course: {course}</Text>
            {/* Get M&M via TextInput and change note state */}
            <TextInput
                style={{backgroundColor: "lightblue"}}
                placeholder="Enter Your M&Ms"
                onChangeText={text => this.handleInput(text)}
                value={note}
                multiline={true}
            />
            </>
        );
    }
}