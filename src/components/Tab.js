import React, { Component } from 'react';
import { Container, CardItem, Body, Left, Title, Tabs, Tab, TabHeading, Card, Text } from 'native-base';
import {ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SearchBarExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#122e49'}}>
       <Tabs initialPage={0} style={{flex: 1}}>
        <Tab heading={ <TabHeading style={{backgroundColor: '#98d6b0'}}>
        <Ionicons style={{color: 'black'}} name="ios-information-circle" size={24} /><Text  style={{color: 'black'}}>About Us</Text></TabHeading>}>
          <ScrollView>
          <CardItem style={{backgroundColor: '#122e49'}}>
              <Left>
                <Body>
                  <Title style={{color: 'white'}}>About Us</Title>
                  <Text note  style={{color: 'white'}}>
                    A knowledge sharing initiative by African Agricultural Technology Foundation (AATF), Nairobi, Kenya, launched in 2006.
                  </Text>
                  <Text note  style={{color: 'white'}}>
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
                <Text note  style={{color: 'white'}}>
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
                <Text note  style={{color: 'white'}}>
                  Contribute to informing policy decision making processes on matters of agricultural biotechnology through provision of factual, well research and scientific information
                </Text>
                <Text note  style={{color: 'white'}}>
                ntific information; Forge strategic alliances for optimization of resources through convening and encouraging inter-institutional networking and knowledge sharing in the agricultural biotechnology space
                </Text>
                <Text note  style={{color: 'white'}}>
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
            </ScrollView>
          </Tab>
          <Tab heading={ <TabHeading activeTextStyle={{color: '#fff', fontWeight: 'normal'}} style={{backgroundColor: '#98d6b0'}}>
          <Ionicons style={{color:'black'}} size={25} name="ios-information-circle-outline" /><Text  style={{color: 'black'}}>Benefits of Biotechnology</Text></TabHeading>}>
          <ScrollView>
          <CardItem header bordered style={{backgroundColor: '#122e50'}}>
                 <Left>
                   <Body>
                     <Text style={{color: 'white'}}>
                     Benefits of Biotechnology to Agriculture and Agro-industries
                     </Text>
                   </Body>
                 </Left>
            </CardItem>
            <CardItem bordered style={{backgroundColor: '#122e45'}}>
                <Body>
                    <Text note  style={{color: 'white'}}>i. Accelerations of selection and transfer of desirable traits</Text>
                    <Text note  style={{color: 'white'}}>ii. Overcoming of the barrier of sexual incomplatibility between plant species</Text>
                    <Text note  style={{color: 'white'}}>iii. Increase in the size of available gene pool</Text>
                    <Text note  style={{color: 'white'}}>iv. Engineering of resistance to abiotic and biotic streese: *drought, extreme temperature, sanlinity; insects, pathogens, etc improved productivity using less land for cultivation</Text>
                    <Text note  style={{color: 'white'}}>v. Enhancement of soil quality and reduction in the levels of soil erosion</Text>
                    <Text note  style={{color: 'white'}}>vi. Greater water retention and reduced levels of nutrient run-off</Text>
                    <Text note  style={{color: 'white'}}>Tolerance to specific herbicides: glyphosate and glufosinate (mazie, cotton, soybean</Text>
                </Body>
            </CardItem>
            <CardItem header bordered style={{backgroundColor: '#122e50'}}>
          <Text style={{color: 'white'}}>Benefits of Biotechnology; GMOs and Health</Text>
            </CardItem>
            <CardItem style={{backgroundColor: '#122e42'}} bordered>
              <Body>
                <Text note  style={{color: 'white'}}> i. Genetic modification of humans (genetherapy)</Text>
                <Text note  style={{color: 'white'}}>ii. Treatment option for disease e.g metabolic disorder, cancer</Text>
                <Text note  style={{color: 'white'}}>iii. Application of coupling stem cell technology with recombinant DNA:</Text>
                <Text note  style={{color: 'white'}}>iv. Laboratory modification of a patient's stem cells for a desired gene (feasible for the treatment of sickle cell anaemia)</Text>
                <Text note  style={{color: 'white'}}>v. genetic modification of humans (genetherapy)</Text>
                <Text note  style={{color: 'white'}}>vi. Treatment option for disease e.g. metabolic disorder, cancer</Text>
                <Text note  style={{color: 'white'}}>vii. Application of coupling stem cell technology with recombinant DNA:</Text>
                <Text note  style={{color: 'white'}}>viii. Laboratory modification of a patient's stem cells for a desired gene (feasible for the treatment of sickle cell anaemia) </Text>
                <Text note  style={{color: 'white'}}>ix. Production of pharmaceuticals from Plants:</Text>
                <Text note  style={{color: 'white'}}>x. Monoclonal antibodies, Blood Products, Hormones and Vaccines *Production of Recombinant pharmaceuticals-GM Plant-Derived Pharmaceutical Proteins (DPPs) is currently being studied *Human serum Albumin, Antibodies, Hormones, Vaccines</Text>
                <Text note  style={{color: 'white'}}>xi. Clinical Trials (On - going): *Hepatitis B Vaccine produced in potatoes and lettuce, Vaccines for heat labile toxin produced by E, coli and Norwalk virus, *Human pro-insulin and several Monoclonal antibodies </Text>

              </Body>
            </CardItem>
            <CardItem header bordered style={{backgroundColor: '#122e50'}}>
                    <Text style={{color: 'white'}}>Benefits of Biotechnology to industrial and Technological Development</Text>
              </CardItem>
          <CardItem bordered style={{backgroundColor: '#122e43'}}>
                <Body>
                 <Text note  style={{color: 'white'}}>i. Protentials for longer shelf life fruits and vegetables: gene silencing which reduces metabolic  rate (tomato (flavrsavr)</Text>
                 <Text note  style={{color: 'white'}}>ii. Production of potato of high amylopectin starch: textile and other industries</Text>
                 <Text note  style={{color: 'white'}}>iii. Plastics and biofuels manufacture</Text>
                </Body>
            </CardItem>
            <CardItem header bordered style={{backgroundColor: '#122e50'}} >
               <Text style={{color: 'white'}}>Benefits of Biotechnology to the Environment</Text>
              </CardItem>
             <CardItem style={{backgroundColor: '#122e42'}}>
                <Body>
                 <Text note  style={{color: 'white'}}>i. Negative and positive impacts on the natural environment's flora, fauna, soils etc</Text>
                 <Text note  style={{color: 'white'}}>ii. Reduction in water pollution problems due to less eutrophication</Text>
                 <Text note  style={{color: 'white'}}>iii. Changes in the amount of insecticides and herbicides applied to the GM crops relative to conventionally grown alternatives</Text>
                 <Text note  style={{color: 'white'}}>iv. Possibility of reduction in the use of pesticides and other chemicals</Text>
                 <Text note  style={{color: 'white'}}>v. Reduction in Global Greenhouse Gas (GHG) Emission due to more Carbon in the Soil: * Increases in atmospheric levels of greenhouse gases (Carbon dioxide, methane and nitrouse oxide) are detrimental to the global environment </Text>
                 <Text note  style={{color: 'white'}}>vi. Decreased release of toxins exposure to the environment</Text>
                 <Text note  style={{color: 'white'}}>vii. Reduction in fuel use resulting in savings in carbon dioxide emissions</Text>
                 <Text note  style={{color: 'white'}}>viii. Protentials in Bio-remediation: (a) Removal of industrial Wastes, (b) Improvement in recycling of Toxic Chemicals</Text>
                </Body>
            </CardItem>
            </ScrollView>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}