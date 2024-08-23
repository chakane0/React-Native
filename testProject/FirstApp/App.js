import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View , Button, Text, ScrollView} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'
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
        <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView style={styles.goalsContainer}>
        {courseGoals.map((goal, index) =>

          // here we are using props to pass the information to our other js file (GoalItem.js)
          <GoalItem index={index} goal={goal}/>

        )}
      </ScrollView>
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
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  goalsContainer: {
    flex: 10,
  }, 
  
})