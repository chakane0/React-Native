import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View , Button, Text} from 'react-native';
 
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='your course goal'/>
        <Button title='Add Goal'/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  appContainer: {
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center'

  }
})