import * as React from 'react';
import { Input } from 'react-native-elements';

const TextInput = (props) => {
  const [text, setText] = React.useState('');

  function textHandler(value){
    
    setText(value)
    props.handle(value)
  }
  return (
   
    <Input
    value={text}
      onChangeText={text => setText(text)}
      secureTextEntry = {props.secure}
     style= {props.style}
  placeholder={props.label}
  onChangeText= {textHandler}
  inputStyle={{color: 'grey'}}
/>
  );
};

export default TextInput;