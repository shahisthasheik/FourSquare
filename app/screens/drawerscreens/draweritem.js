import React from "react";
import { View, Text, Image } from "react-native";
import { Icons } from "../../assets/icons/index";
import { scale } from "../../helpers/scale";

export default class DrawerItem extends React.Component {
  render() {
    return (
      <View>
        <Image source={Icons.profileIcon} />
        <Text>Swaroop Kumar</Text>
      </View>
    );
  }
}
