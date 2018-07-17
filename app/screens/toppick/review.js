import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ReviewHeader from "../../components/headers/reviewheader";
import { scale } from "../../helpers/scale";
import { Color } from "../../helpers/colors";

export default class ReviewScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "",
    headerRight: <ReviewHeader />,
    headerStyle: {
      backgroundColor: Color.brandPrimary,
      height: scale(60)
    },
    headerTintColor: Color.whiteclr,
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.image} />
        <View
          style={{
            width: scale(180),
            height: scale(92),
            marginLeft: scale(20)
          }}
        >
          <Text style={styles.title}> Name</Text>
          <Text style={styles.inf}>
            Must try crab soup and oyesters cooked in ghee!!
          </Text>
        </View>
        <View>
          <Text style={styles.date}> June 24, 2018</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flexDirection: "row",

    height: scale(92),
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: Color.bgclr
  },
  image: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: Color.bgclr,
    marginTop: scale(14),
    marginLeft: scale(12)
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: Color.textblack,
    marginTop: scale(18)
  },
  inf: {
    fontSize: 16,
    color: Color.bgclr,
    lineHeight: 20
  },
  date: {
    fontSize: 16,
    color: Color.basicclr,
    marginTop: scale(22)
  }
});
