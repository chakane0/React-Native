import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View , Button, Text} from 'react-native';
import { useState } from 'react';
 
export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  // responsible for fetching user input
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  // executes when the button is clicked
  // we will use State to take care of this
  function addGoalHandler() {

    // this is a p good way to update state
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      enteredGoalText,
    ]);
  };


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>

        <TextInput 
          style={styles.textInput} 
          placeholder='your course goal' 
          onChangeText={goalInputHandler}
        />

        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => 
          <View key={index} style={styles.listItem}>
            <Text style={styles.goalsNumber}>{index+1}.</Text>
            <Text key={index}>{goal}</Text>
          </View>
          
        )}
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  }, 
  inputContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1, 
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,                           
  },
  goalsContainer: {
    flex: 10,
  }, 
  goalsNumber: {
    marginRight: 10
  }, 
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})