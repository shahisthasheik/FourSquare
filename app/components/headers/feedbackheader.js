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
class FeedbackHeader extends React.Component {
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
          <Text style={styles.textStyle}>{text.feedbackTitle}</Text>
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
    paddingLeft: scale(100),
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20,
    color: Color.whiteclr,
    justifyContent: "center",
    alignItems: "center"
  },
  arrow: {
    paddingRight: scale(100),
    justifyContent: "center",
    alignItems: "center"
  }
});

// Make the component available to the other parts of the App
export default withNavigation(FeedbackHeader);
