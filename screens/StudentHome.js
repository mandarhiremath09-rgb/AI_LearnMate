import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import Card from '../components/Card';
import BottomNav from '../components/BottomNav';

const DATA = [
  {id:'1', title:'Video Title A', desc:'Video Description', image: require('../assets/figma_mock.jpg')},
  {id:'2', title:'Video Title B', desc:'Video Description', image: require('../assets/figma_mock.jpg')},
  {id:'3', title:'Video Title C', desc:'Video Description', image: require('../assets/figma_mock.jpg')},
];

export default function StudentHome({navigation}){
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#0b1020'}}>
      <View style={{padding:12}}>
        <Text style={{color:'#fff', fontSize:20, fontWeight:'800'}}>Welcome, XYZ</Text>
        <View style={{marginTop:10, backgroundColor:'#fff', padding:8, borderRadius:10}}>
          <TextInput placeholder="Search Teacher or Topic" style={{padding:8}} />
        </View>

        <Text style={{color:'#fff', marginTop:12, fontWeight:'700'}}>Recently Viewed</Text>
        <FlatList data={DATA} keyExtractor={i=>i.id} renderItem={({item})=> <Card item={item} onPress={()=>navigation.navigate('VideoDetail',{item})} />} style={{marginTop:8}} />

        <Text style={{color:'#fff', marginTop:8, fontWeight:'700'}}>Top Teachers</Text>
        <View style={{flexDirection:'row', marginTop:8}}>
          <Image source={require('../assets/figma_mock.jpg')} style={{width:56,height:56,borderRadius:28,marginRight:8}} />
          <Image source={require('../assets/figma_mock.jpg')} style={{width:56,height:56,borderRadius:28,marginRight:8}} />
          <Image source={require('../assets/figma_mock.jpg')} style={{width:56,height:56,borderRadius:28}} />
        </View>
      </View>

      <View style={{flex:1}} />
      <BottomNav />
    </SafeAreaView>
  );
}
