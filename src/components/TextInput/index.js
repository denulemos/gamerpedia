import * as React from 'react';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
  const [text, setText] = React.useState('');

  function textHandler(value){
    
    setText(value)
    props.handle(value)
  }
  return (
    <TextInput
      label={props.label}
      type={'outlined'}
      value={text}
      onChangeText={text => setText(text)}
      secureTextEntry = {props.secure}
      style= {props.style}
      onChangeText= {textHandler}

    />
  );
};

export default Input;