import React from "react";
import { Text, View, Button } from "react-native";
import { withNavigation } from "react-navigation";
import VenueCard from "../../components/cards/venuecard";
import { scale } from "../../helpers/scale";

class ToppickScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Text>top pick</Text>
        {/* <VenueCard /> */}
      </View>
    );
  }
}
export default withNavigation(ToppickScreen);
