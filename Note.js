import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import DataManager from './DataManager';

// Import and initialize DataManager: which is a wrapper class around AsyncStorage
var data = new DataManager();

export default class Note extends Component{
    // state = {
    //     note: "",
    //     course: "3MX3",
    // }

    constructor(props){
        super(props);
        this.state = {
            note: "",
            course: "3MX3",
            key: this.props.key,
        }
    }

    /*
        @brief get M&M from the user, assign it to state and save it to local storage
        @params text: String -> M&M obtained from textInput
    */
    handleInput = (text) => {
        this.setState({note:text});
        // console.log("Text is: " + text);
        //TODO: Don't forget to store new/modified M&M to local storage
    }

    /*
        @brief load M&M from the local storage if it is already existing with the key provided by App.js via props
    */
    getNote(){
        var value = data.getString(this.props.key);
        console.log('getNote -> key is: ' + this.props.key);
        if (value != null){
            this.setState({note: value});
        }else{
            this.setState({note: ''});
            console.log('getNote -> Could not load note from local storage!');
        }
    }

    render(){

        //this.state, this.props eliminaters
        const {note, course} = this.state;

        //TODO: get M&M from local storage and assign it to state.note if exist based on the id of the TextInput which will be passed as prop from App.js
        // this.getNote();

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