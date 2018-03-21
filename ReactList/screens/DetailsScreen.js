import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default class DetailsScreen extends React.Component {

    constructor(props){
        super(props);
        const { params } = this.props.navigation.state;
        this.state={
           item : params.item,
        }
    }

    render() {
        return (
            <View>
                <Text style={{backgroundColor:'blue', color:'white', padding:10}}>Name : {this.state.item.title}</Text>
                <Text style={{backgroundColor:'#f4f4f5', color:'black', padding:10}}>Year : {this.state.item.releaseYear}</Text>
            </View>
        );
    }
}