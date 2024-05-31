import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='your course goal'/>
        <Button title='Add Goal'/>
      </View>
      <view>
        <Text>List of goals...</Text>
      </view>
    </View>
  );
}
 
const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }
})