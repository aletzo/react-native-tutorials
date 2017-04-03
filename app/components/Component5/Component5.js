import React, { Component } from 'react';
import { 
    AppRegistry,
    Button,
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

export default class Component5 extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds
        };
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(response)
                })
            })
    }

    goToCameraPage() {
        this.props.navigator.push({
            page: 'CameraPage'
        });
    }

    onPress(user) {
        this.props.navigator.push({
            page: 'Component6',
            user: user
        });

        console.log('user: ', user);
    }

    renderRow(user, sectionId, rowId, highlightRow) {
        return(
            <TouchableHighlight
                onPress={() => this.onPress(user)}
            >
                <View style={styles.row}>
                    <Text style={styles.rowText}>{user.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return(
            <View>
                <View>
                    <Text>Component 5</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
                <View>
                    <Button
                        onPress={this.goToCameraPage.bind(this)}
                        title="Camera"
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fafafa'
    },
    rowText: {
        flex: 1
    }
});

AppRegistry.registerComponent('Component5', () => Component5);

