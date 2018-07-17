import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import AboutusHeader from "../../components/headers/aboutusheader";
import { scale } from "../../helpers/scale";
import { Icons } from "../../assets/icons/index";

export default class AboutUsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "About us ",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={Icons.aboutIcon}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };
  render() {
    return (
      <View s>
        <AboutusHeader />
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
