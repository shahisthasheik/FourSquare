import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helpers/scale";
import { Icons } from "../../assets/icons/index";
import { Color } from "../../helpers/colors";

class SearchHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
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

          <View style={styles.SectionStyle}>
            <View>
              <Image source={Icons.nearMeIcon} style={styles.ImageStyle} />
            </View>
            <View>
              <TextInput
                style={styles.text}
                underlineColorAndroid="transparent"
                placeholder="Near Me"
              />
            </View>
          </View>
        </View>
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
    );
  }
}

export default withNavigation(SearchHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: scale(30)
  },

  SectionStyle: {
    flexDirection: "row",
    marginTop: scale(8),
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
  text: {
    paddingLeft: scale(5),
    paddingTop: scale(10)
  },
  filter: {
    marginLeft: scale(20),
    paddingTop: scale(15)
  }
});
