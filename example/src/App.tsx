import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CircleChart } from 'react-native-circle-chart';

export default function App() {
  const [progress, setProgress] = React.useState(0);

  return (
    <View style={styles.container}>
      <CircleChart
        progress={progress}
        style={{ width: 200, height: 200 }}
        barSize={5}
        size={100}
        label={100}
        duration={500}
        subLabelText="3 days left"
      />
      <TouchableOpacity
        onPress={() => {
          setProgress(20);
        }}
      >
        <Text>Set progress to 50</Text>
      </TouchableOpacity>
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
