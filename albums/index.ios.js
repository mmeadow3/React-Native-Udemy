// import a library to help create a component
import React from 'react';
// import { Text, AppRegistry } from 'react-native';      /////// Removed Text from import
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// create a component
////////////adding the view tag makes it so the APP is only returning one value
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);
////render the component to the device
AppRegistry.registerComponent('albums', () => App);
