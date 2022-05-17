import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Background = styled.View`
  flex: 1;
  background-color: #e8e8e8;
`;

export const Button = styled.Pressable`
  width: 90%;
  margin: 5px;
  margin-left: 5%;
  flex-direction: row;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(18)}px;
  color: #393939;
  font-weight: 700;
`;

export const Image = styled.View`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
`;
