import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import CameraPage from './app/components/CameraPage/CameraPage';
import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';
import PhotoEdit from './app/components/PhotoEdit/PhotoEdit';

export default class myapp extends Component {

    renderScene(route, navigator) {
        switch (route.page) {

            case 'CameraPage':
                return (<CameraPage navigator={navigator} title="camera" />)

            case 'Component5':
                return (<Component5 navigator={navigator} title="users" />)

            case 'Component6':
                return (<Component6 navigator={navigator} title="user" user={route.user} />)

            case 'PhotoEdit':
                return (<PhotoEdit navigator={navigator} title="photo" image={route.image} />)

        }
    }

    render() {
        return(
            <Navigator
                initialRoute={{page: 'Component5'}}
                renderScene={this.renderScene}
                configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
            />
        );
    }

}

AppRegistry.registerComponent('myapp', () => myapp);
