//Nopal Bagus Prabowo
//XII RPL 4 / 18


import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button, Pressable, Modal } from 'react-native';
import ItemData from './props/data'
import React, {useState} from 'react';

export default function datasiswa({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
     <Text style={styles.paragraphreg}> Data Siswa
    </Text>
    <Text style={styles.judul_input}> Nama</Text>
    <TextInput
        style={styles.inputreg}
        placeholder={"Nopal Bagus Prabowo"}
        opacity={0.85}
          rd={25}
          h={50}
          w={350}
      />
    <Text style={styles.judul_input}> Kelas</Text>
          <TextInput
        style={styles.inputreg}
        placeholder={"XII RPL 4"}
        opacity={0.85}
          rd={25}
          h={50}
          w={350}
      />
       <Text style={styles.judul_input}> Email</Text>
          <TextInput
        style={styles.inputreg}
        placeholder={"opal@gmail.com"}
        opacity={0.85}
          rd={25}
          h={50}
          w={350}
      />
        <Text style={styles.judul_input}> Telepon</Text>
          <TextInput
        style={styles.inputreg}
        placeholder={"0882003851590"}
        opacity={0.85}
          rd={25}
          h={50}
          w={350}
      />
       <Text style={styles.judul_input}> Alamat</Text>
          <TextInput
        style={styles.inputreg}
        placeholder={"Pesanggrahan,Kec.Karangpucung"}
        opacity={0.85}
          rd={25}
          h={50}
          w={350}
      />
      <Pressable style={styles.btnedit} onPress={() => {navigation.navigate('Edit')}}>
      <Text style={styles.tulisanlogin}>Edit</Text>
      </Pressable>
             <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>are you sure to delete
            </Text>
            <Pressable
              style={[styles.button, styles.buttonyes]}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Delete</Text>
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
    marginBottom: 10,
    fontWeight: "bold",
  },
  judul_input: {
   color: 'black',
   fontSize: 13,
   fontWeight: 500,
   marginBottom: 5
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
  btnedit: {
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
    tulisanlogin: {
    fontWeight: 600,
    color: '#fff'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 8,
    width: 100,
    elevation: 2,
  },
  buttonOpen: {
    width: 265,
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
  buttonClose: {
    width: 80,
    backgroundColor: '#000',
    marginRight : -100,
    marginTop : -8,
  },
  buttonyes: {
    width: 80,
    position : 'absolute',
    marginLeft : -100,
    marginTop : 50,
    backgroundColor: '#808080',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    padding: 10,
  },
  
});
