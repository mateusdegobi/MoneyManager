import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Header = styled.View`
  width: 100%;
  background-color: #303030;
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: #e3e3e3;
  font-weight: 500;
`;
export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: #fefefe;
  font-weight: bold;
`;

export const InterativeUnderlineArea = styled.Pressable`
  width: 100%;
  align-items: center;
`;

export const Underline = styled.View`
  width: 15%;
  background-color: #e3e3e3;
  height: 4px;
  border-radius: 2px;
  margin-top: 20px;
  margin-bottom: -10px;
`;
