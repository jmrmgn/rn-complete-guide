import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const handlePress = inputGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: inputGoal }
    ]);
  };

  const handleRemoveGoal = id =>
    setCourseGoals(currentGoals => courseGoals.filter(goal => goal.id !== id));

  const hasCourseGoals = courseGoals.length > 0;
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={handlePress} />
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
    fontStyle: 'italic'
  }
});
