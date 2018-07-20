import React from "react";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet
} from "react-native";
import { withNavigation } from "react-navigation";
import { scale } from "../../helpers/scale";
import { Icons } from "../../assets/icons/index";
import ButtonStyle from "../../components/styles/buttonstyle";
import { Color } from "../../helpers/colors";

class DetailCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { Data } = this.props;
    return (
      <ScrollView>
        <View style={styles.image}>{/* <Text>{Data.rating}</Text> */}</View>
        <View
          style={{
            flexDirection: "row",
            marginTop: scale(10),
            borderBottomWidth: 1,
            borderBottomColor: Color.bgclr,
            height: scale(76),
            marginLeft: scale(22),
            marginRight: scale(22)
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Rating")}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image source={Icons.ratingIcon} />
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    paddingTop: scale(5),
                    color: Color.textclr,
                    fontWeight: "bold"
                  }}
                >
                  Rating
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Photo")}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image source={Icons.photosIcon} />
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    paddingTop: scale(5),
                    color: Color.textclr,
                    fontWeight: "bold"
                  }}
                >
                  Photos
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Review")}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image source={Icons.reviewIcon} />
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    paddingTop: scale(5),
                    color: Color.textclr,
                    fontWeight: "bold"
                  }}
                >
                  Review
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.overview}>Overview</Text>
          <Text style={styles.data}>
            {Data.description ? Data.description : "Unavailabe"}
          </Text>
        </View>
        <View style={styles.map} />

        <View style={styles.container}>
          <Button
            onPress={() => this.props.navigation.navigate("AddReview")}
            title="AddReview"
            color="white"
          />
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(DetailCard);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: scale(50),
    backgroundColor: Color.buttonclr,
    alignItems: "center",
    justifyContent: "center"
    // marginTop: scale(200)
  },
  image: {
    width: "100%",
    height: scale(290),
    backgroundColor: Color.bgclr
  },
  description: {
    // backgroundColor: Color.basicclr
  },
  overview: {
    fontSize: scale(20.87),
    marginLeft: scale(22),
    fontWeight: "bold",
    marginTop: scale(22),
    color: Color.boldclr
  },
  data: {
    fontSize: scale(14.62),
    marginLeft: scale(22),
    marginTop: scale(22),
    lineHeight: scale(20.24),
    color: Color.Textclr
  },
  map: {
    width: "100%",
    height: scale(136),
    marginTop: scale(22),
    backgroundColor: Color.bgclr
  }
});
