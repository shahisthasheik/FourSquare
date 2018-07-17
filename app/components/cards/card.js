import React from "react";
import { View } from "react-native";
import { scale } from "../../helpers/scale";

const Card = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);

const styles = {
  containerStyle: {
    borderWidth: 2,
    borderColor: "#fff",
    width: "98%",
    height: scale(112),
    elevation: 1,
    marginTop: scale(10),
    marginHorizontal: scale(2.5),
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Card;
