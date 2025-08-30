import React from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { styles } from './Styles';

interface RatingProps {
    RatingSubject: string
  rating: number;
}

export function RatingComponent(props: RatingProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.ratingSubject}>{props.RatingSubject}</Text>
        {Array.from({ length: props.rating }, (_, i) => (
          <MaterialCommunityIcons key={i} name="star" size={24} color="#FFD700" />
        ))}
    </View>
  );
}