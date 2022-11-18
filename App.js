
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Game from './components/game';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#222222'} animated={true}/>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <Game/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#222222",
    flex: 1,
    alignItems: 'center',
   margin: 0,
   padding: 0,
   
  },
  title:{
    margin: 0,
    padding: 0,
    fontSize: 48,
    color: "#00ff85",
    textShadowColor: "#00e0ff",
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 4,
    top: 30,
  }
});


