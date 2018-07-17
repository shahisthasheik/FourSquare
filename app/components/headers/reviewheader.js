import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helpers/scale";
import { Icons } from "../../assets/icons/index";

class ReviewHeader extends React.Component {
  render() {
    return (
      <View style={styles.filter}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AddReview")}
        >
          <Image source={Icons.addReviewIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(ReviewHeader);
const styles = StyleSheet.create({
  filter: {
    marginRight: scale(22)
  }
});
