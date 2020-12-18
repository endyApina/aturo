import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

const EntryScreen = () => {
  return (
    <SafeAreaView> 
      <View> 
        <Text>
          {"Entry"}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default React.memo(EntryScreen)