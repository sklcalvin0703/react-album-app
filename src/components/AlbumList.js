import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// const AlbumList = () => { //functional componet
//     return (
//         <View> 
//             <Text>Album List!</Text>    
//         </View>
//     );
// };

//class-based component
class AlbumList extends Component {
    state = { albums: [] }; //have a property call this.state will be set to an empty obj

    //lifecycle component
    componentWillMount() { //call automatically
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => {
            this.setState({ 
                albums: response.data[1]
            });
            console.log(this.state.albums);
        });
    }
    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />
            );
    }


    render() { //return some amount of JSX
    return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
        );
    }
}


export default AlbumList;

//states
//a plain javascript object used to record and respond to user-triggered events (user lanuched the app)

//props
//communicate from parents to child
