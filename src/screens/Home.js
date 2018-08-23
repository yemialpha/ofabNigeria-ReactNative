import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, View } from 'native-base';
import Swiper from '../components/swiper'
import Tabs from '../components/Tab'


export default class HeaderExample extends Component {
 
  render() {
    return (
      <View style={{flex:1}}>
        <Header style={{backgroundColor: '#98d6b0'}}>
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
          <View style={{flex: 1}}>
          <Swiper/>
          <Tabs/>
          </View>
      </View>
    );
  }
}