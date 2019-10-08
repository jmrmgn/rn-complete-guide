import React, { useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

function GoalInput({ onAddGoal, onCancelGoal }) {
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
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Cancel" color="red" onPress={onCancelGoal} />
        </View>
        <View style={styles.button}>
          <Button
            title="Add"
            onPress={() => {
              onAddGoal(inputGoal);
              setInputGoal('');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: '#000',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
