import React, { Component } from 'react';
import { 
    AppRegistry,
    Button,
    Image,
    Text,
    View
} from 'react-native';

export default class PhotoEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: this.props.image
        }

console.log('this.state.image');
console.log(this.state.image);

        // image.mediaUri
        // image.path

    }

    /*

     <Image
  source={{
      isStatic: true,
      uri: 'data:image/jpeg;base64,'+base64image,
    }}
  style={{height: 100, width:100}}
  />

<Image
  source={{uri: imageURI, isStatic:true}}
  style={{width: 100, height: 100}}
  />

    
    */


    render() {
        const imagePath = this.state.image.path;
        const imageURI  = this.state.image.mediaUri;

        return(
            <View>
                <View>
                    <Text>Photo Edit</Text>
                </View>
                <View style={{height:'50%'}}>
                    <Image
                        source={{uri: imagePath, isStatic:true}}
                        style={{width: '100%', height: '100%'}}
                    />
                </View>
            </View>
        );
    }

}

AppRegistry.registerComponent('PhotoEdit', () => PhotoEdit);
