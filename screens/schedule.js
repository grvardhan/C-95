import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image, } from "react-native";

export default class Schedule extends Component {
  render() {
    return (

      <View style={styles.container}>
         <SafeAreaView style={styles.droidSafeArea} />
       
        <ImageBackground source={require('../assets/screen2.jpg')} style={styles.backgroundImage}> 
        <View style={styles.titleBar}>
           <Text style={styles.titleText}>HandyTimetable</Text>
         </View>
         <TouchableOpacity style={styles.routeCard}
         onPress={()=>this.props.navigation.navigate("timetable")}
         >
          <Text style={styles.routeText}>
            Create a Timetable
          </Text>
         </TouchableOpacity>
        
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
  routeCard: { flex: 0.21, marginLeft: 250, marginRight: 250,
     marginTop: 50,
     borderRadius: 30,
     backgroundColor: 'pink' },
     routeText: { fontSize: 35,
      fontWeight: "bold",
      color: "black",
      marginTop: 25, paddingLeft: 215 },
    

});
