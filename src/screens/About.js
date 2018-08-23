import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Title, Text, Button, Icon, Left, Body, Right, View } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications'
export default class CardImageExample extends Component {
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
        <Content>
        <View style={{flex: 1, padding: 5}}>
             <Button onPress={() => Communications.web('https://www.facebook.com/ofabnigeria')}  primary block>
             <Ionicons color='white' name="logo-facebook" size={25} />
                <Text>Facabook</Text>
              </Button>
              </View>
             <View style={{flex: 1, padding: 5}}>
             <Button  onPress={() => Communications.web('https://twitter.com/ofabnigeria')} info block>
             <Ionicons color='white' name="logo-twitter" size={25} />
                <Text>Twitter</Text>
              </Button>
              </View>
              <View style={{flex: 1, padding: 5}}>
              <Button block danger>
              <Ionicons color='white'  name="logo-youtube" size={25} />
                <Text>Youtube</Text>
              </Button>
              </View>
              <View style={{flex: 1, padding: 5}}>
              <Button  bordered block info>
              <Ionicons color='white'  name="logo-instagram" size={25}/>
                <Text>instgram</Text>
              </Button>
              </View>
        </Content>
      </Container>
    );
  }
}