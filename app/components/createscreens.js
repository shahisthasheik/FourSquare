import React, { Component } from "react";
import NearYouScreen from "../screens/nearyou/nearyou";
import PopularScreen from "../screens/popular/popular";
import ToppickScreen from "../screens/toppick/toppick";
import LunchScreen from "../screens/lunch/lunch";
import CoffeeScreen from "../screens/coffee/coffee";
import ScrollableTabView from "react-native-scrollable-tab-view";
import CustomTabBar from "./custom";
import { scale } from "../helpers/scale";
import Header from "../components/headers/header";
import BackButton from "../components/buttons/backbutton";
import { Color } from "../helpers/colors";

class CreateScreens extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />,
    headerBackImage: <BackButton />,
    headerStyle: {
      backgroundColor: Color.brandPrimary,
      height: scale(80)
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <ScrollableTabView renderTabBar={() => <CustomTabBar />}>
        <NearYouScreen tabLabel="Near You" />
        <ToppickScreen tabLabel="Toppick" />
        <PopularScreen tabLabel="Popular" />
        <LunchScreen tabLabel="Lunch" />
        <CoffeeScreen tabLabel="Coffee" />
      </ScrollableTabView>
    );
  }
}

export default CreateScreens;
