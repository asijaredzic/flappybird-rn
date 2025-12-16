import React from 'react';
import { Text, View } from 'react-native';

const Obstacles = ({
    color,
    obstacleWidth,
    obstacleHeight,
    randomBotton,
    gap,
    obstaclesLeft,
}) => (
    <>
        <View style={{
            position: 'absolute',
            backgroundColor: color,
            width: obstacleWidth,
            height: 500,
            left: obstaclesLeft,
            bottom: randomBotton + obstacleHeight + gap
        }}></View>

        <View style={{
            position: 'absolute',
            backgroundColor: color,
            width: obstacleWidth,
            height: obstacleHeight,
            left: obstaclesLeft,
            bottom: randomBottom,
        }}></View>
    </>
);

export default Obstacles;
