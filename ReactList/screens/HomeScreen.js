import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';


export default class HomeScreen extends React.Component {

    constructor() {
        super()
        this.state = { data: [], };
    }

    componentWillMount() {

    }

    fetchData = () => {
        fetch('https://facebook.github.io/react-native/movies.json')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.movies,
                });
            })
            .catch(error => {
                alert("dsd")
            });
    }
    componentDidMount() {
        this.fetchData();
    }


    onPress = ({ item }) => {
        const { navigate } = this.props.navigation;
        navigate('Details', { item });
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.onPress({ item })}>
                <Text style={{ backgroundColor: '#f4f4ff', padding: 10, margin: 5, color: 'green' }}>{item.title}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}