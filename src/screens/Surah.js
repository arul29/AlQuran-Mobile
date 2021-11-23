import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP as h} from 'react-native-responsive-screen';
import {widthPercentageToDP as w} from 'react-native-responsive-screen';
import surahList from './../data/surah';
export default function Surah({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          data={surahList}
          keyExtractor={surah => `${surah.nomor}`}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SurahRead', {id: item.nomor})}
              style={{
                marginTop: h(2),
                alignSelf: 'center',
                backgroundColor: '#fff',
                width: '95%',
                height: w(20),
                elevation: w(0.5),
                borderRadius: w(2),
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: item.nomor === 114 ? h(2) : 0,
              }}>
              <View
                style={{
                  borderRadius: w(10),
                  backgroundColor: '#fff',
                  borderColor: '#ebb134',
                  borderWidth: w(0.5),
                  height: w(12),
                  width: w(12),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: w(2),
                }}>
                <Text style={{fontSize: w(4)}}>{item.nomor}</Text>
              </View>
              <View style={{width: w(38), marginLeft: w(2)}}>
                <Text style={{fontSize: w(5)}}>{item.nama_latin}</Text>
                <Text style={{fontSize: w(3), textTransform: 'uppercase'}}>
                  {item.tempat_turun} - {item.jumlah_ayat} Ayat
                </Text>
              </View>
              <View style={{width: w(35)}}>
                <Text style={{fontSize: w(10)}}>{item.nama}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
