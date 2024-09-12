import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import FirstScreen from './firstScreen'; 

const Stack = createStackNavigator();

function ProgramDetailsScreen() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <View style={styles.programContainer}>
        <Image 
          source={require('./assets/img1.png')}
          style={styles.programImage} 
        />
        <Text style={styles.programTitle}>Time management</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.unlockedText}>Program unlocked!</Text>
        <Text style={styles.descriptionText}>
          Your Be future ready program has been successfully purchased
        </Text>

        <View style={styles.featureContainer}>
          <Ionicons name="checkmark-circle" size={24} color="#191970" /> 
          <Text style={styles.featureText}>This program has 6 activities</Text>
        </View>

        <View style={styles.featureContainer}>
          <Ionicons name="checkmark-circle" size={24} color="#191970" /> 
          <Text style={styles.featureText}>Full-time access to this program</Text>
        </View>
      </View>

      <View style={styles.continueContainer}>
        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={() => navigation.navigate('BeFutureReady')}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const PlayPauseButton = () => (
    <TouchableOpacity onPress={togglePlayPause} style={styles.playPauseButton}>
      <Ionicons name={isPlaying ? "pause" : "play"} size={15} color="white" />
    </TouchableOpacity>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ProgramDetails" 
          component={ProgramDetailsScreen} 
          options={{ title: 'Program details' }} 
        />
        <Stack.Screen 
          name="BeFutureReady" 
          component={FirstScreen} 
          options={{ 
            title: 'Be future ready',
            headerRight: () => <PlayPauseButton />,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 0 },
  programContainer: { alignItems: 'center', marginBottom: 30, height: 300, width: '100%', backgroundColor: '#f5f5dc', borderBottomRightRadius: 150, borderBottomLeftRadius: 150 },
  programImage: { width: 250, height: 250, borderRadius: 20 },
  programTitle: { fontSize: 18, color: 'black', marginTop: 10, fontWeight: 'bold' },
  detailsContainer: { marginTop: 20, marginBottom: 20, backgroundColor: 'transparent', borderRadius: 10, paddingHorizontal: 20 },
  unlockedText: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  descriptionText: { textAlign: 'center', color: '#6c757d', marginBottom: 30, fontSize: 16 },
  featureContainer: { flexDirection: 'row', alignItems: 'center', paddingLeft: 30, marginBottom: 10 },
  featureText: { marginLeft: 10, color: '#6c757d', fontSize: 16 },
  continueContainer: { width: '100%', justifyContent: 'center', alignItems: 'center' },
  continueButton: { backgroundColor: '#FFA500', paddingVertical: 15, borderRadius: 25, alignItems: 'center', marginTop: 20, width: '85%' },
  continueButtonText: { color: 'black', fontWeight: 'bold', fontSize: 18 },
  playPauseButton: {
    backgroundColor: 'orange', 
    width: 25, 
    height: 25, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginRight: 15,
  },
});

export default App;
