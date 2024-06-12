# Introduction

It is a javascript framework to build out apps for web, ios, and andriod. The framework provides API's/Components that we use to build these apps. The main idea of how this works is that we are essentially only writing JSX, and that code gets compiled into ```native views```; all the while the logic itself is not compiled. <br>

Here are some links to read about how it works:
<ul>
    <li><a href="https://www.linkedin.com/pulse/compilation-process-react-native-rohit-bansal#:~:text=When%20a%20developer%20writes%20code,called%20the%20React%20Native%20CLI.&text=The%20React%20Native%20CLI%20uses,loaded%20by%20the%20native%20code.">Short summary of architecture</a></li>
</ul> 


#### Creating a New Project

We would need to ensure we have the correct setup locally for building these apps. As per React Documentaion I will be using Expo (another react framework), which will allows us to test and run our apps. We can follow this guide on how to setup your environment:
<ul>
    <li><a href="https://reactnative.dev/docs/environment-setup">React Native Docs: Environment Setup</a></li>
</ul> 

Once we have all this ready you should be able to create a project with this command:
```npx create-expo-app --template blank appName```.

Next you should be able to run ```npx expo start``` which will start the expo server; thus allows us to run our app. 
