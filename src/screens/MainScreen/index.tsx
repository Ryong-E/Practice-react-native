/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  ScrollViewComponent,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import CustomText from '../../components/Text';
import {CardBox, ItemDescBox, NonShadowCard, Section} from './style';
import {Card} from '../../components/card';
import React from 'react';

export default function MainScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
      <ScrollView style={{flex: 1}}>
        <Button title="Detail" onPress={() => navigation.navigate('Details')} />
        <ReasonSection />
      </ScrollView>
    </SafeAreaView>
  );
}

function ReasonSection() {
  return (
    <View style={styles.Section}>
      <CustomText fontStyle="title100" fontSize="xl" fontWeight="bold">
        폰고를 이용해야 하는 이유
      </CustomText>
      <CardBox>
        <NonShadowCard color="#EFEFF1">
          <Card.CardBody>
            <Image
              style={{width: 48, height: 48}}
              source={require('../../assets/lowPrice.png')}
            />
            <ItemDescBox>
              <CustomText
                fontStyle="title200"
                color="gray700"
                fontWeight="bold">
                부담 없는 가격
              </CustomText>
              <CustomText
                fontStyle="label200"
                color="gray500"
                fontWeight="regular">
                새 제품과 동일 기능이지만, 최대 60% 저렴한 최고 가성비
              </CustomText>
            </ItemDescBox>
          </Card.CardBody>
        </NonShadowCard>
        <NonShadowCard color="#EFEFF1">
          <Card.CardBody>
            <Image
              style={{width: 48, height: 48}}
              source={require('../../assets/quality.png')}
            />
            <ItemDescBox>
              <CustomText
                fontStyle="title200"
                color="gray700"
                fontWeight="bold">
                최고의 품질
              </CustomText>
              <CustomText
                fontStyle="label200"
                color="gray500"
                fontWeight="regular">
                폰고 파트너스 전문 테크니션의 완벽한 기기 재정비
              </CustomText>
            </ItemDescBox>
          </Card.CardBody>
        </NonShadowCard>
        <NonShadowCard color="#EFEFF1">
          <Card.CardBody>
            <Image
              style={{width: 48, height: 48}}
              source={require('../../assets/calendar.png')}
            />
            <ItemDescBox>
              <CustomText
                fontStyle="title200"
                color="gray700"
                fontWeight="bold">
                폰고 케어
              </CustomText>
              <CustomText
                fontStyle="label200"
                color="gray500"
                fontWeight="regular">
                폰고에서 12개월 무상 보증까지 *기기/모델 별 기간이 상이할 수
                있음
              </CustomText>
            </ItemDescBox>
          </Card.CardBody>
        </NonShadowCard>
        <NonShadowCard color="#EFEFF1">
          <Card.CardBody>
            <Image
              style={{width: 48, height: 48}}
              source={require('../../assets/earth.png')}
            />
            <ItemDescBox>
              <CustomText
                fontStyle="title200"
                color="gray700"
                fontWeight="bold">
                지구에 착한 리퍼기기
              </CustomText>

              <CustomText
                fontStyle="label200"
                color="gray500"
                fontWeight="regular">
                폰고의 리퍼기기를 사용하면 탄소 배출을 크게 줄일 수 있어요
              </CustomText>
            </ItemDescBox>
          </Card.CardBody>
        </NonShadowCard>
      </CardBox>
    </View>
  );
}

const styles = StyleSheet.create({
  Section: {
    flexGrow: 1,
    gap: 16,
  },
  ItemDescBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-start',
    flex: 1,
  },
  Label: {
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    gap: 10,
    backgroundColor: '#e6f2ff',
  },
  FlexBox: {
    width: '100%',
    display: 'flex',
    gap: 8,
  },
  ColumnGapBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  ColumnBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  NonShadowCard: {
    padding: 20,
  },
  CardBox: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
});
