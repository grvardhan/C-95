import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image, } from "react-native";

export default class Notification extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/brick-wall.jpg')} style={styles.backgroundImage}> 
        <View style={styles.titleBar}>
           <Text style={styles.titleText}>handytimetable</Text>
         </View>
         </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    color: "#ffff",
    fontSize: 30
  },
  droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
  backgroundImage: { flex: 1, resizeMode: 'cover', },
  titleBar: { flex: 0.15, justifyContent: "center", alignItems: "center" },
  titleText: { fontSize: 40, fontWeight: "bold", color: "white" },
});