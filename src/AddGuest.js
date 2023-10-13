import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SLI from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from './style';

export function AddGuest({navigation, route}) {
  const [tamu, setTamu] = useState(
    route.params ? route.params.tamu : [{isMan: true, name: 'BAYU SETIAWAN'}],
  );
  const totalTamu = route.params ? route.params.totalTamu : 0;

  const addNewGuest = () => {
    setTamu([...tamu, {isMan: true, name: ''}]);
  };

  const changeIsMan = (index, isMan) => {
    const updatedGuest = [...tamu];
    updatedGuest[index].isMan = isMan;
    setTamu(updatedGuest);
  };

  const changeName = (index, name) => {
    const updatedGuest = [...tamu];
    updatedGuest[index].name = name;
    setTamu(updatedGuest);
  };

  const removeGuest = index => {
    const updatedGuest = [...tamu];
    updatedGuest.splice(index, 1);
    setTamu(updatedGuest);
  };

  const saveTamu = () => {
    const hasEmptyName = tamu.some(guest => guest.name.trim() === '');
    if (totalTamu < tamu.length) {
      alert(
        `Data tamu terlalu banyak!\nAnda hanya bisa mendaftarkan ${totalTamu} nama karena Anda melakukan booking hanya untuk ${totalTamu} orang.`,
      );
    } else if (hasEmptyName) {
      alert('Ada tamu dengan nama kosong. Mohon isi semua nama tamu.');
    } else {
      navigation.navigate('Detail', tamu);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tambah Data Tamu</Text>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <View style={[styles.section, {borderBottomWidth: 0}]}>
            <Text
              style={[
                styles.blue,
                styles.bold,
                styles.big,
                styles.marginbottom,
              ]}>
              Data Tamu
            </Text>

            {tamu.map((item, index) => (
              <View
                style={[
                  styles.row,
                  {justifyContent: 'space-between', alignItems: 'center'},
                ]}>
                <TouchableOpacity
                  onPress={() => changeIsMan(index, !item.isMan)}
                  style={[
                    styles.input,
                    {
                      width: '20%',
                      padding: 15,
                      backgroundColor: item.isMan ? 'lightblue' : 'pink',
                    },
                  ]}>
                  <Text style={[styles.blue, styles.bold]}>
                    {item.isMan ? 'MR' : 'MRS'}
                  </Text>
                </TouchableOpacity>

                <TextInput
                  style={[
                    styles.input,
                    styles.blue,
                    styles.bold,
                    {width: '60%', marginVertical: 1},
                  ]}
                  value={item.name.toUpperCase()}
                  placeholder="Masukkan Nama Tamu"
                  onChangeText={name => changeName(index, name)}
                />
                <TouchableOpacity
                  onPress={() => removeGuest(index)}
                  style={{width: '10%'}}>
                  <SLI name="trash" size={35} color="#DB3700" />
                </TouchableOpacity>
              </View>
            ))}

            <TouchableOpacity
              onPress={addNewGuest}
              style={{alignItems: 'center', margin: 20}}>
              <Text style={[styles.orange, styles.underline]}>
                + Tambah Data Tamu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.simpan} onPress={() => saveTamu(tamu)}>
        <Text style={{color: 'white'}}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
}
