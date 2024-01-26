import {useRoute} from '@react-navigation/native';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import {HeaderLogo} from './HeaderLogo';
import React from 'react';
import {BackButton} from './BackButton';

export function Header() {
  const {name} = useRoute();
  return (
    <SafeAreaView>
      <View style={styles.Header}>
        {name !== 'Home' ? <BackButton /> : null}
        <HeaderLogo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 8,
    marginTop: Platform.OS === 'android' ? 10 : 0,
  },
});
