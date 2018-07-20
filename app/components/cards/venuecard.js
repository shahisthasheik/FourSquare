import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";
import Card from "./card";
import CardSection from "../cardsections/cardsection";
import { scale } from "../../helpers/scale";

class VenueCard extends React.Component {
  render() {
    const { item, details } = this.props;
    // let categories = item.categories.length > 0 ? item.categories[0] : null;
    // let imgurl =
    //   categories && categories.icon && categories.icon.prefix
    //     ? categories.icon.prefix + "bg_64.png"
    //     : null;
    let itemid = details.id;
    return (
      <View>
        <Card>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Detail", { data: itemid })
            }
            style={{ flexDirection: "row" }}
          >
            <CardSection>
              <View style={styles.imageView}>
                {/* <Image
                  style={{
                    height: 100,
                    width: 100,
                    marginTop: scale(15),
                    marginLeft: scale(15)
                  }}
                  source={{
                    uri: imgurl
                  }}
                /> */}
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.headerContentStyle}>
                <View style={{ flex: 4 }}>
                  <Text style={{ marginTop: scale(5) }}>{details.name}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <View style={styles.rating}>
                    <Text style={{ marginTop: scale(2) }}>
                      {details.rating}
                    </Text>
                  </View>
                </View>
                <View style={{ flex: 4 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginTop: scale(2) }}>
                      {details.location && details.location.country
                        ? details.location.country
                        : null}
                    </Text>
                    <Text
                      style={{ marginTop: scale(2), marginLeft: scale(10) }}
                    >
                      {details.price && details.price.currency
                        ? details.price.currency
                        : null}
                    </Text>
                  </View>
                  <Text>
                    {details.location && details.location.address
                      ? details.location.address
                      : null}
                    {details.location && details.location.city
                      ? details.location.city
                      : null}
                  </Text>
                </View>
              </View>
            </CardSection>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

export default withNavigation(VenueCard);

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: scale(230),
    height: scale(112)
  },
  imageView: {
    width: scale(113),
    height: scale(113),
    backgroundColor: "silver",
    marginLeft: scale(10)
  },
  rating: {
    height: scale(20),
    width: scale(20),
    backgroundColor: "green"
  }
});
