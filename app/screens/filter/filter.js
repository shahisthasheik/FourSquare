import React from "react";
import { Text, View } from "react-native";
import SearchHeader from "../../components/headers/searchheader";
import { scale } from "../../helpers/scale";
import { Color } from "../../helpers/colors";

export default class FilterScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <SearchHeader />,
    headerStyle: {
      backgroundColor: Color.brandPrimary,
      height: scale(112)
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
        <Text>Filter Screen</Text>
      </View>
    );
  }
}
