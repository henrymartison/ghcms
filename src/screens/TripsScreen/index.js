import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
  YellowBox
} from "react-native";
import { TouchableOpacity } from "../../components/commons/TouchableOpacity";
import {
  EvilIcons,
  Ionicons,
  Entypo,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { Content } from "native-base";

import { tintColor, slateGray } from "../../constants/Colors";
import HomeFlatlist from "../../components/Flatlists/HomeFlatlist";

YellowBox.ignoreWarnings([
  "VirtualizedLists should never be nested inside plain ScrollViews"
]);

class TripsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.headerContainer}>
          <View style={styles.searchbar}>
            <Ionicons
              name="ios-search"
              size={20}
              color={tintColor}
              style={{ marginRight: 8 }}
            />
            <TextInput
              placeholder="Enter destination..."
              style={styles.searchInput}
            />
          </View>
          <View style={styles.menuRow}>
            <TouchableOpacity>
              <EvilIcons name="calendar" size={25} color={tintColor} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="md-funnel" size={20} color={tintColor} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="location-pin" size={25} color={tintColor} />
            </TouchableOpacity>
          </View>
        </View>

        <Content>
          <View style={styles.headingContainer}>
            <Text style={styles.mainHeading}>Top Offers in your Area</Text>
            <Text style={styles.subHeading}>12 results found</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate("Details")}
            style={styles.displayImageContainer}
          >
            <Image
              source={require("../../assets/images/car-samples/tesla.jpeg")}
              style={styles.displayImage}
            />
            <View style={styles.rec_card}>
              <Text style={[styles.rec_text, { textTransform: "uppercase" }]}>
                Recommended
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.displayImageInfo}>
            <View style={styles.priceTag}>
              <Text style={styles.price}>$50,100</Text>
            </View>
            <View style={styles.carInfoRow}>
              <View>
                <Text style={styles.brand}>Lorem Ipsum</Text>
                <Text style={styles.name}>Tesla Model 3 Roadster</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ios-heart-empty" color={tintColor} size={19} />
              </TouchableOpacity>
            </View>
            <View style={styles.carInfoRow}>
              <Text style={styles.brand}>2019 model</Text>
              <View
                style={[
                  styles.carInfoRow,
                  { marginTop: 0, width: "60%", justifyContent: "space-around" }
                ]}
              >
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="car-door"
                    color={tintColor}
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: "grey",
                      fontWeight: "600"
                    }}
                  >
                    2
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="gas-station"
                    color={tintColor}
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: "grey",
                      fontWeight: "600"
                    }}
                  >
                    electric
                  </Text>
                </View>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="steering"
                    color={tintColor}
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: "grey",
                      fontWeight: "600"
                    }}
                  >
                    automatic
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <HomeFlatlist />
        </Content>
      </View>
    );
  }
}
export default TripsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  searchbar: {
    flexDirection: "row",
    flex: 1,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 0.5,
    alignItems: "center",
    marginBottom: 15
  },
  searchInput: {
    flex: 1,
    height: 30,
    fontSize: 17
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
    alignItems: "center"
  },
  headingContainer: {
    marginBottom: 28
  },
  mainHeading: {
    fontSize: 30,
    fontWeight: "500"
  },
  subHeading: {
    fontWeight: "400",
    fontSize: 18,
    color: "grey",
    marginTop: 11
  },
  displayImageContainer: {
    height: 160,
    width: "100%"
  },
  displayImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 8
  },
  displayImageInfo: {
    // height: 80,
    width: "91%",
    backgroundColor: "#e2e2e2",
    alignSelf: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 10
  },
  rec_card: {
    height: 28,
    width: 120,
    backgroundColor: slateGray,
    // borderRadius: 20,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 8,
    position: "absolute",
    // top: 5,
    // left: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  rec_text: {
    color: "white",
    fontSize: 13,
    fontWeight: "500"
  },
  priceTag: {
    height: 30,
    minWidth: 100,
    paddingHorizontal: 20,
    backgroundColor: slateGray,
    position: "absolute",
    left: "38%",
    top: -15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  price: {
    color: "white",
    fontWeight: "600"
  },
  name: {
    fontSize: 13,
    paddingTop: 2,
    fontWeight: "600"
  },
  brand: {
    fontSize: 12,
    color: "grey"
  },
  carInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 13
  }
});
