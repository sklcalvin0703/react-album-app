//render this to the screen

//Import a lib
import React from 'react'; //knows how a component should behave
import { AppRegistry, View } from 'react-native';
//knows how to take the output from a component and place it on the screen
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


//Create a component
const App = () => { //write JSX similar to HTML
    return (
        //JSX - easily to write JS
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};

//Render it to the device
AppRegistry.registerComponent('albums', () => App);