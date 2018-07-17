import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Icons } from "../../assets/icons/index";
import { scale } from "../../helpers/scale";

export default class LogoutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Logout",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={Icons.logoutIcon}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };
  render() {
    return (
      <View>
        <Text>logout screen!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});
