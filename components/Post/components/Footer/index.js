import React from 'react'
import { Text, View } from 'react-native';
import styles from "./styles"

const Footer = ({likesCount, caption, postedAt}) => {
    return (
        <View>
            <Text style={styles.likes}>{likesCount}</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}

export default Footer
