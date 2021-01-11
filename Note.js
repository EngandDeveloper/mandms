import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import * as SQLite from 'expo-sqlite';

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