import React, {useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ResetPasswordScreen({navigation}){
  const [email,setEmail]=useState('');
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.center}>
        <Text style={styles.brand}>AI - LearnMate</Text>
        <View style={styles.card}>
          <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
          <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('PasswordSuccess')}><LinearGradient colors={['#8b5cf6','#6b7cff']} style={{padding:12,borderRadius:8}}><Text style={{color:'#fff',textAlign:'center',fontWeight:'700'}}>Get OTP</Text></LinearGradient></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{flex:1, backgroundColor:'#fff', alignItems:'center', justifyContent:'center'},
  center:{width:'86%', alignItems:'center'},
  brand:{fontSize:22, fontWeight:'800', marginBottom:8},
  card:{width:'100%', backgroundColor:'#f6f3ff', padding:16, borderRadius:12, alignItems:'center'},
  input:{width:'100%', backgroundColor:'#fff', padding:12, borderRadius:8, marginTop:8},
  btn:{width:'100%', marginTop:12}
});
