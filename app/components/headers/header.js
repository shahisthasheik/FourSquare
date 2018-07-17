// Import libraries for making a component
import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helpers/scale";
import { Icons } from "../../assets/icons/index";

// Make a component
class Header extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image source={Icons.menuIcon} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginLeft: scale(100)
          }}
        >
          <Image source={Icons.logoIcon} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginLeft: scale(90)
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Filter")}
          >
            <Image
              source={Icons.filterIcon}
              style={{
                height: 22,
                width: 22
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            marginRight: scale(22)
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Search")}
          >
            <Image
              source={Icons.searchIcon}
              style={{
                height: 22,
                width: 22
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// Make the component available to the other parts of the App
export default withNavigation(Header);

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    marginLeft: scale(22),
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
