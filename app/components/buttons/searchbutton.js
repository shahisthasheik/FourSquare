import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { scale } from "../../helpers/scale";
import { withNavigation } from "react-navigation";
import { Icons } from "../../assets/icons/index";

class SearchButton extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          style={{ paddingLeft: scale(15), paddingBottom: scale(35) }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Image source={Icons.backIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(SearchButton);
