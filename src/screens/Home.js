import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import surahList from './../data/surah';
export default function Home({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        padding: 5,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          height: '50%',
          // backgroundColor: 'red',
          alignItems: 'center',
          marginTop: '10%',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: '90%', height: '80%'}}
          source={require('./../assets/image/AyoNgaji.jpg')}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Surah', {surahList: surahList})}
        style={{
          backgroundColor: '#c765ca',
          width: '50%',
          height: '8%',
          bottom: '10%',
          alignSelf: 'center',
          position: 'absolute',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          underlayColor: 'transparent',
          activeOpacity: 1,
        }}
        underlayColor="red"
        // onPress={() => console.log('Ayo')}
      >
        <Text style={{color: '#fff', fontSize: 20}}>Mulai Baca</Text>
      </TouchableOpacity>
    </View>
  );
}
