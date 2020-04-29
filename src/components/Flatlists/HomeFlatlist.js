import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import { SampleData } from "../../../assets/data";
import { slateGray, tintColor } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "../commons/TouchableOpacity";
import { withNavigation } from "react-navigation";

class HomeFlatlist extends Component {
  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity onPress={() => null} style={styles.imageContainer}>
          <Image source={{ uri: item.imgUrl }} style={styles.image} />
          <TouchableOpacity style={styles.favButton}>
            <Ionicons name="ios-heart" color={tintColor} size={19} />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <View style={styles.priceTag}>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <View style={styles.carInfoRow}>
            <View>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text numberOfLines={1} style={styles.name}>
                {item.name}
              </Text>
            </View>
          </View>
          <View style={styles.carInfoRow}>
            <Text style={styles.brand}>
              {item.year} {item.type}
            </Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={{ color: "white", fontWeight: "500" }}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={SampleData}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
          numColumns={2}
        />
      </View>
    );
  }
}
export default withNavigation(HomeFlatlist);

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 17
  },
  imageContainer: {
    height: 140,
    width: width / 2 - 20,
    margin: 3,
    marginBottom: 0
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 8
  },
  infoContainer: {
    // height: 60,
    width: "88%",
    backgroundColor: "#e2e2e2",
    alignSelf: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 3
  },
  priceTag: {
    height: 27,
    minWidth: 90,
    backgroundColor: slateGray,
    position: "absolute",
    left: "20%",
    top: -15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8
  },
  price: {
    color: "white",
    fontWeight: "600"
  },
  bookButton: {
    height: 20,
    backgroundColor: tintColor,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
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
  },
  favButton: {
    position: "absolute",
    padding: 10,
    right: 5
  }
});
