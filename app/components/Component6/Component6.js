import React, { Component } from 'react';
import { 
    AppRegistry,
    Button,
    Text,
    View
} from 'react-native';

export default class Component6 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        }
    }

    onPress() {
        this.props.navigator.push({
            page: 'Component5'
        });
    }

    render() {
        return(
            <View>
                <View>
                    <Text>Component 6</Text>
                </View>
                <View>
                    <Text>{this.state.user.name}</Text>
                    <Text>{this.state.user.email}</Text>
                </View>
                <View>
                    <Button
                        onPress={this.onPress.bind(this)}
                        title="Back"
                    />
                </View>
            </View>
        );
    }

}

AppRegistry.registerComponent('Component6', () => Component6);

