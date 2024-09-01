import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, Alert } from 'react-native';
import FeedButton from './FeedButton';
import CountdownTimer from './CountdownTimer';
import ResetButton from './ResetButton';

export default function App() {
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [lastPressTime, setLastPressTime] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (lastPressTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - lastPressTime;
      const twentyFourHours = 24 * 60 * 60 * 1000;

      if (elapsedTime < twentyFourHours) {
        setIsButtonDisabled(true);
        const timeRemaining = twentyFourHours - elapsedTime;

        timeoutRef.current = setTimeout(() => {
          setIsButtonDisabled(false);
        }, timeRemaining);
      } else {
        setIsButtonDisabled(false);
      }
    }
  }, [lastPressTime]);

  const handlePress = () => {
    if (!isButtonDisabled) {
      setIsCountdownActive(true);
      setLastPressTime(new Date().getTime());
    } else {
      Alert.alert('You must wait 24 hours before pressing again.');
    }
  };

  const handleCountdownComplete = () => {
    setIsCountdownActive(false);
  };

  const handleReset = () => {
    setIsCountdownActive(false);
    setLastPressTime(null);
    setIsButtonDisabled(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const avatar = require('./../assets/avatar-1.png');
  const logo = require('./../assets/ikigotchi-logo.png')

  return (
    <>
      <View className="w-full items-center bg-green-400">
        <Image source={logo} className="w-32 h-32" resizeMode="contain"/>
      </View>
    <View className="flex-1 items-center justify-center bg-green-400">
      <View>
        <Text className="text-2xl font-bold">"You got this"</Text>
      </View>
      <View>
        <Image
          source={avatar}
          className="w-20 h-20"
          />
      </View>
      <Text>Day: 0</Text>
      <CountdownTimer start={isCountdownActive} onComplete={handleCountdownComplete} />
      <FeedButton onPress={handlePress} disabled={isButtonDisabled} />
      <ResetButton onPress={handleReset} />
    </View>
    </>
  );
}
