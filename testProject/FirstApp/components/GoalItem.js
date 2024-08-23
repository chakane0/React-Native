import { StyleSheet , View, Text, Pressable} from "react-native"
function GoalItem({goal,index, courseGoals, setCourseGoals}) {

  function deleteGoalHandler(index) {
    console.log("Deleting Itme at index: ", index)
    const updatedGoals = [...courseGoals]
    updatedGoals.splice(index, 1)
    setCourseGoals(updatedGoals)
  }
    return (
      <Pressable onPress={() => deleteGoalHandler(index)}>
        <View key={index} style={styles.listItem}>
        <Text style={styles.goalsNumber}>{index+1}.</Text>
        <Text key={index}>{goal}</Text>
      </View>
      </Pressable>
      
    )
}
export default GoalItem

const styles = StyleSheet.create({
    goalsNumber: {
        marginRight: 10
      }, 
      listItem: {
        flexDirection: 'row',
        alignItems: 'center',
      }
})