import React from 'react';

import { styles } from './Styles';
import { Image } from 'react-native';

export function ProfilePicture() {
  return (
    <Image
        source={require('../../../assets/profile.png')}
        style={styles.profilePic}
        resizeMode="contain"
      />
  );
}