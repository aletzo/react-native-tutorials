import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Camera from 'react-native-camera';

export default class CameraPage extends Component {

    constructor(props) {
        super(props);
    }

    goBack() {
        this.props.navigator.push({
            page: 'Component5'
        });
    }

    takePicture() {
        const that = this;
        const options = {};

        //options.location = ...

        this.camera.capture({metadata: options})
            .then((data) => { console.log(data)

                that.props.navigator.push({
                    page: 'PhotoEdit',
                    image: data
                });
            })
            .catch(err => console.error(err));


    }
        
    render() {
        return(
            <View>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                >
                    <Text
                        style={styles.capture}
                        onPress={this.takePicture.bind(this)}
                    >[CAPTURE]</Text>
                </Camera>
                <View 
                    style={styles.options}
                >
                    <Text
                        style={styles.close}
                        onPress={this.goBack.bind(this)}
                    >[CLOSE]</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    preview: {
        height: '50%',
        alignItems: 'center'
    },
    capture: {
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
    options: {
        height: '50%'
    },
    close: {
        backgroundColor: '#d0d0d0',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40,
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('CameraPage', () => CameraPage);
