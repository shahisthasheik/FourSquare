// Import libraries for making a component
import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helpers/scale";
import { Color } from "../../helpers/colors";
import { Icons } from "../../assets/icons/index";
import { text } from "../../components/const";

// Make a component
class FavouriteHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
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
            <Text style={styles.textStyle}>{text.favouriteTitle}</Text>
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
        <View style={styles.SectionStyle}>
          <View>
            <Image source={Icons.searchTextInput} style={styles.ImageStyle} />
          </View>
          <View>
            <TextInput
              style={styles.text}
              underlineColorAndroid="transparent"
              placeholder="Search"
            />
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
    flexDirection: "column",
    height: scale(110),
    backgroundColor: Color.brandPrimary
  },

  SectionStyle: {
    flexDirection: "row",
    marginTop: scale(15),
    backgroundColor: Color.whiteclr,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Color.whiteclr,
    height: scale(36),
    width: scale(238)
  },

  ImageStyle: {
    marginTop: scale(12),
    marginLeft: 10,
    height: 15,
    width: 15,
    alignItems: "center"
  },

  filter: {
    marginTop: scale(20),
    marginLeft: scale(100)
  },
  textStyle: {
    fontSize: 20,
    marginTop: scale(20),
    color: Color.whiteclr,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    paddingLeft: scale(5),
    paddingTop: scale(10)
  },
  arrow: {
    marginTop: scale(20),
    marginRight: scale(100)
  }
});

// Make the component available to the other parts of the App
export default withNavigation(FavouriteHeader);
