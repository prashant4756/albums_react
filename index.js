// import libraries
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// testing
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerTitle={'Albums'} />
		<AlbumList />
	</View>
);

// render component
AppRegistry.registerComponent('albums', () => App);
