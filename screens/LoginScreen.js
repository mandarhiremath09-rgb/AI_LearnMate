import React, {useState} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({navigation}){
  const [role,setRole]=useState('student');
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.center}>
        <Text style={styles.brand}>AI - LearnMate</Text>
        <View style={styles.roleRow}>
          <TouchableOpacity onPress={()=>setRole('student')} style={[styles.role, role==='student'&&styles.roleActive]}><Text style={styles.roleText}>Student</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>setRole('teacher')} style={[styles.role, role==='teacher'&&styles.roleActive]}><Text style={styles.roleText}>Teacher</Text></TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TextInput placeholder="Email" placeholderTextColor="#9ea6c0" style={styles.input} />
          <TextInput placeholder="Password" placeholderTextColor="#9ea6c0" secureTextEntry style={styles.input} />
          <TouchableOpacity style={styles.btn} onPress={()=>navigation.replace('StudentHome')}><LinearGradient colors={['#8b5cf6','#6b7cff']} style={{padding:12,borderRadius:8}}><Text style={{color:'#fff',textAlign:'center',fontWeight:'700'}}>Login</Text></LinearGradient></TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', marginTop:12}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Register')}><Text style={{color:'#c7bff6'}}>Register</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ResetPassword')} style={{marginLeft:18}}><Text style={{color:'#c7bff6'}}>Reset Password</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{flex:1, backgroundColor:'#fff', alignItems:'center', justifyContent:'center'},
  center:{width:'86%', alignItems:'center'},
  brand:{fontSize:22, fontWeight:'800', marginBottom:8},
  roleRow:{flexDirection:'row', backgroundColor:'#f1eefc', padding:6, borderRadius:20, marginBottom:18},
  role:{paddingVertical:8, paddingHorizontal:16, borderRadius:16},
  roleActive:{backgroundColor:'#6b5dd3'},
  roleText:{color:'#111', fontWeight:'700'},
  card:{width:'100%', backgroundColor:'#f6f3ff', padding:16, borderRadius:12, alignItems:'center'},
  input:{width:'100%', backgroundColor:'#fff', padding:12, borderRadius:8, marginTop:8},
  btn:{width:'100%', marginTop:12}
});
