import React, { Component } from 'react';
import { Container, CardItem, Body, Content, View, Tabs, Tab, TabHeading, ScrollableTab, Text } from 'native-base';
import {ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SearchBarExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#122e49'}}>
       <Tabs style={{backgroundColor: '#122e49'}} initialPage={0} style={{flex: 1}}>
        <Tab heading={ <TabHeading><Ionicons style={{color:'#181818'}} size={25} name="ios-information-circle-outline" /><Text>Info</Text></TabHeading>}>
          <ScrollView>
          <CardItem header bordered style={{backgroundColor: '#70b9ff'}}>
                 <Text style={{color: 'white'}}>Benefits of Biotechnology to Agriculture and Agro-industries</Text>
            </CardItem>
            <CardItem bordered style={{backgroundColor: '#122e45'}}>
                <Body>
                    <Text note>i. Accelerations of selection and transfer of desirable traits</Text>
                    <Text note>ii. Overcoming of the barrier of sexual incomplatibility between plant species</Text>
                    <Text note>iii. Increase in the size of available gene pool</Text>
                    <Text note>iv. Engineering of resistance to abiotic and biotic streese: *drought, extreme temperature, sanlinity; insects, pathogens, etc improved productivity using less land for cultivation</Text>
                    <Text note>v. Enhancement of soil quality and reduction in the levels of soil erosion</Text>
                    <Text note>vi. Greater water retention and reduced levels of nutrient run-off</Text>
                    <Text note>Tolerance to specific herbicides: glyphosate and glufosinate (mazie, cotton, soybean</Text>
                </Body>
            </CardItem>
            <CardItem header bordered style={{backgroundColor: '#70b9ff'}}>
          <Text style={{color: 'white'}}>Benefits of Biotechnology; GMOs and Health</Text>
            </CardItem>
            <CardItem style={{backgroundColor: '#122e42'}} bordered>
              <Body>
                <Text note> i. Genetic modification of humans (genetherapy)</Text>
                <Text note>ii. Treatment option for disease e.g metabolic disorder, cancer</Text>
                <Text note>iii. Application of coupling stem cell technology with recombinant DNA:</Text>
                <Text note>iv. Laboratory modification of a patient's stem cells for a desired gene (feasible for the treatment of sickle cell anaemia)</Text>
                <Text note>v. genetic modification of humans (genetherapy)</Text>
                <Text note>vi. Treatment option for disease e.g. metabolic disorder, cancer</Text>
                <Text note>vii. Application of coupling stem cell technology with recombinant DNA:</Text>
                <Text note>viii. Laboratory modification of a patient's stem cells for a desired gene (feasible for the treatment of sickle cell anaemia) </Text>
                <Text note>ix. Production of pharmaceuticals from Plants:</Text>
                <Text note>x. Monoclonal antibodies, Blood Products, Hormones and Vaccines *Production of Recombinant pharmaceuticals-GM Plant-Derived Pharmaceutical Proteins (DPPs) is currently being studied *Human serum Albumin, Antibodies, Hormones, Vaccines</Text>
                <Text note>xi. Clinical Trials (On - going): *Hepatitis B Vaccine produced in potatoes and lettuce, Vaccines for heat labile toxin produced by E, coli and Norwalk virus, *Human pro-insulin and several Monoclonal antibodies </Text>

              </Body>
            </CardItem>
            </ScrollView>
          </Tab>
          <Tab heading={ <TabHeading><Ionicons style={{color:'#181818'}} size={25} name="ios-information-circle-outline" /><Text>Info II</Text></TabHeading>}>
          <ScrollView>
              <CardItem header bordered style={{backgroundColor: '#70b9ff'}}>
                    <Text style={{color: 'white'}}>Benefits of Biotechnology to industrial and Technological Development</Text>
              </CardItem>
          <CardItem bordered style={{backgroundColor: '#122e43'}}>
                <Body>
                 <Text note>i. Protentials for longer shelf life fruits and vegetables: gene silencing which reduces metabolic  rate (tomato (flavrsavr)</Text>
                 <Text note>ii. Production of potato of high amylopectin starch: textile and other industries</Text>
                 <Text note>iii. Plastics and biofuels manufacture</Text>
                </Body>
            </CardItem>
            <CardItem header bordered style={{backgroundColor: '#70b9ff'}} >
               <Text style={{color: 'white'}}>Benefits of Biotechnology to the Environment</Text>
              </CardItem>
             <CardItem style={{backgroundColor: '#122e42'}}>
                <Body>
                 <Text note>i. Negative and positive impacts on the natural environment's flora, fauna, soils etc</Text>
                 <Text note>ii. Reduction in water pollution problems due to less eutrophication</Text>
                 <Text note>iii. Changes in the amount of insecticides and herbicides applied to the GM crops relative to conventionally grown alternatives</Text>
                 <Text note>iv. Possibility of reduction in the use of pesticides and other chemicals</Text>
                 <Text note>v. Reduction in Global Greenhouse Gas (GHG) Emission due to more Carbon in the Soil: * Increases in atmospheric levels of greenhouse gases (Carbon dioxide, methane and nitrouse oxide) are detrimental to the global environment </Text>
                 <Text note>vi. Decreased release of toxins exposure to the environment</Text>
                 <Text note>vii. Reduction in fuel use resulting in savings in carbon dioxide emissions</Text>
                 <Text note>viii. Protentials in Bio-remediation: (a) Removal of industrial Wastes, (b) Improvement in recycling of Toxic Chemicals</Text>
                </Body>
            </CardItem>
            </ScrollView>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}