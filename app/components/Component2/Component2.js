import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

export default class Component2 extends Component {

    constructor(props) {
        super(props);
    }

    onPress() {
        console.log('inside onPress');
    }

    onPress2() {
        console.log('inside onPress2');
    }

    render() {
        return(
            <View>
                <View style={styles.view}>
                    <Text style={styles.text}>This is Component2</Text>
                </View>
                <View>
                    <View style={styles.container}>
                        <TouchableHighlight
                            onPress={this.onPress}
                            style={styles.v1}
                            underlayColor="blue"
                        >
                            <View>
                                <Text>View 1</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableOpacity 
                            onPress={this.onPress2}
                            style={styles.v2}
                        >
                            <View>
                                <Text>View 2</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.v3}>
                            <Text style={styles.t3}>View 3</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100
    },

    text: {
        color: 'green'
    },

    t3: {
        color: 'white'
    },

    view: {
        backgroundColor: 'red'
    },

    v1: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10
    },

    v2: {
        flex: 1,
        backgroundColor: 'orange',
        padding: 10
    },

    v3: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 10
    },

    
});

AppRegistry.registerComponent('Component2', () => Component2);

