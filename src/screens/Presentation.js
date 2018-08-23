import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Body, Right, View, List, ListItem, Thumbnail, Text, Icon, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class HeaderIconExample extends Component {
  static navigationOptions = { 
    drawerIcon: ({tintColor}) => (
      <Ionicons name="ios-people" color={tintColor} size={24} />
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
        <Content>
        <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/my-library-cca25.appspot.com/o/AA%20LOGO.jpg?alt=media&token=29b94161-ebaa-4272-af81-da50f974e6ec' }} />
              </Left>
              <Body>
                <Text style={{color: '#70b9ff'}}>African Agricultural Technology Foundation</Text>  
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/my-library-cca25.appspot.com/o/NABDA%20LOGO.png?alt=media&token=690b6d87-3ff2-417e-8227-885c09d18478' }} />
              </Left>
              <Body>
                <Text style={{color: '#70b9ff'}}>National Biotechnology Development Agency</Text>  
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          </Content> 
      </Container>
    );
  }
}