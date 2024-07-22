import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.boxOne}>
        <Text>1</Text>
      </View>
      <View style={styles.boxTwo}>
        <Text>2</Text>
      </View>
      <View style={styles.boxThree}>
        <Text>3</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flexDirection: 'row',
    // width: '80%',
    // height: '80%',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }, 
  boxOne: {
    backgroundColor: 'red',
    width: 100,
    height:100,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  boxTwo: {
    backgroundColor: 'blue',
    width: 100,
    height:100,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  boxThree: {
    backgroundColor: 'yellow',
    width: 100,
    height:100,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  }
})