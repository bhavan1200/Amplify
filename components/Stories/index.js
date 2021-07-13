import React from 'react'
import { View, FlatList } from 'react-native';
import Story from './Story';
import styles from "./styles"

const data = [
    {
        imageUri:"https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        name: "Alex"
    },
    {
        imageUri: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        name: "John"
    },
    {
        imageUri: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        name: "Bh1"
    }
]

const Stories = () => {
    return (
        
            <FlatList
               data={data}
               keyExtractor={({name}) => name}
               horizontal
               style={styles.container}
               renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
            />
            
        
    )
}

export default Stories;
