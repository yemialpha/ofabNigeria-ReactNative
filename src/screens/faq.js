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
        <Card>
            <CardItem header bordered>
              <Text>1.	What is biotechnology?</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Biotechnology is the use of modern scientific
                techniques, including genetic engineering, 
                to improve or modify plants animals and microorganisms.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>2.	What is the origin of Biotechnology?</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                The origin of biotechnology dates back to at least 10,000 years in prehistoric times 
                when wild plants were domesticated and artificial selection of animal breeding was carried out.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>3.	What is Agricultural Biotechnology?</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                It is simply the application of biotechnology to agriculture to make, modify or improve on a product for the benefit of mankind.
               </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>4.	Who are the beneficiaries of Agricultural Biotechnology?</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                The country as a whole is a beneficiary of Agricultural Biotechnology, as the technology will make a significant economic impact on the populace by contributing
                 immensely to job creation, wealth creation, eradication of hunger and malnutrition.
                 </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>5.	Do farmers require special skills or training to benefit from Agricultural Biotechnology?</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                NO. Farmers are end users of the agricultural biotechnology
                 products; the product [seeds and plantlets] are the same as conventional products.
                 </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>6.	What are genetically modified [GM] organisms and GM foods?</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Genetically modified organisms [GMOs] can be defined as organisms in which the genetic material [DNA] has been altered in a way that does not occur naturally.  The technology is often called “modern biotechnology” or “gene technology”, sometimes also “recombinant DNA technology” or “genetic engineering”. It allows selected individual genes to be transferred for one organism into another,
                 also between non-related species. Such methods are used to create GM plants – which are then used to grow GM food crops.
                 </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>7.	Why are GM foods produced?</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                	To increase food production in order to ensure food security </Text>
               <Text> 	To improve nutritive value of food </Text>
               <Text> 	To improve agricultural practices by minimising use of chemicals (herbicides, pesticides) </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>8.	Are GM foods safe?</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Yes. No effects on human health or otherwise have been shown as a result of the consumption of such foods by the general population in the countries where they have been approved.
               </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>9.	Do we know anything about the interactions between different genetically modified foods? For example, what are the risks to me from a salad made with corn and tomato products that were genetically altered? </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Genetic modification does not introduce unique risks. Since the risks for these novel foods are the same for conventional foods, the issues of interaction are the same as for conventional foods (e.g., consuming oranges and meat together enhances absorption of iron).
                   </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
            <Text>
            10.	How are GM foods regulated nationally?
            </Text>
             </CardItem>
            <CardItem bordered>
              <Body>
             <Text>
             Countries which have provisions for GM foods also regulate GMOs in general taking into account health and environmental risks, as well as control- and trade-related issues.
             </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
            <Text>
            11.	What kinds of GM foods are on the market internationally?
            </Text>
             </CardItem>
            <CardItem bordered>
              <Body>
             <Text>
             Most GM food crops available on the international market today have been designed using one of three basic traits: resistance to insect damage; resistance to viral infections; and tolerance towards certain herbicides.
             </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
            <Text>
            12.	Are there GM foods in the Nigerian Market?
            </Text>
             </CardItem>
            <CardItem bordered>
              <Body>
            <Text>
            No. GM crops are currently field trials in Nigeria.
            </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
            <Text>
            13.	Are GM foods Regulated in Nigeria?
            </Text>
             </CardItem>
            <CardItem bordered>
              <Body>
            <Text>
            Yes. There is a regulatory framework for GM foods by the National Biosafety Management Agency (NBMA), Federal Ministry of Environment.
            </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
            <Text>
            14.	Are GM foods available in other African Countries?
            </Text>
             </CardItem>
            <CardItem bordered>
              <Body>
           <Text>
           GM crops are currently undergoing field trials for commercial release into the markets in Benin, Burkina Faso, Egypt, Kenya, South Africa, Morocco, Senegal, Tanzania, Zambia and Zimbabwe.
           </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
            <Text>
            15.	What other fields is Biotechnology applicable? 
            </Text>
             </CardItem>
            <CardItem bordered>
              <Body>
              <Text>
              It is applicable in the Medical, Industrial and Environmental fields.
              </Text>
              </Body>
            </CardItem>
          </Card> <Card>
            <CardItem header bordered>
            <Text>
            16.	What other field has a high application of Biotechnology?
            </Text>
             </CardItem>
            <CardItem bordered>
              <Body>
              <Text>
              The Medical field has seen a wide application of Biotechnology in genetic testing, drug production, gene therapy and pharmacogenomics. 
              </Text>
              </Body>
            </CardItem>
          </Card>
       
        </Content>
      </Container>
    );
  }
}

