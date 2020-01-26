import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView
} from "react-native";
import { TouchableOpacity } from "../../components/commons/TouchableOpacity";
import {
  Ionicons,
  Octicons,
  Entypo,
  MaterialCommunityIcons,
  EvilIcons,
  SimpleLineIcons
} from "@expo/vector-icons";
import { Thumbnail } from "native-base";
import { tintColor, slateGray } from "../../constants/Colors";

class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require("../../assets/images/car-samples/tesla.jpeg")}
            style={styles.image}
            resizeMode="cover"
          >
            <View style={styles.controlMenu}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => this.props.navigation.goBack()}
              >
                <Ionicons name="ios-arrow-back" size={22} color="white" />
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.optionsButton} onPress={null}>
                <Ionicons name="md-more" size={25} color="white" />
              </TouchableOpacity> */}
            </View>
          </ImageBackground>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.priceTag}>
            <Text style={styles.price}>75ghs/day</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.personalInfo}>
              <Thumbnail
                source={{
                  uri:
                    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/51ba1561652313.5a7514c667c74.png"
                }}
              />
              <View>
                <Text style={styles.personName}>Henry Martison</Text>
                <Text style={styles.ownership}>car owner</Text>
              </View>
              <Octicons name="mail" size={20} color={tintColor} />
            </View>

            <View style={styles.carInfo}>
              <View>
                <Text numberOfLines={2} style={styles.carName}>
                  Tesla Model 3 Roadster
                </Text>
                <Text style={styles.model}>2019 model</Text>
              </View>
              <View style={styles.rand_row}>
                <Entypo name="star" color={tintColor} size={18} />
                <Text style={styles.smallText}>9.2</Text>
              </View>
              <View style={styles.rand_row}>
                <MaterialCommunityIcons
                  name="steering"
                  color={tintColor}
                  size={18}
                />
                <Text style={styles.smallText}>11 trips</Text>
              </View>
            </View>

            <View style={styles.makeInfoCol}>
              <View>
                <View style={styles.makeInfoRow}>
                  <MaterialCommunityIcons
                    name="gas-station"
                    color={slateGray}
                    size={20}
                  />
                  <View style={styles.ml}>
                    <Text style={styles.personName}>Electric</Text>
                    <Text style={styles.ownership}>Battery, 100%</Text>
                  </View>
                </View>
                <View style={styles.makeInfoRow}>
                  <MaterialCommunityIcons
                    name="sitemap"
                    color={slateGray}
                    size={20}
                  />
                  <View style={styles.ml}>
                    <Text style={styles.personName}>Transmission</Text>
                    <Text style={styles.ownership}>automatic</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.makeInfoRow}>
                  <MaterialCommunityIcons
                    name="seat-recline-normal"
                    color={slateGray}
                    size={20}
                  />
                  <View style={styles.ml}>
                    <Text style={styles.personName}>Seats</Text>
                    <Text style={styles.ownership}>2 adults</Text>
                  </View>
                </View>
                <View style={styles.makeInfoRow}>
                  <MaterialCommunityIcons
                    name="car-door"
                    color={slateGray}
                    size={20}
                  />
                  <View style={styles.ml}>
                    <Text style={styles.personName}>Doors</Text>
                    <Text style={styles.ownership}>two</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.horizontalSeparator} />

            <View style={styles.schedule}>
              <View style={[styles.controlMenu, { paddingHorizontal: 0 }]}>
                <Text
                  style={[styles.personName, { textTransform: "capitalize" }]}
                >
                  Trip time
                </Text>
                <EvilIcons name="calendar" size={25} color={tintColor} />
              </View>
              <View style={[styles.controlMenu, { paddingHorizontal: 0 }]}>
                <View style={styles.rand_row}>
                  <View style={styles.circle} />
                  <Text style={styles.date}>Monday, 1 aug</Text>
                </View>
                <View style={styles.rand_row}>
                  <SimpleLineIcons name="clock" size={18} color={tintColor} />
                  <Text style={styles.date}>10:00</Text>
                </View>
              </View>
              <View style={styles.verticalSeparator} />

              <View
                style={[
                  styles.controlMenu,
                  { paddingHorizontal: 0, marginTop: 0 }
                ]}
              >
                <View style={styles.rand_row}>
                  <View
                    style={[styles.circle, { backgroundColor: slateGray }]}
                  />
                  <Text style={styles.date}>Wednesday, 3 aug</Text>
                </View>
                <View style={styles.rand_row}>
                  <SimpleLineIcons name="clock" size={18} color={tintColor} />
                  <Text style={styles.date}>13:20</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    height: "40%",
    backgroundColor: "#e2e2e2"
  },
  controlMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    marginTop: 20
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  backButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 38,
    width: 38,
    borderRadius: 38 / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20,
    paddingHorizontal: 14,
    paddingVertical: 16
  },
  personalInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "57%"
  },
  personName: {
    fontWeight: "600",
    fontSize: 16
  },
  ownership: {
    color: "grey",
    fontWeight: "400"
  },
  carInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25
  },
  rand_row: {
    flexDirection: "row",
    alignItems: "center"
  },
  smallText: {
    paddingLeft: 2,
    color: "grey"
  },
  carName: {
    fontSize: 24,
    fontWeight: "500",
    width: "90%"
  },
  model: {
    color: "grey",
    marginTop: 5,
    fontWeight: "500"
  },
  priceTag: {
    height: 35,
    minWidth: 115,
    backgroundColor: slateGray,
    position: "absolute",
    right: 30,
    top: -18,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  price: {
    color: "white",
    fontWeight: "600"
  },
  makeInfoCol: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  makeInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 27
  },
  ml: {
    marginLeft: 5
  },
  horizontalSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#e2e2e2",
    marginTop: 20
  },
  verticalSeparator: {
    width: 1,
    height: 20,
    backgroundColor: "#e2e2e2",
    marginLeft: 4
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    borderColor: slateGray,
    borderWidth: 1
  },
  date: {
    fontWeight: "500",
    fontSize: 17,
    paddingLeft: 12
  }
});
