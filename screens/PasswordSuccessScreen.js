import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PasswordSuccessScreen({navigation}){
  return (
    <SafeAreaView style={s.root}>
      <View style={s.center}>
        <View style={s.card}>
          <Ionicons name="checkmark-circle" size={64} color="#16a34a" />
          <Text style={s.title}>Password Update Successfully</Text>
          <TouchableOpacity style={s.btn} onPress={()=>navigation.replace('Login')}><Text style={{color:'#fff'}}>Back to Login</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root:{flex:1, backgroundColor:'#fff', alignItems:'center', justifyContent:'center'},
  center:{width:'86%', alignItems:'center'},
  card:{width:'100%', backgroundColor:'#fff', padding:22, borderRadius:12, alignItems:'center', shadowColor:'#000', elevation:4},
  title:{fontSize:16, fontWeight:'700', marginTop:12, marginBottom:12},
  btn:{backgroundColor:'#6b5dd3', padding:10, borderRadius:8, marginTop:8}
});
