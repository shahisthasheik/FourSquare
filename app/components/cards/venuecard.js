import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";
import Card from "./card";
import CardSection from "../cardsections/cardsection";
import { scale } from "../../helpers/scale";

class VenueCard extends React.Component {
  render() {
    const { item, details } = this.props;
    let categories = item.categories.length > 0 ? item.categories[0] : null;
    let imgurl =
      categories && categories.icon && categories.icon.prefix
        ? categories.icon.prefix + "bg_64.png"
        : null;
    let itemid = item.id;
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
                <Image
                  // style={{ height: 100, width: 100 }}
                  source={{
                    uri: imgurl
                  }}
                />
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.headerContentStyle}>
                <Text>{item.name}</Text>
                <Text>{categories.id}</Text>
                <Text>{details.rating}</Text>
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
    height: scale(113)
  }
});
