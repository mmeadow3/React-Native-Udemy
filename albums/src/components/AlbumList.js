import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

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
  state = { albums: [] };//////////initial delcaration at start of load

  componentWillMount() {
    //////cmd + d = bring up debugger
    console.log('mounting');
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // .then(response => console.log(response));
    .then(response => this.setState({ albums: response.data }));//////set state will fire when (this.state) changes
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{ album.title }</Text>);
  }

  render() {
    console.log(this.state);
    return (
      <View>
        { this.renderAlbums() }
      </View>
    );
  }
}

export default AlbumList;
