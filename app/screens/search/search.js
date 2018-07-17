import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchHeader from "../../components/headers/searchheader";
import { scale } from "../../helpers/scale";
import { Color } from "../../helpers/colors";

//import Header from "../../components/headers/Header";

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <SearchHeader />,
    headerStyle: {
      backgroundColor: Color.brandPrimary,
      height: scale(112)
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 25
    }
  };
  render() {
    return (
      <View>
        <Text>search screen</Text>
      </View>
    );
  }
}
