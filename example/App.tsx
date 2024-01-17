import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativePedometer from 'react-native-pedometer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativePedometer.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
