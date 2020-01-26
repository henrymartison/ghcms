import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import SearchScreen from "./../screens/SearchScreen";
import InboxScreen from "./../screens/InboxScreen";
import TripsScreen from "./../screens/TripsScreen";
import CarsScreen from "./../screens/CarsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailsScreen from "../screens/DetailsScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-search" />
  )
};

SearchStack.path = "";

const InboxStack = createStackNavigator(
  {
    Inbox: InboxScreen
  },
  config
);

InboxStack.navigationOptions = {
  tabBarLabel: "Inbox",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
    />
  )
};

InboxStack.path = "";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

ProfileStack.path = "";

const CarsStack = createStackNavigator(
  {
    Cars: CarsScreen
  },
  config
);

CarsStack.navigationOptions = {
  tabBarLabel: "My Cars",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-car" : "md-car"}
    />
  )
};

CarsStack.path = "";

const TripsStack = createStackNavigator(
  {
    Trips: TripsScreen,
    Details: DetailsScreen
  },
  {
    defaultNavigationOptions: { headerShown: false }
  },
  config
);

TripsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,

    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon name="ios-add-circle-outline" size={20} focused={focused} />
    )
  };
};

TripsStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    SearchStack,
    InboxStack,
    TripsStack,
    CarsStack,
    ProfileStack
  },
  {
    initialRouteName: "TripsStack",
    defaultNavigationOptions: null,
    tabBarOptions: {
      labelStyle: {
        textTransform: "uppercase"
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
