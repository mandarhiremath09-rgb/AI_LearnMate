import React, {useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import BottomNav from '../components/BottomNav';

export default function UploadLecture(){
  const [title,setTitle]=useState('');
  const lectures = [{id:'1',title:'Lecture 1',date:'01/01/2025'},{id:'2',title:'Lecture 2',date:'02/01/2025'}];
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
      <View style={{padding:14}}>
        <Text style={{fontSize:18,fontWeight:'800'}}>Upload New Lecture</Text>
        <View style={{backgroundColor:'#f3eefc', padding:12, borderRadius:10, marginTop:10}}>
          <Text style={{color:'#6b5dd3'}}>Drag & Drop Files Here or Browse</Text>
        </View>
        <TextInput placeholder="Lecture Title" style={{backgroundColor:'#f6f6f8', padding:10, borderRadius:8, marginTop:10}} value={title} onChangeText={setTitle} />
        <TouchableOpacity style={{backgroundColor:'#6b5dd3', padding:12, borderRadius:8, marginTop:10}}><Text style={{color:'#fff', textAlign:'center'}}>Upload</Text></TouchableOpacity>

        <Text style={{fontWeight:'700', marginTop:16}}>My Lectures</Text>
        <FlatList data={lectures} keyExtractor={i=>i.id} renderItem={({item})=> <View style={{flexDirection:'row',justifyContent:'space-between', paddingVertical:8}}><Text>{item.title}</Text><Text>{item.date}</Text></View>} />
      </View>
      <View style={{flex:1}} />
      <BottomNav />
    </SafeAreaView>
  );
}
