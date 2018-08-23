import React from 'react';
import {  StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { createBottomTabNavigator, createDrawerNavigator, DrawerItems, createStackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home'
import Aboutus from './src/screens/About';
import Contact from './src/screens/Contactus';
import Newss from './src/screens/News';
import Presentations from './src/screens/Presentation';
import { View, Text } from 'native-base';



export default class App extends React.Component {

    render() {
      return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}} >
        <Main/>
        </SafeAreaView>
      )
    }
}
const Drawer =  (props) => ( 
  <SafeAreaView style={{flex: 1}}>
   <View style={{backgroundColor: '#122e49', flex: 1, height: 200}}>
   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#98d6b0', borderWidth: 2,
   margin: 40, borderColor: '#181818', borderRadius: 30}}>
        <Text style={{color: '#181818',fontSize: 30, fontWeight: 'bold',}} >OFAB</Text>
        <Text style={{color: '#181818',fontSize: 30, fontWeight: 'bold',}}>NIGERIA</Text>
        <Ionicons color='#181818' name="md-globe" size={55} />
  </View>
   </View>
  <ScrollView>
  <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>  
)
const Main = createDrawerNavigator({

  Home: {
    screen: createBottomTabNavigator({
      Home:{
        screen: Home,
        navigationOptions: {
          tabBarIcon:  ({tintColor }) => (
            <Ionicons name="ios-home-outline" color={tintColor} size={24} />
          )
        }
      },
      Social:{
        screen: Aboutus,
        navigationOptions: {
          tabBarIcon:  ({tintColor }) => (
            <Ionicons name="ios-people" color={tintColor} size={24} />
          )
        }
      },
      Contact:{
        screen: Contact,
        navigationOptions: {
          tabBarIcon:  ({tintColor }) => (
            <Ionicons name="ios-wifi-outline" color={tintColor} size={24} />
          )
        }
      }
    },
    {
      tabBarOptions: {
        activeTintColor: '#70b9ff',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: '#98d6b0',
       }
    }
  }
  )
  },
  News: {
        screen:Newss
  },
  OurPartners: {
    screen: Presentations
},
},
  {
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: '#70b9ff',
      inactiveTintColor: 'black',
      style: {
        backgroundColor: '#98d6b0',
     }
    }
  }
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

