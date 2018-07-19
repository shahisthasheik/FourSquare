import React from "react";
import { Text, View, ScrollView } from "react-native";
import DetailCard from "../../components/cards/detailcard";
import DetailHeader from "../../components/headers/detailheader";
import { scale } from "../../helpers/scale";
import { Color } from "../../helpers/colors";
import { Icons } from "../../assets/icons/index";
import Services from "../../services/services";
import BackButton from "../../components/buttons/backbutton";

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <BackButton />,
    headerRight: <DetailHeader />,
    headerStyle: {
      backgroundColor: "rgba(0,0,0,0)",
      position: "absolute",
      top: 30,
      left: 0,
      right: 0,
      borderBottomWidth: 0

      // height: scale(48)
    },
    height: scale(48),
    width: "100%"
  };
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  }

  componentDidMount() {
    Services.getDetails(this.props.navigation.getParam("data"))
      .then(response => {
        console.log("id", response);
        this.setState({
          value:
            response && response.response && response.response.venue
              ? response.response.venue
              : null
        });
        console.log("value", response.response.venue);
      })
      .catch(error => {
        console.error(error);
      });
  }
  renderItems() {
    const Data = this.state.value;
    if (Data === null) {
      return <View />;
    }

    return <DetailCard key={Data.id} Data={Data} />;
  }

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderItems()}</ScrollView>;
  }
}

// import React from "react";
// import {
//   Text,
//   ScrollView,
//   View,
//   TouchableOpacity,
//   Image,
//   Button,
//   StyleSheet
// } from "react-native";
// import DetailHeader from "../../components/headers/detailheader";
// import { scale } from "../../helpers/scale";
// import { Icons } from "../../assets/icons/index";
// import ButtonStyle from "../../components/styles/buttonstyle";
// import { Color } from "../../helpers/colors";

// export default class DetailScreen extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   static navigationOptions = {
//     headerTitle: "",
//     headerRight: <DetailHeader />,
//     headerStyle: {
//       backgroundColor: Color.basicclr,
//       height: scale(48)
//     },
//     headerTintColor: "#fff",
//     headerTitleStyle: {
//       fontWeight: "bold",
//       fontSize: 25
//     }
//   };
//   render() {
//     return (
//       <ScrollView>
//         <View style={styles.image} />
//         <View
//           style={{
//             flexDirection: "row",
//             marginTop: scale(10),
//             borderBottomWidth: 1,
//             borderBottomColor: Color.bgclr,
//             height: scale(76),
//             marginLeft: scale(22),
//             marginRight: scale(22)
//           }}
//         >
//           <View
//             style={{
//               flex: 1,
//               alignItems: "center"
//             }}
//           >
//             <TouchableOpacity
//               onPress={() => this.props.navigation.navigate("Rating")}
//             >
//               <View
//                 style={{
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}
//               >
//                 <Image source={Icons.ratingIcon} />
//               </View>
//               <View
//                 style={{
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}
//               >
//                 <Text
//                   style={{
//                     paddingTop: scale(5),
//                     color: Color.textclr,
//                     fontWeight: "bold"
//                   }}
//                 >
//                   Rating
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//           <View style={{ flex: 1, alignItems: "center" }}>
//             <TouchableOpacity
//               onPress={() => this.props.navigation.navigate("Photo")}
//             >
//               <View
//                 style={{
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}
//               >
//                 <Image source={Icons.photosIcon} />
//               </View>
//               <View
//                 style={{
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}
//               >
//                 <Text
//                   style={{
//                     paddingTop: scale(5),
//                     color: Color.textclr,
//                     fontWeight: "bold"
//                   }}
//                 >
//                   Photos
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//           <View style={{ flex: 1, alignItems: "center" }}>
//             <TouchableOpacity
//               onPress={() => this.props.navigation.navigate("Review")}
//             >
//               <View
//                 style={{
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}
//               >
//                 <Image source={Icons.reviewIcon} />
//               </View>
//               <View
//                 style={{
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}
//               >
//                 <Text
//                   style={{
//                     paddingTop: scale(5),
//                     color: Color.textclr,
//                     fontWeight: "bold"
//                   }}
//                 >
//                   Review
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={ButtonStyle.container}>
//           <Button
//             onPress={() => this.props.navigation.navigate("AddReview")}
//             title="AddReview"
//             color="white"
//           />
//         </View>
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   image: {
//     width: "100%",
//     height: scale(225),
//     backgroundColor: Color.bgclr
//   }
// });
