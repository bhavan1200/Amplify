import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const ProfilePicture = ({uri, size = 70}) => {
  return (
    <View styl={[styles.container, {width: size + 6, height: size + 6}]}>
      <Image
        style={[styles.image, {width: size, height: size}]}
        source={{uri}}
      />
    </View>
  );
};

export default ProfilePicture;
