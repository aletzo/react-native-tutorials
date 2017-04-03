import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View
} from 'react-native';

export default class Component3 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            switchValue: false,
            textValue: 'test text'
        }
    }

    onChangeText(value) {

console.log('inside onChangeText');
        this.setState({
            textValue: value
        })
        
    }

    onSubmitEditing() {

console.log('inside onSubmitEditing');

    }

    onValueChange(value) {
        this.setState({
            switchValue: value
        })
    }

    render() {
        return(
            <View>
                <Text>Component 3</Text>
                <TextInput
                    placeholder="Enter text"
                    value={this.state.textValue}
                    onChangeText={(value) => this.onChangeText(value)}
                    onSubmitEditing={this.onSubmitEditing}
                />
                <Text>{this.state.textValue}</Text>
                <Switch
                    value={this.state.switchValue}
                    onValueChange={(value) => this.onValueChange(value)}
                />
            </View>
        );
    }

}

AppRegistry.registerComponent('Component3', () => Component3);

