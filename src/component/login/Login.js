import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    Button
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Login extends Component {

    state = {
        phone: '',
      };
    

    render() {
        let { phone } = this.state;
        return (
                    <ScrollView style={{padding: 20,backgroundColor:'#FFFFF'}}>
        
                    </ScrollView>
            )
    }

    //onPress={this.props.onLoginPress}
}

const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
  });
