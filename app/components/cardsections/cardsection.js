import React from "react";
import { View } from "react-native";
import { scale } from "../../helpers/scale";
import { Color } from "../../helpers/colors";

const CardSection = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    paddingRight: scale(10),
    backgroundColor: Color.whiteclr,
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};

export default CardSection;
