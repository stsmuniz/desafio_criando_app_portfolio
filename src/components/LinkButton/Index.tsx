import React from 'react';
import { Linking, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { styles } from './Styles';

interface LinkButtonProps {
  title: string;
  url: string;
  icon?: string;
}

export function LinkButton(props: LinkButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => Linking.openURL(props.url)}
    >
      {props.icon && (
        <MaterialCommunityIcons
          name={props.icon}
          size={24}
          color="white"
          style={styles.icon}
        />
      )}
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}