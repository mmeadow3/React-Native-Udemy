import React, { Component } from 'react';
import { View, Text } from 'react-native';

////////////////////This is a class functional component
///so we need to make class components for better functionality
// const AlbumList = () => {
//   return (
//     <View>
//       <Text>List</Text>
//     </View>
//   );
// };
class AlbumList extends Component {
  componentWillMount() {
    //////cmd + d = bring up debugger
    console.log('mounting');
  }

  render() {
    return (
      <View>
        <Text>List</Text>
      </View>
    );
  }
}

export default AlbumList;
