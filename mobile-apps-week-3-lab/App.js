import { View, Text, TextInput } from 'react-native';
import React, {useState} from 'react';
import Logo from './components/Logo';

export default function App() {
  const{fullname, setFullname} = useState("Eoin");
  const [lastname, setLastname] = useState("Kennedy");
  const [dob, setDob] = useState("22 August 1990");

  return(   
    <View>
      <Logo/>
      <Text>Hello, world {fullname}</Text>
      <TextInput placeholder="Enter your firstname" onChangeText={setFullname}/>
      <TextInput placeholder="Enter your lastname" onChangeText={setLastname}/>
      <TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>
      <Text>Hello {fullname} {lastname}. You were born on {dob}</Text>
      
    </View>
  )
    
}

