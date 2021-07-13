import React from 'react';
import { Text, View } from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import styles  from './styles';

const Footer = ({imageUri, name}) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri} size={40}  />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Footer
