import React, { useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

function GoalInput({ onAddGoal }) {
  const [inputGoal, setInputGoal] = useState('');

  const handleChange = value => setInputGoal(value);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={handleChange}
        value={inputGoal}
      />
      <Button
        title="Add"
        onPress={() => {
          onAddGoal(inputGoal);
          setInputGoal('');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: '#000',
    borderWidth: 1,
    width: '80%',
    padding: 10
  }
});

export default GoalInput;
