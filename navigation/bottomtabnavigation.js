import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Notification from '../screens/notification.js'
import Schedule from '../screens/schedule.js'
import Timetable from '../screens/timetable.js'
const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="schedule" component={Schedule} />
          <Tab.Screen name="timetable" component={Timetable} />
          <Tab.Screen name="notification" component={Notification} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}