// import a library to help create a component
import React from 'react';
// import { Text, AppRegistry } from 'react-native';      /////// Removed Text from import
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
// create a component
const App = () => (<Header />);
////render the component to the device
AppRegistry.registerComponent('albums', () => App);
