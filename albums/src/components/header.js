// import a library to help create a component
import React from 'react';
// import { Text } from 'react-native';
import { Text, View } from 'react-native';//////view is used to get the view deminsions
// create a component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>Albums</Text>
    </View>
  );
};

const styles = {
  viewStyle:{
    backgroundColor: 'red'
  },
  textStyle: {
    fontSize: 20
  }
};
////make component available to other parts of the App
export default Header;
