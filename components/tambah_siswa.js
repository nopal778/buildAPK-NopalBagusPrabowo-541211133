//Nopal Bagus Prabowo
//XII RPL 4 / 18

import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button, Pressable } from 'react-native';
import ItemData from './props/data';

export default function datasiswa({navigation}) {
  return (
    <View style={styles.container}>
     <Text style={styles.paragraphreg}> Tambah Data Siswa
    </Text>
    <Image style={styles.imgts}
    source={require('../assets/icon-sekolah.png')}
    />
    <Text style={styles.judul_input}> Nis</Text>
        <TextInput
        style={styles.inputreg}
         opacity={0.85}
          rd={25}
          h={50}
          w={350}
      />
    <Text style={styles.judul_input}> Nama</Text>
    <TextInput
        style={styles.inputreg}
        opacity={0.85}
          rd={25}
          h={50}
          w={350}
      />
    <Text style={styles.judul_input}> Kelas</Text>
          <TextInput
        style={styles.inputreg}
     opacity={0.85}
          rd={25}
          h={50}
          w={350}
      />
      <Pressable style={styles.btnsubmit} onPress={() => {navigation.navigate('Add Siswa 2')}}>
      <Text style={styles.tulisansubmit}>Berikutnya</Text>
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
    fontWeight: "bold",
  },
   imgts: {
    height: 80,
    width: 80,
    marginTop : 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom : 20
   },
  judul_input: {
   color: 'black',
   fontSize: 13,
   fontWeight: 500,
   marginBottom: 5,
  },
  inputreg: {
    height: 40,
    marginTop: 0,
    gap: 10,
    marginBottom: 10,
     borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  btnsubmit: {
    height:35,
    flexDirection: 'row',
    marginBottom: 0,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#808080',
    marginTop: 20,
  },
    tulisansubmit: {
    fontWeight: 600,
    color: '#fff'
  }
  
});
