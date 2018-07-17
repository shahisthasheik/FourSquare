import React from "react";
import { Text, View } from "react-native";
import PhotoHeader from "../../components/headers/photoheader";
import { scale } from "../../helpers/scale";
import { Color } from "../../helpers/colors";

export default class PhotoScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "",
    headerRight: <PhotoHeader />,
    headerStyle: {
      backgroundColor: Color.brandPrimary,
      height: scale(60)
    },
    headerTintColor: Color.whiteclr,
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 25
    }
  };
  render() {
    return (
      <View>
        <Text>photo screen</Text>
      </View>
    );
  }
}
