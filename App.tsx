import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor:'red'}}
      >
        <Text>React native sample project for uikit</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
