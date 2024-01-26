import styled from 'styled-components/native';
import {Card} from '../../components/card';

export const Section = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ItemDescBox = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  flex: 1;
`;

export const Label = styled.View`
  padding: 4px 8px;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  gap: 10px;
  background-color: #e6f2ff;
`;

export const FlexBox = styled.View`
  width: 100%;
  display: flex;
  gap: 8px;
`;
export const ColumnGapBox = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ColumnBox = styled.View`
  display: flex;
  flex-direction: column;
`;
export const AlignCenterBox = styled.View`
  display: flex;
  align-items: center;
`;

export const NonShadowCard = styled(Card)`
  box-shadow: none;
  padding: 20px 16px;
`;

export const CardBox = styled(Section)`
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
