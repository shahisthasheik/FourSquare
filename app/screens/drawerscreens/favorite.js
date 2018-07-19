import React from "react";
import { View, Image } from "react-native";
import FavouriteHeader from "../../components/headers/favheader";
import VenueCard from "../../components/cards/venuecard";
import { Icons } from "../../assets/icons/index";
import { scale } from "../../helpers/scale";

export default class FavoriteScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Favorite",
    drawerIcon: ({ tintColor }) => (
      <Image source={Icons.favoriteIcon} style={{ tintColor: tintColor }} />
    )
  };
  render() {
    return (
      <View>
        <FavouriteHeader />
      </View>
    );
  }
}
