import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export function HeaderLogo() {
  return (
    <View>
      <Image
        style={styles.HeaderLogo}
        source={require('../../../src/assets/slash.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderLogo: {
    width: 100,
    height: 30,
    objectFit: 'cover',
  },
});
