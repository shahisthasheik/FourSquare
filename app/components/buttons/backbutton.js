import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { scale } from "../../helpers/scale";
import { withNavigation } from "react-navigation";
import { Icons } from "../../assets/icons/index";

class BackButton extends React.Component {
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
          style={{ paddingLeft: scale(20) }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Image
            //style={{ paddingLeft: 20 }}
            source={Icons.backIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(BackButton);
