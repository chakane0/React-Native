import { StyleSheet , View, Text, Pressable} from "react-native"
function GoalItem({goal,index}) {

  function deleteGoalHandler() {
    console.log("delete")
  }
    return (
      <Pressable onPress={deleteGoalHandler}>
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