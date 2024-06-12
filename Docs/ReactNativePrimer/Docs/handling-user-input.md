# Handing User Input
There is an existing React Native Core Component which we'll use to enter text as a user. The two main props we'll use is: 
<ul>
    <li> onChangeText: Takes a function xto be called everytime the text is changed </li>
    <li> onSubmitEditing: Takes a function to be called when the text is submitted</li>
</ul>

<details>
<summary>onChangeText Example</summary>

~~~jsx
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const PizzaTranslator = () => {
    const [text, setText] = useState(' ')
    return (
        <View style={{padding: 10}}>
            <TextInput
                style=({height:40})
                placeholder = "Type here to translate"
                onChangeText = {newText => setText(newText)}
                defaultValue = { text }
            />
            <Text style = {{padding: 10, fontSize: 42}}> 
                { text.split(' ').map(word => word && 'pizza emoji').join(' ')}
            </Text>
        </View>
    )
}

export default PizzaTranslator
~~~

</details>

<details>
<summary>onSubmitChange Example</summary>

~~~jsx
import React, { useState } from 'react'
import { View, TextInput, Text, SyleSheet } from 'react-native'

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [submittedText, setSubmittedText] = useState('')

    const handleTextSubmit = () => {
        setSubmittedText(inputValue)
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Type here..."
                value={inputValue}
                onChangeText={setInputValue}
                onSubmitEditing={handleTextSubmit}
            />
            <Text style={styles.submittedText}> Submitted: {submittedText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flext: 1,
        justifyContent: 'center',
        padding: 16
    },
    input: {
        other styles
    },
    submittedText: {
        other styles
    }
})

export default App
~~~

</details>