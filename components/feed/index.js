import React from 'react';
import { FlatList } from 'react-native';
import Post from "../Post/index"


const data = [{
    user:{
      imageUri:"https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
      name: "Alex"
    },
    imageUri: "https://picsum.photos/200/300",
    caption: "Beutiful People",
    likesCount: 5648,
    postedAt: "6 minutes Ago"
  
    
  },
{
    user:{
      imageUri:"https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
      name: "Alex"
    },
    imageUri: "https://picsum.photos/200/300",
    caption: "Beutiful People",
    likesCount: 5648,
    postedAt: "6 minutes Ago"
  
    
  },
 {
    user:{
      imageUri:"https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
      name: "Alex"
    },
    imageUri: "https://picsum.photos/200/300",
    caption: "Beutiful People",
    likesCount: 5648,
    postedAt: "6 minutes Ago"
  
    
  }]

const Feed = () => {
    return (
        <FlatList 
          data={data}
          renderItem={({item}) => <Post post={item} />}
        />
            
    )
}

export default Feed
