// components/BottomNav.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function BottomNav() {
  const navigation = useNavigation();
  const route = useRoute();

  // Helper to know which tab is active
  const isActive = (name) => route.name === name;

  return (
    <View style={styles.container}>
      {/* Home */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('StudentHome')}
      >
        <Ionicons
          name="home"
          size={26}
          color={isActive('StudentHome') ? '#FFD76F' : '#FFFFFF'}
        />
      </TouchableOpacity>

      {/* Videos / Courses (VideoDetail for now) */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('VideoDetail')}
      >
        <Ionicons
          name="play-circle"
          size={26}
          color={isActive('VideoDetail') ? '#FFD76F' : '#FFFFFF'}
        />
      </TouchableOpacity>

      {/* Center Add / Upload Lecture */}
      <TouchableOpacity
        style={[styles.item, styles.centerItem]}
        onPress={() => navigation.navigate('UploadLecture')}
      >
        <Ionicons
          name="add-circle"
          size={40}
          color={isActive('UploadLecture') ? '#FFD76F' : '#FFFFFF'}
        />
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Profile')}
      >
        <Ionicons
          name="person"
          size={26}
          color={isActive('Profile') ? '#FFD76F' : '#FFFFFF'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#6C63FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  item: {
    padding: 6,
  },
  centerItem: {
    marginTop: -8, // makes the center icon pop up a bit
  },
});
