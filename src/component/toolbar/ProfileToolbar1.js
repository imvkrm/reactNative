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
import { Actions } from "react-native-router-flux";


export default class ProfileToolbar1 extends Component {

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
                    backgroundColor="#00D2F0"
                    barStyle="light-content"
                />
                <NavigationBar
                    leftButton={leftButtonConfig}
                    title={titleConfig}
                    tintColor="#00D2F0"
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

