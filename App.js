
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Program details</Text>

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
          <MaterialIcons name="check-circle" size={24} color="#2E5C91" />
          <Text style={styles.featureText}>This program has 6 activities</Text>
        </View>
        <View style={styles.featureContainer}>
          <MaterialIcons name="check-circle" size={24} color="#2E5C91" />
          <Text style={styles.featureText}>Full-time access to this program</Text>
        </View>
      </View>

      <View style={styles.continueContainer}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
  },
  headerText: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 15, 
    textAlign: 'left',
    paddingLeft: 10, 
  },
  programContainer: {
    alignItems: 'center',
    marginBottom: 30, 
    height: height * 0.4,
    width: '100%',
    backgroundColor: '#f5f5dc',
    borderBottomRightRadius: 150, 
    borderBottomLeftRadius: 150,
  },
  programImage: {
    width: 250, 
    height: 250,  
    borderRadius: 20,
  },
  programTitle: {
    fontSize: 18, 
    color: 'black',
    marginTop: 10,  
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginTop: 20,  
    marginBottom: 20,  
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingHorizontal: 20,  
  },
  unlockedText: {
    fontSize: 24, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,  
  },
  descriptionText: {
    textAlign: 'center',
    color: '#6c757d',
    marginBottom: 30,  
    fontSize: 16,  
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,  
    marginBottom: 10,  
  },
  featureText: {
    marginLeft: 10,  
    color: '#6c757d',
    fontSize: 16,  
  },
  continueContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,  
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20, 
    width: '85%',  
  },
  continueButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18, 
  },
});
