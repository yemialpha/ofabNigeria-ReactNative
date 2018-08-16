import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Title, Text, Button, Icon, Left, Body, Right, View } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
            <CardItem style={{backgroundColor: '#122e49'}}>
              <Left>
                <Body>
                  <Text style={{color: 'white'}}>About Us</Text>
                  <Text note>
                    A knowledge sharing initiative by African Agricultural Technology Foundation (AATF), Nairobi, Kenya, launched in 2006.
                  </Text>
                  <Text note>
                    In Nigeria, OFAB is being hosted by the National Biotechnology Development Agency (NABDA) and co-hosted by Agricultural Research Council (ARCN), Mabushi, Abuja.
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <Card>
             <CardItem  style={{backgroundColor: '#122e49'}}>
               <Left>
                 <Body>
                 <Title  style={{margin: 10, color: 'white'}}>Mission                 
              <Ionicons style={{marginHorizontal: 90, color: '#70b9ff'}} name="ios-bulb-outline" size={25} />
              </Title>
                <Text style={{color: 'white'}}>
                  To enhance Knowledge sharing and awareness on agricultural biotechnology
                </Text>
                <Text note>
                  To enhance Knowledge sharing and awareness on agricultural biotechnology that would raise understanding and 
                   appreciation of the technology to building an enabling environment for informed and timely decision-making.
                </Text>
                </Body>
                </Left>
            </CardItem>
          </Card>
          <Card>
             <CardItem  style={{backgroundColor: '#122e49'}}>
               <Left>
               <Body>
                 <Title style={{color: 'white'}}>Objectives
              <Ionicons style={{marginHorizontal: 90, color: '#70b9ff'}} name="md-radio-button-on" size={25} />
              </Title>
                <Text style={{color: 'white'}}>
                  Establish and manage a range of platforms to enhance understanding of biotechnology in agriculture for productivity
                </Text>
                <Text note>
                  Contribute to informing policy decision making processes on matters of agricultural biotechnology through provision of factual, well research and scientific information
                </Text>
                <Text note>
                ntific information; Forge strategic alliances for optimization of resources through convening and encouraging inter-institutional networking and knowledge sharing in the agricultural biotechnology space
                </Text>
                <Text note>
                ntific information; Forge strategic alliances for optimization of resources through convening and encouraging inter-institutional networking and knowledge sharing in the agricultural biotechnology space
                </Text>
                </Body>
                </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem  style={{backgroundColor: '#122e49'}}>
              <Left>
                <Body>
              <Title style={{color: 'white'}}>Vision
              <Ionicons style={{marginHorizontal: 90, color: '#70b9ff'}} name="ios-eye-outline" size={25} />
              </Title>
            <Text style={{color: 'white'}}>
            A food secure Africa where agricultural biotechnology is making significant contributions
            </Text>
            </Body>
            </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}