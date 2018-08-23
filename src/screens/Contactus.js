import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Body, Right, View, Text, CardItem, Icon, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications'


export default class HeaderIconExample extends Component {
  render() {
    return (
      <Container>
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
        <Content style={{backgroundColor: '#122e49'}}>
            <View>
            <CardItem bordered style={{backgroundColor: '#122e50'}} >
            <Left>
              <Body>
                <Title style={{color: 'white'}}>OFAB Nigeria</Title>
               <Text note> National Biotechnology Development Agency(NABDA)</Text>
               <Text note> Umar Musa Yar’adua Way, Lugbe,</Text>
               <Text note> Email:ofabnigeria@gmail.com</Text>
               <Text note> Facebook:www.facebook.com/ofabnigeria</Text>
               <Text note> Twitter:@ofabnigeria</Text>
               <Text note> Phone:+2348055604549,+2347052345766</Text>
               <Text note> P.M.B.5118,</Text>
               <Text note> Wuse, Abuja</Text>
               <Text note> Federal Capital Territory</Text>
               <Text note> info@ofabnigeria.com</Text>
               </Body>
               </Left>
                </CardItem>
            </View>
              <View style={{flex: 1, padding: 5}}>
              <Button  onPress={() => Communications.email(['ofabnigeria@gmail.com'],null,null,'Your Subject','Your body text')} 
              bordered block primary>
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