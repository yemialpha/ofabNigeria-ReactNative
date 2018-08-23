import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Body, Right, View, Text, Icon, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications'


export default class HeaderIconExample extends Component {
  render() {
    return (
      <Container>
      <Header style={{backgroundColor: '#a3f7ab'}}>
          <Left>
          <Button onPress={ () =>{ this.props.navigation.openDrawer()}} transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#122e49'}}>ofabNigeria</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content style={{backgroundColor: '#122e49'}}>
              <View style={{flex: 1, padding: 5}}>
              <Button  onPress={() => Communications.email(['ofabnigeria@gmail.com'],null,null,'Your Subject','Your body text')} bordered block light>
              <Ionicons color='white'  name="ios-at-outline" size={25}/>
                <Text>Email</Text>
              </Button>
             </View>
             <View style={{flex: 1, padding: 5}}>
              <Button  onPress={() => Communications.phonecall('+2348055604549', true)} bordered block warning>
              <Ionicons color='white'  name="ios-call-outline" size={25}/>
                <Text>Phone</Text>
              </Button>
             </View>
          </Content> 

      </Container>
    );
  }
}