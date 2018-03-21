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
                <Text>{this.state.item.title}</Text>
                <Text>{this.state.item.releaseYear}</Text>
            </View>
        );
    }
}