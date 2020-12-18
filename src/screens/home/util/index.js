import React from 'react'; 
import { Button, Text, View } from 'react-native';

const WelcomeText = () => {
  return (
    <View> 
      <Text> 
        Welcome
      </Text>
      <Text> 
        The Rooftop Lifestyle Gym
      </Text>
    </View>
  )
}

const EnterNameButton = () => {
  return (
    <Button>
      <Text>
        Enter
      </Text>
    </Button>
  )
}
