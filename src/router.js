import React, { Component } from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import { View, StyleSheet } from "react-native";
import Splash from "../src/component/Splash";
import Login from "../src/component/login/Login";
import Profile1 from "../src/component/profile/Profile1";
import Profile2 from "../src/component/profile/Profile2";





export default class RouterComponent extends Component {
  render() {
    return <Router>
        <Scene key="root">
          <Scene key="dash" hideNavBar={false}>
            <Scene key="splash" component={Splash} hideNavBar={true} initial />
            <Scene key="Login" component={Login} hideNavBar={true} />
            <Scene key="Profile1" component={Profile1} hideNavBar={true} />
            <Scene key="Profile2" component={Profile2} hideNavBar={true} />
          </Scene>
        </Scene>
      </Router>;
  }
}
