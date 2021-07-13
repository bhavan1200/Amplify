import React from 'react'
import { View } from 'react-native';
import Body from "./components/Body/index"
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"

const index = ({post}) => {
    return (
        <View>
            <Header imageUri={post.user.imageUri} name={post.user.name} />
            <Body imageUri={post.imageUri} />
            <Footer
             likesCount={post.likesCount}
             caption={post.caption}
             postedAt={post.postedAt} 
            />
            
        </View>
    )
}

export default index
