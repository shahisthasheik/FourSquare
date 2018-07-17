// Import libraries for making a component
import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helpers/scale";
import { Icons } from "../../assets/icons/index";

// Make a component
class DetailHeader extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row"
        }}
      >
        <View
          style={{
            marginRight: scale(20)
          }}
        >
          <TouchableOpacity>
            <Image source={Icons.shareIcon} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginRight: scale(22)
          }}
        >
          <TouchableOpacity>
            <Image source={Icons.favoriteIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// Make the component available to the other parts of the App
export default withNavigation(DetailHeader);
