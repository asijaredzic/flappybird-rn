import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Bird from './src/components/Bird';
import { useEffect, useState } from 'react';
import Obstacles from './src/components/Obstacle';

export default function App() {
  const [birdColor, serBirdColor] = useState('red');

  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  const [obstaclesLeft, setObstaclesLeft ] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo ] = useState(
    screenWidth + screenHeight / 2 + 30
  );
  const [obstacleNegHeight, setObstacleNegHeight] = useState(0);
  const [obstacleNegHeightTwo, setObstacleNegHeightTwo] = useState(0);
  let obstacleWidth = 60;
  let obstacleHeight = 300;
  let gap = 200;

  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const gravity = 3;

  let gameTimerId;
  let obstacleTimerId;

  useEffect(() => {
    if (obstaclesLeft > -60) {
      obstacleTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft = obstaclesLeft - 5)
      }, 30)
      return () => {
        clearInterval(obstacleTimerId);
      };
    } else {
      setObstaclesLeft(screenWidth);
      setObstacleNegHeight(- Math.random * 100);
    }
  }, [obstaclesLeft]);

  useEffect(() => {
    if (obstaclesLeft > -60) {
      obstacleTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeft = obstaclesLeft - 5)
      }, 30)
      return () => {
        clearInterval(obstacleTimerIdTwo);
      };
    } else {
      setObstaclesLefTwo(screenWidth);
      setObstacleNegHeightTwo(- Math.random * 100);
    }
  }, [obstaclesLeftTwo]);

  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 300)
    }
  
    return () => {
      clearInterval(gameTimerId);
    };
  }, [birdBottom]);

  return (
    <View style={styles.container}>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} birdColor={birdColor}/>
    
      <Obstacles 
        color={'green'}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBotton={obstacleNegHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeft}
      />

      <Obstacles 
        color={'yellow'}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBotton={obstacleNegHeightTwo}
        gap={gap}
        obstaclesLeft={obstaclesLeftTwo}
      />
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
