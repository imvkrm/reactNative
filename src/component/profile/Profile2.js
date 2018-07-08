import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  Picker,
  Button
} from "react-native";


import Toolbar from "../toolbar/ProfileToolbar2";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar } from "react-native-elements";
import ImagePicker from "react-native-image-crop-picker";
import { Dropdown } from "react-native-material-dropdown";

export default class Profile2 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            path: "",
            user:"",
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

    
    updateUser = (user) => {
        this.setState({ user: user })
    }

    render() {
        let data = [
        {
            value: 'Male',
        }, {
            value: 'Female',
        }, {
            value: 'Other',
        }];
        return <ImageBackground source={require("../../images/bg1.png")} style={styles.backgroundImage}>
            <View>
              <Toolbar title={"Profile Creation 2"} />
            </View>
            <View style={{ marginTop: 100 }}>
              <View style={styles.formStyle}>
                <TextInput style={{ color: "white" }} textAlign={"center"} underlineColorAndroid={"transparent"} placeholder="First Name" placeholderTextColor="#FFFFFF" />
              </View>
              <View style={styles.formStyle}>
                <TextInput style={{ color: "white" }} textAlign={"center"} underlineColorAndroid={"transparent"} placeholder="Last Name" placeholderTextColor="#FFFFFF" />
              </View>
              <View style={styles.formStyle}>
                <Picker style={styles.picker} mode="dropdown" selectedValue={this.state.user} onValueChange={this.updateUser}>
                  <Picker.Item label="Gender" color="white" value="" itemStyle={(color = "black")} />
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Picker>
              </View>
            </View>
            <View style={{ flex: 1, marginTop: 30, backgroundColor: "black" }}>
              <Text style={styles.titleText}>
                Adding interest will help us{"\n"}
                find you new likeminded friends,{"\n"}
                disussions,event and communities
              </Text>

              <TouchableHighlight style={styles.submit} onPress={() => this.submitSuggestion(this.props)} underlayColor="#fff">
                <Text style={styles.submitText}>ADD INTERESTS</Text>
              </TouchableHighlight>
              
            </View>
           
          </ImageBackground>;
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  titleText: {
      marginLeft:20,
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
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover" // or 'stretch'
  },
  formStyle: {
    flexDirection: "column",
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "rgba(52, 52, 52, 0.2)",
    justifyContent: "center",
    alignContent: "center"
  },
  inputView: {
    backgroundColor: "rgba(0,0,0,0)",
    position: "absolute",
    top: 0,
    left: 5,
    right: 5
  },
  input: {
    height: 36,
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#48BBEC",
    backgroundColor: "white"
  },
  itemStyle: {
    fontSize: 15,
    height: 75,
    color: "black",
    textAlign: "center",
    fontWeight: "bold"
  },

  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column"
  },
  titleText: {
    margin: 20,
    marginLeft: 40,
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  submit: {
    height: 60,
    width: 200,
    marginRight: 40,
    marginLeft: 60,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#FFFF",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff"
  },
  submitText: {
    color: "#00D2F0",
      fontWeight: "bold",
    textAlign: "center"
  }
});