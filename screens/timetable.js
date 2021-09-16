import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image, TextInput,Alert} from "react-native";

export default class Timetable extends Component {
  constructor() 
  { super();
     this.state = 
     { text: '', 
     displayText: '', };
 }
  render() {
    return (
      <View style={styles.container}>
              <ImageBackground source={require('../assets/screen3.jpeg')} style={styles.backgroundImage}> 
        <View style={styles.titleBar}>
           <Text style={styles.titleText}>handytimetable
           </Text>
         </View>
         <TextInput style={styles.inputBox} 
         onChangeText={text => { this.setState({ text: text }); 
         }} value={this.state.text} /> 
         <TouchableOpacity style={styles.goButton} 
         onPress={() => 
          { this.setState({ displayText: this.state.text });
          Alert.alert(this.state.text) }}>
             <Text style={styles.buttonText}>GO
             </Text> 
         </TouchableOpacity> 
         <Text style={styles.displayText}>{this.state.displayText}</Text>
<View>
         <TextInput style={styles.inputBox} 
         onChangeText={text => { this.setState({ text: text }); 
         }} value={this.state.text} /> 
         <TouchableOpacity style={styles.goButton} 
         onPress={() => 
          { this.setState({ displayText: this.state.text }); }}>
             <Text style={styles.buttonText}>GO
             </Text> 
         </TouchableOpacity> 
         <Text style={styles.displayText}>{this.state.displayText}</Text>
</View>

         <TextInput style={styles.inputBox} 
         onChangeText={text => { this.setState({ text: text }); 
         }} value={this.state.text} /> 
         <TouchableOpacity style={styles.goButton} 
         onPress={() => 
          { this.setState({ displayText: this.state.text }); }}>
             <Text style={styles.buttonText}>GO
             </Text> 
         </TouchableOpacity> 
         <Text style={styles.displayText}>{this.state.displayText}</Text>

         <TextInput style={styles.inputBox} 
         onChangeText={text => { this.setState({ text: text }); 
         }} value={this.state.text} /> 
         <TouchableOpacity style={styles.goButton} 
         onPress={() => 
          { this.setState({ displayText: this.state.text }); }}>
             <Text style={styles.buttonText}>GO
             </Text> 
         </TouchableOpacity> 
         <Text style={styles.displayText}>{this.state.displayText}</Text>

         <TextInput style={styles.inputBox} 
         onChangeText={text => { this.setState({ text: text }); 
         }} value={this.state.text} /> 
         <TouchableOpacity style={styles.goButton} 
         onPress={() => 
          { this.setState({ displayText: this.state.text }); }}>
             <Text style={styles.buttonText}>GO
             </Text> 
         </TouchableOpacity> 
         <Text style={styles.displayText}>{this.state.displayText}</Text>

         <TextInput style={styles.inputBox} 
         onChangeText={text => { this.setState({ text: text }); 
         }} value={this.state.text} /> 
         <TouchableOpacity style={styles.goButton} 
         onPress={() => 
          { this.setState({ displayText: this.state.text }); }}>
             <Text style={styles.buttonText}>GO
             </Text> 
         </TouchableOpacity> 
         <Text style={styles.displayText}>{this.state.displayText}</Text>

         <TextInput style={styles.inputBox} 
         onChangeText={text => { this.setState({ text: text }); 
         }} value={this.state.text} /> 
         <TouchableOpacity style={styles.goButton} 
         onPress={() => 
          { this.setState({ displayText: this.state.text }); }}>
             <Text style={styles.buttonText}>GO
             </Text> 
         </TouchableOpacity> 
         <Text style={styles.displayText}>{this.state.displayText}</Text>

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
  inputBox: { marginTop: 200, width: '20%', 
   height: 40, 
  textAlign: 'center', borderWidth: 4, outline: 'none', 
},
goButton: { width: '20%', height: 55,  padding: 10, margin: 10, 
},
buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold',
 },
 displayText: { textAlign: 'center', fontSize: 30, },

});