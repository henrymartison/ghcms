import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class CarsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CarsScreen</Text>
      </View>
    );
  }
}
export default CarsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
