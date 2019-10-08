import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Button,
  FlatList,
  Modal
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAdd, setIsAdd] = useState(false);

  const handlePress = inputGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: inputGoal }
    ]);
    setIsAdd(false);
  };

  const handleRemoveGoal = id =>
    setCourseGoals(currentGoals => courseGoals.filter(goal => goal.id !== id));

  const hasCourseGoals = courseGoals.length > 0;
  return (
    <View style={styles.screen}>
      <Modal
        visible={isAdd}
        animationType="slide"
        onRequestClose={() => setIsAdd(false)}
      >
        <GoalInput
          onAddGoal={handlePress}
          onCancelGoal={() => setIsAdd(false)}
        />
      </Modal>
      <Button title="Add Goal" onPress={() => setIsAdd(true)} />
      {hasCourseGoals ? (
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={({ item }) => (
            <GoalItem details={item} onRemove={handleRemoveGoal} />
          )}
        />
      ) : (
        <Text style={styles.noDataLabel}>No course goals yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  noDataLabel: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 10
  }
});
