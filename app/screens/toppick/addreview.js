import React from "react";
import { Text, View, StyleSheet, TextInput, Image, Button } from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helpers/scale";
import { Color } from "../../helpers/colors";
import { Icons } from "../../assets/icons/index";

class AddReviewScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Add Review",
    headerStyle: {
      backgroundColor: Color.brandPrimary,
      height: 60
    },
    headerTintColor: Color.whiteclr,
    headerTitleStyle: {
      fontSize: 25
    }
  };
  render() {
    return (
      <View>
        <Text style={styles.text}>Write Review</Text>
        <TextInput
          style={styles.textadd}
          underlineColorAndroid="transparent"
          multiline={true}
        />
        <Text style={styles.text}> Add a photo to your review</Text>
        <View style={styles.img}>
          <Image source={Icons.addPhotoIcon} />
        </View>
        <View style={styles.container}>
          <Button title="Submit" color="white" />
        </View>
      </View>
    );
  }
}

export default withNavigation(AddReviewScreen);

const styles = StyleSheet.create({
  text: {
    marginTop: scale(22),
    marginLeft: scale(15),
    fontSize: 20,
    color: Color.textclr,
    fontWeight: "bold"
  },
  textadd: {
    marginTop: scale(22),
    marginHorizontal: scale(16),
    height: scale(170),
    borderColor: Color.borderclr,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 20,
    textAlign: "justify",
    lineHeight: 10
  },
  img: {
    height: 5,
    width: 5,
    marginTop: scale(12),
    marginLeft: scale(16)
  },
  container: {
    width: "100%",
    backgroundColor: Color.buttonclr,
    alignItems: "center",
    justifyContent: "center",
    height: scale(50),
    marginTop: scale(70)
  }
});
