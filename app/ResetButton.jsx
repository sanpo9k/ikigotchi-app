import React from 'react';
import { Pressable, Text } from 'react-native';

const ResetButton = ({ onPress }) => {
  return (
    <Pressable 
      onPress={onPress} 
      className=" mt-7 rounded"
    >
      <Text className="text-white text-center">Reset progress</Text>
    </Pressable>
  );
};

export default ResetButton;
