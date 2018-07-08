import React, { Component } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    StatusBar,
    Button
} from "react-native";
import NavigationBar from "react-native-navbar";
import FontAwesome, { Icons } from "react-native-fontawesome";


export default class Toolbar extends Component {

    render() {


        const leftButtonConfig = {
            title: <FontAwesome>{Icons.chevronLeft}</FontAwesome>,
            tintColor: 'white',
            handler: () => Actions.pop(),
        };

        const rightButtonConfig = {
            title: <FontAwesome>{Icons.check}</FontAwesome>,
            tintColor: 'white',
            handler: () => Actions.Profile2(),
        };

        const titleConfig = {
            title: this.props.title,
            tintColor: 'white'
        };

        return (
            <View>
                <StatusBar
                    hidden={true}
                />
                <NavigationBar
                    leftButton={leftButtonConfig}
                    title={titleConfig}
                    style={{ backgroundColor: 'transparent'}}
                    tintColor="transparent"
                    rightButton={rightButtonConfig}
                

            />

            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});

