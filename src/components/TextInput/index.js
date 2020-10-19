import * as React from "react";
import {TextInput} from "react-native-paper";

const Input = (props) => {
  const [text, setText] = React.useState("");

  const textHandler = (value) => {
    setText(value);
    props.handle(value);
  };
  return (
    <TextInput
      caretHidden={true}
      value={text}
      onChangeText={(text) => setText(text)}
      secureTextEntry={props.secure}
      style={{marginLeft: 50, marginRight: 50}}
      placeholder={props.label}
      keyboardType={props.type}
      onChangeText={textHandler}
      inputStyle={{color: "grey"}}
      underlineColor="white"
    />
  );
};

export default Input;
