import { View, Text, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
import Logo from './components/Logo';

export default function App() {
  const{fullname, setFullname} = useState("Eoin");
  const [lastname, setLastname] = useState("Kennedy");
  const [dob, setDob] = useState("22 August 1990");

  function buttonClicked() {
    //Alert.alert("button clicked"); //This works on a mobile phone
    alert("button clicked"); // this works on the web version - try uncommenting one or the other lines as necessary
}

  return(   
    <View>
      <Logo/>
      <Text>Hello, world {fullname}</Text>
      <TextInput placeholder="Enter your firstname" onChangeText={setFullname}/>
      <TextInput placeholder="Enter your lastname" onChangeText={setLastname}/>
      <TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>
      <Text>Hello {fullname} {lastname}. You were born on {dob}</Text>

      <Button title="SUBMIT" onPress={buttonClicked}/>
      
    </View>
  )
    
}

