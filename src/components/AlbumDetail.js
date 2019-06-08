import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    //parameter is destructured, we are taking album key from prop 

    //this line destructures title, artist, thumbnail_image from album 
    const { title, artist, thumbnail_image, image } = album;
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, albumCoverStyle } = styles;
    console.log(title);
    return (
        <Card>
            <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
            </View>

            <View style={headerContentStyle} >
                <Text style={headerTextStyle}> { title } </Text>
                <Text> { artist } </Text>
            </View>
            </CardSection>


            <CardSection>
                <Image style={albumCoverStyle} source={{ uri: image }} />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 16
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        // justifyContent: 'center',
        // alignItems: 'center',
        margin: 5,
        padding: 5
    },
    albumCoverStyle: {
        height: 300,
        flex: 1,
        width: null
    },
};


export default AlbumDetail;
