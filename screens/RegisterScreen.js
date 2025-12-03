import React, {useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen({navigation}){
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [phone,setPhone]=useState(''); const [password,setPassword]=useState('');
  function submit(){ Alert.alert('Registered', 'Mock account created'); navigation.replace('StudentHome'); }
  return (
    <SafeAreaView style={s.root}>
      <View style={s.center}>
        <Text style={s.brand}>AI - LearnMate</Text>
        <View style={s.card}>
          <TextInput placeholder="Name" style={s.input} value={name} onChangeText={setName} />
          <TextInput placeholder="Mobile No." style={s.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
          <TextInput placeholder="Email" style={s.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
          <TextInput placeholder="Password" secureTextEntry style={s.input} value={password} onChangeText={setPassword} />
          <TouchableOpacity style={s.btn} onPress={submit}><LinearGradient colors={['#8b5cf6','#6b7cff']} style={{padding:12,borderRadius:8}}><Text style={{color:'#fff',textAlign:'center',fontWeight:'700'}}>Register</Text></LinearGradient></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root:{flex:1, backgroundColor:'#fff', alignItems:'center', justifyContent:'center'},
  center:{width:'86%', alignItems:'center'},
  brand:{fontSize:22, fontWeight:'800', marginBottom:8},
  card:{width:'100%', backgroundColor:'#f6f3ff', padding:16, borderRadius:12, alignItems:'center'},
  input:{width:'100%', backgroundColor:'#fff', padding:12, borderRadius:8, marginTop:8},
  btn:{width:'100%', marginTop:12}
});
