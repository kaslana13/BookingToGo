import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MI from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';
import {URL, HEADERS} from './API';
import moment from 'moment';
import 'moment/locale/id';

export function Detail({navigation, route}) {
  const [isSelfOrder, setIsSelfOder] = useState(false);
  const [data, setData] = useState(null);
  const tamu = route.params ? route.params : [{isMan: true, name: 'john doe'}];
  moment.locale('id');

  useEffect(() => {
    fetch(URL, {
      method: 'GET',
      headers: HEADERS,
    })
      .then(response => response.json())
      .then(responseData => {
        setData(responseData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const totalTamu = data
    ? data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.guest_adult +
      data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.guest_infant +
      data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.guest_children
    : 0;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#335998" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment Details</Text>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <View
            style={[
              styles.section,
              {flexDirection: 'row', justifyContent: 'flex-end'},
            ]}>
            <View style={styles.stepActive}>
              <Text style={styles.stepText}>1</Text>
            </View>
            <Text style={[styles.black, styles.bold]}>Detail Pesanan - </Text>
            <View style={styles.step}>
              <Text style={styles.stepText}>2</Text>
            </View>
            <Text style={[styles.gray]}>Pembayaran</Text>
          </View>

          <View style={styles.section}>
            <Text
              style={[
                styles.black,
                styles.bold,
                styles.marginbottom,
                styles.big,
              ]}>
              Detail Pesanan
            </Text>
            <View
              style={[
                styles.subsection,
                styles.marginbottom,
                styles.row,
                {justifyContent: 'flex-start'},
              ]}>
              <Image
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 5,
                  marginRight: 10,
                }}
                source={{
                  uri: data
                    ? data.chosen_hotel.data.get_chosen_hotel
                        .chosen_hotel_detail.images[0].thumbnail
                    : 'https://i.imgur.com/Lg3p6tH.png',
                }}
              />
              <View>
                <Text style={[styles.blue, styles.bold]}>
                  {data
                    ? data.chosen_hotel.data.get_chosen_hotel
                        .chosen_hotel_detail.hotel_name
                    : '-'}
                </Text>
                <Text>
                  {data
                    ? data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_room
                        .room_name
                    : '-'}
                  {' with '}
                  {data
                    ? data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_room
                        .meal
                    : '-'}
                </Text>
                <Text>
                  {data
                    ? data.chosen_hotel.data.get_chosen_hotel
                        .chosen_hotel_params.total_room
                    : '0'}
                  {' Kamar - '}
                  {data ? totalTamu : '0'}
                  {' Tamu - '}
                  {data
                    ? (new Date(
                        data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.check_out,
                      ) -
                        new Date(
                          data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.check_in,
                        )) /
                      (1000 * 3600 * 24)
                    : '-'}
                  {' Malam'}
                </Text>
              </View>
            </View>
            <View style={[styles.row, styles.marginbottom]}>
              <Text style={[styles.black, styles.bold]}>Check-In</Text>
              <Text>
                {data
                  ? moment(
                      data.chosen_hotel.data.get_chosen_hotel
                        .chosen_hotel_params.check_in,
                    ).format('DD MMMM YYYY')
                  : '-'}
              </Text>
            </View>
            <View style={[styles.row, styles.marginbottom]}>
              <Text style={[styles.black, styles.bold]}>Check-Out</Text>
              <Text>
                {data
                  ? moment(
                      data.chosen_hotel.data.get_chosen_hotel
                        .chosen_hotel_params.check_out,
                    ).format('DD MMMM YYYY')
                  : '-'}
              </Text>
            </View>
            {data?.chosen_hotel?.data?.get_chosen_hotel?.chosen_hotel_price
              ?.is_refundable ?? (
              <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                <MI name="currency-exchange" size={14} color="#FF8136" />
                <Text style={[styles.orange, {marginLeft: 3}]}>
                  Dapat di-refund jika dibatalkan
                </Text>
              </View>
            )}
          </View>

          <View style={[styles.section, {borderBottomWidth: 0}]}>
            <Text
              style={[
                styles.black,
                styles.bold,
                styles.marginbottom,
                styles.big,
              ]}>
              Detail Pemesan
            </Text>
            <View
              style={[
                styles.subsection,
                styles.marginbottom,
                styles.row,
                {alignItems: 'center'},
              ]}>
              <View>
                <Text style={[styles.black, styles.bold]}>
                  Tn Andreas Andreas
                </Text>
                <Text>andreasandreas@gmail.com</Text>
                <Text>+628 2222 2222</Text>
              </View>
              <TouchableOpacity>
                <Text style={[styles.blue, styles.underline]}>Ubah</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => setIsSelfOder(true)}
              style={[styles.radioButtonContainer, styles.marginbottom]}>
              <Ionicons
                name={isSelfOrder ? 'radio-button-on' : 'radio-button-off'}
                color={isSelfOrder ? '#335998' : 'grey'}
                size={18}
              />
              <Text style={styles.radioButtonText}>
                Saya memesan untuk sendiri
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsSelfOder(false)}
              style={[styles.radioButtonContainer, styles.marginbottom]}>
              <Ionicons
                name={isSelfOrder ? 'radio-button-off' : 'radio-button-on'}
                color={isSelfOrder ? 'grey' : '#335998'}
                size={18}
              />
              <Text style={styles.radioButtonText}>
                Saya memesan untuk orang lain
              </Text>
            </TouchableOpacity>
            {isSelfOrder ? null : (
              <>
                <Text
                  style={[
                    styles.black,
                    styles.bold,
                    styles.marginbottom,
                    styles.big,
                  ]}>
                  Data Tamu
                </Text>
                {tamu.map(item => (
                  <View
                    style={[
                      styles.subsection,
                      styles.marginbottom,
                      styles.row,
                      {justifyContent: 'flex-start', alignItems: 'center'},
                    ]}>
                    <MCI
                      name={item.isMan ? 'face-man' : 'face-woman'}
                      size={24}
                      color={item.isMan ? 'lightblue' : 'pink'}
                    />
                    <Text>
                      {item.isMan ? '   Tn. ' : '   Ny. '}
                      {item.name.toUpperCase()}
                    </Text>
                  </View>
                ))}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('AddGuest', {tamu, totalTamu})
                  }>
                  <Text
                    style={[
                      styles.blue,
                      styles.underline,
                      {textAlign: 'right'},
                    ]}>
                    Ubah Data Tamu
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white'}}>Lanjutkan Pembayaran</Text>
      </TouchableOpacity>
    </View>
  );
}
