import React, {useState} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VideoDetail({route}){
  const item = route.params?.item || {title:'Video', desc:''};
  const [tab, setTab] = useState('notes');
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#0b1020'}}>
      <View style={{height:220, backgroundColor:'#111', alignItems:'center', justifyContent:'center'}}>
        <Ionicons name="play-circle" size={68} color="#fff" />
      </View>
      <View style={{padding:12}}>
        <Text style={{color:'#fff', fontWeight:'800', fontSize:18}}>{item.title}</Text>
        <Text style={{color:'#9ca3af', marginTop:6}}>{item.desc}</Text>

        <View style={{flexDirection:'row', marginTop:12}}>
          <TouchableOpacity onPress={()=>setTab('notes')} style={[styles.tab, tab==='notes'&&styles.tabActive]}><Text style={tab==='notes'?styles.tabTextActive:styles.tabText}>Notes</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>setTab('quiz')} style={[styles.tab, tab==='quiz'&&styles.tabActive]}><Text style={tab==='quiz'?styles.tabTextActive:styles.tabText}>Quiz</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>setTab('text')} style={[styles.tab, tab==='text'&&styles.tabActive]}><Text style={tab==='text'?styles.tabTextActive:styles.tabText}>Text</Text></TouchableOpacity>
        </View>

        <ScrollView style={{marginTop:12, maxHeight:300}}>
          {tab==='notes' && <Text style={{color:'#e6eef7'}}>Generated Notes: Here is a mocked generated note content matching the figma's summary area.</Text>}
          {tab==='quiz' && (
            <View>
              <Text style={{color:'#e6eef7', marginBottom:8}}>Question: Which HTML tag is semantic for a header?</Text>
              <View style={{backgroundColor:'#111', padding:8, borderRadius:8}}><Text style={{color:'#fff'}}>A) header  B) div  C) span</Text></View>
            </View>
          )}
          {tab==='text' && <Text style={{color:'#e6eef7'}}>Transcribed Text: The transcribed lecture text goes here. This is mocked text to match the layout in your figma images.</Text>}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tab:{paddingVertical:8, paddingHorizontal:14, backgroundColor:'#222', borderRadius:20, marginRight:8},
  tabActive:{backgroundColor:'#6b5dd3'},
  tabText:{color:'#cbd5e1'},
  tabTextActive:{color:'#fff', fontWeight:'700'}
});
