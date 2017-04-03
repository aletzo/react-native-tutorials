import React, { Component } from 'react';
import { 
    AppRegistry,
    ListView,
    StyleSheet,
    Text,
    View
} from 'react-native';

const users = [
    { name: 'user1' },
    { name: 'user2' },
    { name: 'user3' },
    { name: 'user4' },
    { name: 'user5' },
    { name: 'user6' },
    { name: 'user7' },
    { name: 'user8' },
    { name: 'user9' },
    { name: 'user10' }
];

export default class Component4 extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(users),
        };
    }

    renderRow(user, sectionId, rowId, highlightRow) {
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}</Text>
            </View>
        );
    }

    render() {
        return(
            <View>
                <View>
                    <Text>Component 4</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 100,
        backgroundColor: '#fafafa',
    },
    rowText: {
        flex: 1
    }
});

AppRegistry.registerComponent('Component4', () => Component4);

