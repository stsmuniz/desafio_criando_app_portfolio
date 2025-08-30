import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Styles';
import { ProfilePicture } from '../ProfilePicture/Index';

interface ProfileProps {
  name: string;
  title: string;
}

export function ProfileSection(props: ProfileProps) {
  return (
    <View style={styles.profilePicContainer}>
        <ProfilePicture />
        <View style={styles.nameContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.bio}>{props.title}</Text>
        </View>
    </View>
  );
}