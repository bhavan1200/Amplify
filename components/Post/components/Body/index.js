import React from 'react'
import { Text, Image, View } from 'react-native';
import styles from "./styles"

const Body = ({imageUri}) => {
    return (
        <View>
            <Image style={styles.image} source={{uri: imageUri}} />
        </View>
    )
}

export default Body;
