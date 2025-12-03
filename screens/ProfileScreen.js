import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native';
import BottomNav from '../components/BottomNav';

export default function ProfileScreen(){
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
      <View style={{padding:18}}>
        <View style={{alignItems:'center', marginBottom:20}}>
          <View style={{width:88,height:88,borderRadius:44,backgroundColor:'#ddd'}} />
        </View>
        <Text style={{fontWeight:'700', marginBottom:6}}>Profile</Text>
        <TextInput placeholder="Name" style={s.input} />
        <TextInput placeholder="Mobile Number" style={s.input} />
        <TextInput placeholder="Email" style={s.input} />
      </View>
      <View style={{flex:1}} />
      <BottomNav />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({ input:{backgroundColor:'#f6f6f8', padding:12, borderRadius:8, marginTop:10} });
