import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, Top, Logo, Title, TopFooter,
} from './styles';
import logo from '../../assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Francisco José Olvera Junior</Title>
      </Top>
      <TopFooter>
        <Icon name="keyboard-arrow-down" size={20} color="#FFFFFF" />
      </TopFooter>
    </Container>
  );
}
