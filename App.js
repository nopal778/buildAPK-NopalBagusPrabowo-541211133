import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'

import Welcome from './components/welcome';
import Dashboard from './components/dashboard';
import Siswa from './components/menampilkan-data-siswa';
import Tambah from './components/tambah_siswa';
import Tambah2 from './components/tambah_siswa_2';
import Edit from './components/edit_siswa';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Selamat Datang' component={Welcome}/>
        <Stack.Screen name='Dashboard' component={Dashboard}/>
        <Stack.Screen name='Siswa' component={Siswa}/>
         <Stack.Screen name='Add Siswa' component={Tambah}/>
         <Stack.Screen name='Add Siswa 2' component={Tambah2}/>
          <Stack.Screen name='Edit' component={Edit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 