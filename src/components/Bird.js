import React from 'react';
import { View } from 'react-native';

const Bird = ({ birdBottom, birdLeft, birdColor }) => {
    const birdWidth = 50;
    const birdHeight = 50;

    return (
        <Image 
            style={{
                position: 'absolute',
                width: birdWidth,
                height: birdHeight,
                left: birdLeft - birdWidth / 2,
                bottom: birdBottom - birdHeight / 2,
            }}
        source={require('../../assets/bird1.png')}
        resizeMode="stretch"
        ></Image>
    );
};

export default Bird;
