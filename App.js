import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Bird from './src/components/Bird';
import { useEffect, useState } from 'react';

export default function App() {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  const [birdColor, setBirdColor] = useState('red');
  const birdLeft = screenWidth / 2;

  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const gravity = 3;

  let gameTimerId;

  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity);
      }, 300);
    }

    return () => {
      clearInterval(gameTimerId);
    };
  }, [birdBottom]);

  const jump = () => {
    setBirdBottom(birdBottom => birdBottom + 50);
  };


  return (
    <TouchableWithoutFeedback onPress={jump}>
      <View style={styles.container}>
        <Bird 
          birdBottom={birdBottom} 
          birdLeft={birdLeft} 
          birdColor={birdColor}
        />
      </View>
    </TouchableWithoutFeedback>
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
