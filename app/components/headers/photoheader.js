import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helpers/scale";
import { Icons } from "../../assets/icons/index";

class PhotoHeader extends React.Component {
  render() {
    return (
      <View style={styles.filter}>
        <TouchableOpacity>
          <Image source={Icons.addPicIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(PhotoHeader);
const styles = StyleSheet.create({
  filter: {
    marginRight: scale(22)
  }
});
