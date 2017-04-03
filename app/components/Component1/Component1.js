import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Component1 extends Component {

    static defaultProps = {
        type: 'Android'
    }

    constructor(props) {
        super(props);

        this.state = {
            name: 'ajo',
            showName: false,
            type: this.props.type
        }
    }

    render() {
        let name = this.state.showName
                   ? this.state.name
                   : 'no name'
        return(
            <View>
                <Text>This is Component1 for {this.state.type}</Text>
                <Text>from {name}</Text>
            </View>
        );
    }

}

AppRegistry.registerComponent('Component1', () => Component1);

