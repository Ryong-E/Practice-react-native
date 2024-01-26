import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CardBodyProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export function CardBody({children}: CardBodyProps) {
  return <View style={styles.CardBody}>{children}</View>;
}

const styles = StyleSheet.create({
  CardBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
});
