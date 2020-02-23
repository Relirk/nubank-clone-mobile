import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView).attrs({
  contentContainerStyle: { alignItems: 'center' },
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  overflow: hidden;
  background: #FFFFFF;
  padding: 4px;
`;

export const Nav = styled.View`
  margin-top: 30px;
  align-self: stretch;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.4)
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.4)
`;

export const NavText = styled.Text`
  font-size: 14px;
  color: #FFFFFF;
  margin-left: 10px
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 11px;
`;

export const Info = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const Bank = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const LowText = styled.Text`
  font-size: 12px;
  color: #FFFFFF;
  padding-right: 6px;
`;

export const HardText = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #FFFFFF;
`;
