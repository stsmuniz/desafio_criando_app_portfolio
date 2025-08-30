import React from 'react';
import { View } from 'react-native';

import { styles } from './Styles';
import { LinkButton } from '../../components/LinkButton/Index';
import { ProfileSection } from '../../components/ProfileSection/Index';

export function Index() {
  return (
    <View style={styles.container}>
      <ProfileSection name="Salustiano Muniz" title="Full Stack Developer" />
      <View style={styles.buttonsContainer}>
        <LinkButton
          title="GitHub"
          url="https://github.com/stsmuniz"
          icon="github"
        />
        <LinkButton
          title="LinkedIn"
          url="https://linkedin.com/in/salustiano.muniz"
          icon="linkedin"
        />
        <LinkButton
          title="Email"
          url="mailto:stsmuniz@gmail.com"
          icon="email"
        />
      </View>
    </View>
  );
}