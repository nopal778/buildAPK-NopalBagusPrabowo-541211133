//Nopal Bagus Prabowo
//XII RPL 4 / 18


import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button, Pressable } from 'react-native';
import ItemData from './props/data'

export default function Hallo({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.paragraphreg}> Hallo guys, Selamat Datang Di SMK Telkom Purwokerto</Text>
    <Image style={styles.imgts}
    source={require('../assets/icon-sekolah.png')}
    />
      <Pressable style={styles.btnsubmit} onPress={() => {navigation.navigate('Dashboard')}}>
      <Text style={styles.tulisansubmit}>Data Siswa SMK Telkom</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  padding: 24,
  backgroundColor: '#D9D9D9'
    },
  paragraphreg: {
   color: 'black',
   fontSize: 20,
   textAlign: "center",
    marginBottom: 5,
    marginTop: 30,
    fontWeight: "bold",
  },
   imgts: {
    height: 120,
    width: 120,
    marginTop : 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom : 20
   },
  btnsubmit: {
    height:55,
    flexDirection: 'row',
    marginBottom: 0,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#808080',
    marginTop: 80,
  },
    tulisansubmit: {
    fontWeight: 600,
    color: '#fff'
  }
  
});
