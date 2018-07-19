import React from "react";
import { Text, View, Image, StyleSheet, TextInput, Button } from "react-native";
import FeedbackHeader from "../../components/headers/feedbackheader";
import { scale } from "../../helpers/scale";
import { Icons } from "../../assets/icons/index";
import { Color } from "../../helpers/colors";
import {text} from "../../components/const";

export default class FeedBackScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "FeedBack",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={Icons.feedBackIcon}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };
  render() {
    return (
      <View>
        <View>
          <FeedbackHeader />
        </View>
        <View>
          <Text style={styles.text}>{text.writeyourfeedback}</Text>
        </View>
        <View style={{ marginTop: scale(15) }}>
          <TextInput
            style={styles.textadd}
            underlineColorAndroid="transparent"
            multiline={true}
          />
        </View>

        <View style={styles.container}>
          <Button title="Submit" color="white" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },

  text: {
    marginTop: scale(20),
    fontSize: 20,
    fontWeight: "600",
    color: Color.textclr,
    paddingLeft: scale(16)
  },
  textadd: {
    height: scale(140),
    borderColor: Color.borderclr,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 20,
    textAlign: "justify",
    lineHeight: 10,
    marginHorizontal: scale(15)
  },
  container: {
    marginTop: scale(104),
    width: "100%",
    height: scale(60),
    backgroundColor: Color.buttonclr,
    alignItems: "center",
    justifyContent: "center"
  }
});
