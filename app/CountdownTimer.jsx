import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const CountdownTimer = ({ start, onComplete }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (start) {
      setTime(86400); 
    }
  }, [start]);

  useEffect(() => {
    let timer;
    if (start && time > 0) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      onComplete();
    }

    return () => clearInterval(timer);
  }, [start, time]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <View>
      <Text className="text-2xl font-bold">{formatTime(time)}</Text>
    </View>
  );
};

export default CountdownTimer;
