import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function GoalItem({ details, onRemove }) {
  const { id, value } = details;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        onRemove(id);
      }}
    >
      <View style={styles.listItem}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 5
  }
};

export default GoalItem;
