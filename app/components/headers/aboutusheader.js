// Import libraries for making a component
import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helpers/scale";
import { Color } from "../../helpers/colors";
import { Icons } from "../../assets/icons/index";

// Make a component
class AboutusHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.arrow}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={Icons.backIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={styles.textStyle}>About us</Text>;
        </View>
        <View>
          <View style={styles.filter}>
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: scale(60),
    backgroundColor: Color.brandPrimary
  },
  filter: {
    marginLeft: scale(110),
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20,
    color: Color.textclr,
    justifyContent: "center",
    alignItems: "center"
  },
  arrow: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(110)
  }
});

// Make the component available to the other parts of the App
export default withNavigation(AboutusHeader);
