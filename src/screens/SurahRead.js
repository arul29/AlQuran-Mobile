import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {widthPercentageToDP as w} from 'react-native-responsive-screen';
const ayatl = [
  {
    id: 1,
    surah: 1,
    nomor: 1,
    ar: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
    tr:
      'bismi <strong>al</strong>l<u>aa</u>hi <strong>al</strong>rra<u>h</u>m<u>aa</u>ni <strong>al</strong>rra<u>h</u>iim<strong>i</strong>',
    idn: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.',
  },
  {
    id: 2,
    surah: 1,
    nomor: 2,
    ar: 'اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ',
    tr:
      "al<u>h</u>amdu lill<u>aa</u>hi rabbi <strong>a</strong>l'<u>aa</u>lamiin<strong>a</strong>",
    idn: 'Segala puji bagi Allah, Tuhan seluruh alam,',
  },
  {
    id: 3,
    surah: 1,
    nomor: 3,
    ar: 'الرَّحْمٰنِ الرَّحِيْمِۙ',
    tr:
      'a<strong>l</strong>rra<u>h</u>m<u>aa</u>ni <strong>al</strong>rra<u>h</u>iim<strong>i</strong>',
    idn: 'Yang Maha Pengasih, Maha Penyayang,',
  },
  {
    id: 4,
    surah: 1,
    nomor: 4,
    ar: 'مٰلِكِ يَوْمِ الدِّيْنِۗ',
    tr: 'm<u>aa</u>liki yawmi <strong>al</strong>ddiin<strong>i</strong>',
    idn: 'Pemilik hari pembalasan.',
  },
  {
    id: 5,
    surah: 1,
    nomor: 5,
    ar: 'اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ',
    tr: "iyy<u>aa</u>ka na'budu wa-iyy<u>aa</u>ka nasta'iin<strong>u</strong>",
    idn:
      'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan.',
  },
  {
    id: 6,
    surah: 1,
    nomor: 6,
    ar: 'اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ ۙ',
    tr:
      'ihdin<u>aa</u> <strong>al</strong><u>shsh</u>ir<u>aath</u>a <strong>a</strong>lmustaqiim<strong>a</strong>',
    idn: 'Tunjukilah kami jalan yang lurus,',
  },
  {
    id: 7,
    surah: 1,
    nomor: 7,
    ar:
      'صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ ࣖ',
    tr:
      "<u>sh</u>ir<u>aath</u>a <strong>al</strong>la<u>dz</u>iina an'amta 'alayhim ghayri <strong>a</strong>lmagh<u>dh</u>uubi 'alayhim wal<u>aa</u> <strong>al</strong><u>dhdhaa</u>lliin<strong>a</strong>",
    idn:
      '(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.',
  },
];

const color = ['#fcffe0', '#fff'];

export default function SurahRead({route}) {
  const [loading, setLoading] = useState(false);
  const [ayat, setAyat] = useState([]);
  const id = route.params.id;
  useEffect(async () => {
    setLoading(true);
    const result = await axios(`https://equran.id/api/surat/${id}`);
    console.log(result.data.ayat);
    setAyat(result.data.ayat);
    setLoading(false);
  }, []);

  const arabicNumbers = number => {
    console.log(number);
    const arabicNumbers = ['۰', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    var chars = number.toString().split('');
    for (var i = 0; i < chars.length; i++) {
      if (/\d/.test(chars[i])) {
        chars[i] = arabicNumbers[chars[i]];
      }
    }
    return chars.join('');
  };

  return (
    <View style={{flex: 1}}>
      {loading && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator color="gray" size="large" />
        </View>
      )}
      <FlatList
        data={ayat}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => (
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: color[index % color.length],
              width: '100%',
              //   flexDirection: 'row',
              //   justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row', marginTop: w(2)}}>
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
              {/* <View style={{width:'50%',backgroundColor:'red'}} > */}
              <Text style={{width: '85%', fontSize: w(8)}}>
                {item.ar} ({arabicNumbers(item.nomor)})
              </Text>
              {/* </View> */}
            </View>
            <View style={{marginTop: w(2), marginHorizontal: w(2)}}>
              <HTMLView
                value={`<div> ${item.tr} </div>`}
                //   stylesheet={styles}
              />
            </View>
            <View style={{margin: w(2)}}>
              <Text>{item.idn}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
