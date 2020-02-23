import { Animated } from 'react-native';
import styled from 'styled-components/native';
// import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  justify-content: center;
`;
// padding-top: ${getStatusBarHeight()}px;
export const Content = styled.View`
  flex: 1;
  max-height: 370px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #FFFFFF;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-bottom: 0;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
 font-size: 15px;
 color: #616161;
`;

export const Description = styled.Text`
  font-size: 36px;
  margin-top: 3px;
  color: #333333;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #EEEEEE;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size:12px;
  color: #333;
`;
