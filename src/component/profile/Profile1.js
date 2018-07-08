import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Button
} from "react-native";


import Toolbar from "../toolbar/ProfileToolbar1";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar } from "react-native-elements";
import ImagePicker from "react-native-image-crop-picker";

export default class Profile1 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            path: ""
        };
    }

    _onOpenCamera = () => {

        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            this.state = { path: image.path };
            
        });
      
    };

    _onOpenGallery = () => {

        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
             console.log(image.path);
            this.state = { path: image.path };
        });

    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                   <Toolbar title={"Profile Creation 1"}/>
                </View>
                <View style={{
                    marginTop:100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Avatar
                        xlarge
                        rounded
                        source={
                            this.state.path
                                ? { uri: this.state.path }
                                : require("../../images/icons8-user-male-48.png")
                        }
                        icon={{ name: 'person', color: 'white', size:128}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        
                    />
                    <Text style={styles.titleText}>
                       Profile Picture
                    </Text>
                    <Text style={styles.subText}>
                        Show us your first impression
                    </Text>
                    <View style={styles.btnContainer}>
                        <View style={{ margin: 10 }}>
                            <Button
                                onPress={this._onOpenGallery}
                                title="Upload Photo"
                                color="#841584">
                                <Text style={{color:"white"}}>Upload Photo</Text>
                            </Button>

                        </View>
                        <View style={{ margin: 10 }}>
                        
                            <Button
                                onPress={this._onOpenCamera}
                                title="Take Photo"
                                color="#841584">
                                    <Text style={{ color: "white" }}>Upload Photo</Text>
                            </Button>
                        </View>
                        
                       
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  titleText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffff"
  },
  subText: {
    fontSize: 12,
    color: "#ffff",
    marginTop: 10
  },
  btnContainer: {
    margin: 10,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row"
  }
});