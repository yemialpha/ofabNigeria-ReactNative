import React from 'react';
import {  StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { createBottomTabNavigator, createDrawerNavigator, DrawerItems, createStackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home'
import Aboutus from './src/screens/About';
import Contact from './src/screens/Contactus';
import Newss from './src/screens/News';
import Faq from './src/screens/faq';
import Presentations from './src/screens/Presentation';
import { View, Text, Thumbnail } from 'native-base';



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
   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderWidth: 2,
   margin: 40, padding: 10, borderColor: 'white', borderRadius: 30}}>
        <Text style={{color: 'black',fontSize: 30, fontWeight: 'bold',}} >OFAB</Text>
        <Text style={{color: 'black',fontSize: 30, fontWeight: 'bold',}}>NIGERIA</Text>
        <Thumbnail square large source={{uri: 'https://firebasestorage.googleapis.com/v0/b/my-library-cca25.appspot.com/o/splash.png?alt=media&token=92fb89e6-64f0-48b3-b636-1cbc0dfba21a'}} />
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
            <Ionicons name="md-contacts" color={tintColor} size={24} />
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
        activeTintColor: 'gray',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: '#98d6b0',
       }
    }
  }
  )
  },
  Resources: {
        screen:Newss
  },
  FQA: {
    screen:Faq
},
  OurPartners: {
    screen: Presentations
},
},
  {
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: 'gray',
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

