# Intro to components

In app development (ios/andriod) we have a concept of  a  ```view``` which serves as the basic building block for our apps. Using React Native we can use JSX which at runtime will create andriod/ios views from our react native components.  (AKA Native Components). We will also have the capability to build our own react native components. 

Here are some components we will have available to us. More can be reviewed here in the React Native official docs: <a href="https://reactnative.dev/docs/components-and-apis">React Native Docs - Core Components/API's</a>
<ul>
    <li> < View /> </li>
    <li> < Text /></li>
    <li> < Image /> </li>
    <li> < TextInput /> </li>
    <li> < ScrollView /> </li>
    <li> const styles - StyleSheet.create({ containerName: {cssStyling: 0px} }) </li>
    <li> < Button /> </li>
    <li> < Switch /> </li>
    <li> < FlatList /> </li>
    <li> < SectionList /> </li>
</ul>

Generally speaking, when building with react components we are using Rwact Native components which are comprised of: 
<ul>
    <li>Community Components</li>
    <li>Core Components</li>
    <li>Custom Native Components</li>
</ul>

## Using a Component
We need to import every component we will need for each .js file. For example:

```jsx
import React from 'react'
import { Text, Button, TextInput } from 'react-native'

const Cat = () => {
    return <Text> Hello, i'm a cat! </Text>
}

export default Cat
```

