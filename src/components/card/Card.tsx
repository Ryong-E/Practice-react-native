import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  color?: string;
  children: React.ReactNode;
}
export function Card({children}: CardProps) {
  return <View style={styles.CardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  CardContainer: {
    flex: 1,
    width: '100%',
    padding: 24,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    gap: 24,
  },
});
