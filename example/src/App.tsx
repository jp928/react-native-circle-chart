import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleChart from 'react-native-circle-chart';

export default function App() {
  return (
    <View style={styles.container}>
      <CircleChart style={{ width: 200, height: 200 }} />
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
