// import libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
// testing
const App = () => (
	//component nesting
	<Header headerTitle={'Albums'} />
);

// render component
AppRegistry.registerComponent('albums', () => App);
