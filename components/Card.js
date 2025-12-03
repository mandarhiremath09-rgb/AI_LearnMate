import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card({item,onPress}){
  return (
    <TouchableOpacity style={s.card} onPress={onPress}>
      <Image source={item.image} style={s.thumb} />
      <View style={s.meta}>
        <Text style={s.title}>{item.title}</Text>
        <Text style={s.sub}>{item.desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  card:{flexDirection:'row', backgroundColor:'#111', padding:8, borderRadius:10, marginBottom:10},
  thumb:{width:96, height:62, borderRadius:6},
  meta:{flex:1, paddingLeft:8, justifyContent:'center'},
  title:{color:'#fff', fontWeight:'700'},
  sub:{color:'#bfc6d6', fontSize:12, marginTop:4}
});
