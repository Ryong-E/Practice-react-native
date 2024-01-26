import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export function BackButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Image
          style={styles.Image}
          source={require('../../../src/assets/chevron-left.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 30,
  },
  Image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
