import {View, TextInput, Button, StyleSheet} from "react-native"
function GoalInput({goalInputHandler, addGoalHandler}) {
    return( 
    <View>
    <TextInput 
          style={styles.textInput} 
          placeholder='your course goal' 
          onChangeText={goalInputHandler}
        />

        <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1, 
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,                           
      }
})