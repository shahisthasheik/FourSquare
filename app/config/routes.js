import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";
import {
  createStackNavigator,
  DrawerNavigator,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import { scale } from "../helpers/scale";
import { Color } from "../helpers/colors";
import CreateScreens from "../components/createscreens";
import Header from "../components/headers/header";
import FilterScreen from "../screens/filter/filter";
import SearchScreen from "../screens/search/search";
import DetailScreen from "../screens/toppick/detail";
import RatingScreen from "../screens/toppick/rating";
import ReviewScreen from "../screens/toppick/review";
import BackButton from "../components/buttons/backbutton";
import AddReviewScreen from "../screens/toppick/addreview";
import PhotoScreen from "../screens/toppick/photo";
import FavoriteScreen from "../screens/drawerscreens/favorite";
import FeedBackScreen from "../screens/drawerscreens/feedback";
import AboutUsScreen from "../screens/drawerscreens/aboutus";
import LogoutScreen from "../screens/drawerscreens/logout";

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <Image
      style={styles.background}
      source={require("../assets/images/background_copy.png")}
    />
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "transparent" }}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const Navigations = createStackNavigator(
  {
    tabs: {
      screen: CreateScreens
    },

    Filter: {
      screen: FilterScreen
    },
    Search: {
      screen: SearchScreen
    },
    Detail: {
      screen: DetailScreen
    },
    Rating: {
      screen: RatingScreen
    },
    Review: {
      screen: ReviewScreen
    },
    AddReview: {
      screen: AddReviewScreen
    },
    Photo: {
      screen: PhotoScreen
    }
  },
  {
    navigationOptions: {
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
    }
  }
  // { headerMode: "none" }
);
const Drawer = DrawerNavigator(
  {
    " ": {
      screen: Navigations
    },
    Favorite: {
      screen: FavoriteScreen
    },
    FeedBack: {
      screen: FeedBackScreen
    },
    AboutUs: {
      screen: AboutUsScreen
    },
    Logout: {
      screen: LogoutScreen
    }
  },
  {
    useNativeAnimations: true,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: "black",
      activeBackgroundColor: "transparent",
      inactiveTintColor: "white",
      itemStyle: {
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: "grey"
      }
    }
  }
);
export default Drawer;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    height: scale(800),
    width: "100%"
  }
});
