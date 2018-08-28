import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Title, Text, Button, Icon, Left, Body, Right, View } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications'
export default class CardImageExample extends Component {
    static navigationOptions = { 
        drawerIcon: ({tintColor}) => (
          <Ionicons name="md-help" color={tintColor} size={24} />
        )
      }

  render() {
    return (
      <Container>
     <Header style={{backgroundColor: '#98d6b0'}}>
          <Left>
          <Button onPress={ () =>{ this.props.navigation.openDrawer()}} transparent>
              <Icon style={{color: 'black'}} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#122e49'}}>FAQ</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
       
        </Content>
      </Container>
    );
  }
}