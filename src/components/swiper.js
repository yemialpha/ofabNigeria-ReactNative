import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window') 

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
image: {
  flex: 1,
    width
}
})

export default class extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper}
      autoplay
      >
        <View style={styles.slide1}>
            <Image
             style={styles.image}
            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/my-library-cca25.appspot.com/o/Ofab1.png?alt=media&token=2d1ca0b4-f759-471a-b55a-2a3930872792'}}
            />
        </View>

        <View style={styles.slide1}>
            <Image
             style={styles.image}
             source={{uri: 'https://firebasestorage.googleapis.com/v0/b/my-library-cca25.appspot.com/o/ofab3.png?alt=media&token=6a24d42e-ee16-4fc9-a259-9abdd55bfe3d'}}
            />
        </View>
        <View style={styles.slide2} >
        <Image
            style={styles.image} 
            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/my-library-cca25.appspot.com/o/ofab4.png?alt=media&token=8857067c-5a52-4042-aaaf-932997b2d80d'}}
            />
        </View>
        <View style={styles.slide3}>
        <Image
            style={styles.image}
            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/my-library-cca25.appspot.com/o/ofab5.png?alt=media&token=f186a482-69df-4e75-8699-c7ad6cf60011'}}
            />
        </View>
        <View style={styles.slide3}>
        <Image
            style={styles.image}
            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/my-library-cca25.appspot.com/o/ofab%202.png?alt=media&token=0e5e2235-a98a-43c8-98df-b7144f0070ff'}}
            />
        </View>
      </Swiper>
    );
  }
}