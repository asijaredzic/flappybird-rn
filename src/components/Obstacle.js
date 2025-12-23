import React from 'react';
import { Text, View, Image } from 'react-native';

const Obstacles = ({
    color,
    obstacleWidth,
    obstacleHeight,
    randomBotton,
    gap,
    obstaclesLeft,
}) => (
    <>
        <Image style={{
            position: 'absolute',
            backgroundColor: color,
            width: obstacleWidth,
            height: 500,
            left: obstaclesLeft,
            bottom: randomBotton + obstacleHeight + gap
        }}
        source={require('../../assets/pipe.png')}
        ></Image>

        <Image style={{
            position: 'absolute',
            backgroundColor: color,
            width: obstacleWidth,
            height: obstacleHeight,
            left: obstaclesLeft,
            bottom: randomBottom,
        }}
        source={require('../../assets/pipe.png')}
        ></Image>
    </>
);

export default Obstacles;
