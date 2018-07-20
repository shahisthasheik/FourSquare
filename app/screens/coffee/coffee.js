import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import VenueCard from "../../components/cards/venuecard";
import { scale } from "../../helpers/scale";
import Services from "../../services/services";
import { Color } from "../../helpers/colors";

export default class NearYouScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      id: [],
      value: []
    };
  }

  componentDidMount() {
    Services.getCoffeeVenues()
      .then(response => {
        console.log("Response", response);
        this.setState({
          venues:
            response && response.response && response.response.venues
              ? response.response.venues
              : null
        });

        for (i = 0; i < 1; i++) {
          console.log("i", response.response.venues[i].id);

          Services.getDetails(response.response.venues[i].id).then(response => {
            console.log("id", response);
            this.setState({
              value:
                response && response.response && response.response.venue
                  ? response.response.venue
                  : null
            });
            console.log("value", response.response.venue);
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderContent = () => {
    const { venues, value } = this.state;

    return (
      <View>
        <FlatList
          data={venues}
          extraData={value}
          keyExtractor={(item, index) => item.id}
          renderItem={(venues, index) => {
            return (
              <VenueCard
                item={venues.item}
                key={venues.item.id}
                details={value}
              />
            );
          }}
        />
      </View>
    );
  };

  render() {
    const { venues } = this.state;
    return <View>{venues.length != 0 && this.renderContent()}</View>;
  }
}
