//Nopal Bagus Prabowo
//XII RPL 4 / 18

import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button,Pressable } from 'react-native';
import ItemData from './props/data'

export default function Dashboard({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.wadah}>
        <View style={styles.text}>
          <Text style={styles.text_judul}>
            Data Siswa SMK Telkom Purwokerto
          </Text>
           <Pressable style={styles.btnadd} onPress={() => {navigation.navigate('Add Siswa')}}>
      <Text style={styles.tulisanadd}>Menambah Siswa</Text>
      </Pressable>
          <Text style={styles.text_tahun}>2023/2024</Text>
        </View>
      </View>
      <View style={styles.data}>
        <ItemData onPress={() => 
          navigation.navigate('Siswa')} name="Nopal Bagus Prabowo" kelas="XII RPL 4"
        />
        <ItemData onPress={() => 
          navigation.navigate('Siswa')} name="Nopal Bagus Prabowo" kelas="XII RPL 4"
        />
        <ItemData onPress={() => 
          navigation.navigate('Siswa')} name="Nopal Bagus Prabowo" kelas="XII RPL 4"
        />
        <ItemData onPress={() => 
          navigation.navigate('Siswa')} name="Nopal Bagus Prabowo" kelas="XII RPL 4"
        />
        <ItemData onPress={() => 
          navigation.navigate('Siswa')} name="Nopal Bagus Prabowo" kelas="XII RPL 4"
        />
        <ItemData onPress={() => 
          navigation.navigate('Siswa')} name="Nopal Bagus Prabowo" kelas="XII RPL 4"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  // TOP
  wadah: {
    marginTop : 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 17,
    backgroundColor: "#808080"
  },
  btnadd: {
    position: 'absolute',
    width: 130,
    height:25,
    flexDirection: 'row',
    marginBottom: 0,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#D9D9D9',
    marginTop: 77,
    marginLeft : 115,
  },
    tulisanadd: {
    fontWeight: 600,
    color: '#000'
  },
  text: {
    gap: 10
  },
  text_tahun: {
    fontSize: 14,
    marginTop :5,
    color: "#FFFFFF",
  },
  text_judul: { 
    fontSize: 25,
    color: "#FFFFFF",
    fontWeight: 500
  },
  // MAIN CONTENT
  data: {
    width: 315,
    paddingHorizontal: 16,
    marginTop: -20,
    paddingTop: 20,
    gap: 18,
    backgroundColor : "#F8F8F8",
  },
});