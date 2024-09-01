import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const FeedButton = ({ onPress, disabled }) => {
  return (
    <TouchableOpacity 
      className={`mt-4 py-2 px-4 rounded ${disabled ? 'bg-gray-400' : 'bg-blue-500'}`} 
      onPress={onPress}
      disabled={disabled}
    >
      <Text className="text-white font-bold">{disabled ? 'Wait 24 Hours' : 'Feed'}</Text>
    </TouchableOpacity>
  );
};

export default FeedButton;
