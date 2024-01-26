import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CardBottomProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function CardBottom({children}: CardBottomProps) {
  return <View style={styles.CardBottom}>{children}</View>;
}

const styles = StyleSheet.create({
  CardBottom: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
