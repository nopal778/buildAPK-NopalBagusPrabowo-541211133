import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const item_data = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.bungkus_data}>
      <View style={styles.data_content}>
        <Text style={styles.nama_siswa}>{props.name}</Text>
        <Text style={styles.kelas}>{props.kelas}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  nama_siswa: {
    fontWeight: '500',
    fontSize: 20,
  },
  kelas: {
    fontSize: 16,
    color: "#808080",
    fontWeight : '500'
  },
  bungkus_data: {
    borderRadius: 8,
    backgroundColor: "#D6D6D6",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom : 3
  },
  data_content: {
    gap: 3,
  }
})

export default item_data;