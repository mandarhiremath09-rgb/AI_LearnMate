import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderSmall({title}){
  return (
    <View style={styles.root}><Text style={styles.title}>{title}</Text></View>
  );
}

const styles = StyleSheet.create({
  root:{padding:14, backgroundColor:'#0b1020'},
  title:{color:'#fff', fontWeight:'800', fontSize:18}
});
