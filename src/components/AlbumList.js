import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    //class based component - more complex/ can fetch data from server etc
    
    //initial state;  when data will be fetched, this state will be updated 
    //and it will render UI
    state = { albums: [] } //use setState(key:value) to set later

    componentWillMount() {
        //lifecycle callback, 
        //when this component is about to be rendered this method is called just before that
        console.log('componentWillMount called');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
                // console.log(response);
                this.setState({ albums: response.data });
            }
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>AlbumList!!</Text>
            </View>
        );
    }
}


export default AlbumList;
