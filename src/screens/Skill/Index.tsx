import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Styles';
import { ProfileSection } from '../../components/ProfileSection/Index';
import { RatingComponent } from '../../components/RatingComponent/Index';

export function Skill() {
  return (
    <View style={styles.container}>
      <ProfileSection name="Salustiano Muniz" title="Full Stack Developer" />
      <View style={styles.ratingsContainer}>
        <Text style={styles.ratingTitle}>Avaliações</Text>
        <RatingComponent RatingSubject="React" rating={4} />
        <RatingComponent RatingSubject="Node.js" rating={5} />
        <RatingComponent RatingSubject="TypeScript" rating={3} />
      </View>
    </View>
  );
}