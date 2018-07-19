import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import SearchHeader from "../../components/headers/searchheader";
import { withNavigation } from "react-navigation";
import SearchButton from "../../components/buttons/searchbutton";
import { scale } from "../../helpers/scale";
import { Color } from "../../helpers/colors";
import { Icons } from "../../assets/icons/index";

class FilterScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <SearchHeader />,
    headerLeft: <SearchButton />,
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

export default withNavigation(FilterScreen);
