
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ navigation, title, showBackButton = true, showPlayPauseButton = false, isPlaying, togglePlayPause }) => (
  <View style={styles.headerContainer}>
    {showBackButton && (
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    )}
    <Text style={styles.headerTitle}>{title}</Text>
    {showPlayPauseButton && (
      <TouchableOpacity onPress={togglePlayPause} style={styles.playPauseButton}>
        <Ionicons name={isPlaying ? "pause" : "play"} size={15} color="white" />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70, 
    paddingTop: 10, 
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  playPauseButton: {
    backgroundColor: 'orange',
        width: 25,
        height: 25,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,}
});

export default Header;


