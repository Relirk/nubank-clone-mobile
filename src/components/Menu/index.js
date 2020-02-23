import React from 'react';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  // eslint-disable-next-line import/named,max-len
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
  Info,
  Bank,
  LowText,
  HardText,
} from './styles';

// eslint-disable-next-line react/prop-types
export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}
    >
      <Code>
        <QRCode value="http://rocketseat.com.br" size={100} fgColor="#FFFFFF" bgColor="#8B10AE" />
      </Code>

      <Info>
        <Bank>
          <LowText>Banco</LowText>
          <HardText>260 - Nu Pagamentos S.A</HardText>
        </Bank>
        <Bank>
          <LowText>Agência</LowText>
          <HardText>0001</HardText>
        </Bank>
        <Bank>
          <LowText>Conta</LowText>
          <HardText>6988551-0</HardText>
        </Bank>
      </Info>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={25} color="#FFFFFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={25} color="#FFFFFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="monetization-on" size={25} color="#FFFFFF" />
          <NavText>Configurar NuConta</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={25} color="#FFFFFF" />
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="card-giftcard" size={25} color="#FFFFFF" />
          <NavText>Configurar Rewards</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={25} color="#FFFFFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
