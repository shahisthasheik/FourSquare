import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helpers/scale";
import { Icons } from "../../assets/icons/index";
import { Color } from "../../helpers/colors";

class RatingScreen extends React.Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(52, 52, 52, 0.8)"
        }}
      >
        <View
          style={{
            position: "absolute",
            width: scale(326),
            height: scale(368),
            backgroundColor: Color.whiteclr
          }}
        >
          <Text
            style={{
              marginTop: scale(52),
              fontSize: 25,
              fontWeight: "700",
              textAlign: "center",
              color: Color.textblack
            }}
          >
            Overall Rating
          </Text>
          <Text
            style={{
              marginTop: scale(18),
              fontSize: 35,
              fontWeight: "bold",
              textAlign: "center",
              color: Color.ratingclr,
              fontStyle: "normal"
            }}
          >
            4.5
          </Text>
          <Text
            style={{
              marginTop: scale(62),
              fontSize: 25,
              fontWeight: "700",
              textAlign: "center",
              color: Color.textblack
            }}
          >
            How would you rate your experiance?
          </Text>

          <View
            style={{
              marginTop: scale(30),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: scale(74)
            }}
          >
            <TouchableOpacity>
              <Image style={styles.image} source={Icons.ratingSelectedIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.image} source={Icons.ratingSelectedIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.image} source={Icons.ratingSelectedIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.image} source={Icons.ratingSelectedIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.image} source={Icons.ratingUnSelectedIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Button
              title="Submit"
              color="#351347"
              onPress={() => this.props.navigation.navigate("Detail")}
              style={{ fontWeight: "500", fontSize: 50 }}
            />
          </View>
        </View>
        <View style={{ marginLeft: scale(325), marginBottom: scale(370) }}>
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: Color.whiteclr,
              borderColor: Color.basicclr,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Detail")}
              >
                <Image
                  source={Icons.closeGreyIcon}
                  style={{
                    height: 12,
                    width: 12
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(RatingScreen);

const styles = StyleSheet.create({
  container: {
    borderColor: Color.bgclr,
    //height: 1,
    width: "100%",
    borderWidth: 2,
    backgroundColor: Color.whiteclr,
    marginTop: scale(52),
    height: scale(50),
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 35,
    width: 35,
    marginLeft: scale(10)
  }
});
