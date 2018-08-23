import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Body, Right, View, Text, Icon, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications'


export default class HeaderIconExample extends Component {
  static navigationOptions = { 
    drawerIcon: ({tintColor}) => (
      <Ionicons name="md-planet" color={tintColor} size={24} />
    )
  }

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
        <Content style={{backgroundColor: '#122e40'}}>
          <View style={{flex: 1, padding: 5}}>
             <Button onPress={() => Communications.web('http://www.ofabnigeria.com/news')}  primary block>
             <Ionicons color='white' name="md-planet" size={25} />
                <Text>News&Event</Text>
              </Button>
              </View>
             <View style={{flex: 1, padding: 5}}>
             <Button onPress={() => Communications.web('http://www.ofabnigeria.com/presentations')} info block>
             <Ionicons color='white' name="ios-book-outline" size={25} />
                <Text>Presentation</Text>
              </Button>
              </View>
              <View style={{flex: 1, padding: 5}}>
              <Button onPress={() => Communications.web('http://www.ofabnigeria.com/resource/')} block danger>
              <Ionicons color='white'  name="logo-buffer" size={25} />
                <Text>Resources</Text>
              </Button>
              </View>
              <View style={{flex: 1, padding: 5}}>
              <Button onPress={() => Communications.web('http://www.ofabnigeria.com/blog')}  block warning>
              <Ionicons color='white'  name="ios-ribbon" size={25}/>
                <Text>Blog</Text>
              </Button>
              </View>
              <View style={{flex: 1, padding: 5}}>
              <Button onPress={() => Communications.web('http://www.ofabnigeria.com/ofabnews/preview')} block dark>
              <Ionicons color='white'  name="md-paper" size={25}/>
                <Text>NewsLetter</Text>
              </Button>
             </View>
          </Content> 

      </Container>
    );
  }
}