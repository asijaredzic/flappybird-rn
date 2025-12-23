import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
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
  
  const[isGameOver, setIsGameOver] = useState(false)
  const[score, setScore] = useState(0)

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

  // jump behaviour
  const jump = () => {
    if (!isGameOver && (birdBottom < screenHeight)) {
      setBirdBottom(birdBottom => birdBottom + 50)
      console.log("jumped")
    }
  }

  // collision check
  useEffect(() => {
    if (
    ((birdBottom < (obstacleNegHeight + obstacleHeight + 30) ||
    birdBottom > (obstacleNegHeight + obstacleHeight + gap -30 )) &&
    (obstaclesLeft > screenWidth/2 -30 && obstaclesLeft < screenWidth/2 + 30)
    )
    ||
    ((birdBottom < (obstacleNegHeightTwo + obstacleHeight + 30) ||
    birdBottom > (obstacleNegHeightTwo + obstacleHeight + gap -30 )) &&
    (obstaclesLeft > screenWidth/2 -30 && obstaclesLeft < screenWidth/2 + 30)
    )
    )
    {
      console.log("Game Over")
      gameOver()
    }
  })

  // game over function
  const gameOver = () => {
    clearInterval(gameTimerId)
    clearInterval(obstacleTimerId)
    clearInterval(obstacleTimerIdTwo)
    setIsGameOver(true);
  }

 return (
    <TouchableWithoutFeedback onPress={jump}>
      <View style={styles.container}>
        <Image source={require('./assets/background.png')} style={styles.backgroundImage} />
        <Text style={styles.score}>Score: {score}</Text>
        
        <Bird 
          birdBottom = {birdBottom} 
          birdLeft = {birdLeft}
        />
        <Obstacle 
          color={'green'}
          obstacleWidth = {obstacleWidth}
          obstacleHeight = {obstacleHeight}
          randomBottom = {obstaclesNegHeight}
          gap = {gap}
          obstaclesLeft = {obstaclesLeft}
        />
        <Obstacle 
          color={'yellow'}
          obstacleWidth = {obstacleWidth}
          obstacleHeight = {obstacleHeight}
          randomBottom = {obstaclesNegHeightTwo}
          gap = {gap}
          obstaclesLeft = {obstaclesLeftTwo}
        />
      </View>
    </TouchableWithoutFeedback>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  score: {
    fontSize: 32,
    top: 50,
    position: 'absolute',
    zIndex: 1,
    color: 'white'
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
