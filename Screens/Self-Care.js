import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import SelfCareModal from '../Components/SelfCareModal'; 

const SelfCareProgram = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  const handleCardPress = (programName) => {
    if (programName === 'Innergy') {
      setShowPopup(false);
    } else {
      setSelectedCard(programName);
      setShowPopup(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a daily self-care program</Text>
      <Text style={styles.subtitle}>Try to complete reading 1 page today and highlight</Text>

      <View style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
          <Pressable onPress={() => handleCardPress('Innergy')}>
            <Card style={styles.card}>
              <Card.Cover source={require('../assets/image1.jpg')} style={styles.image} />
            </Card>
            <Text style={styles.cardTitle}>Innergy</Text>
            <Text style={styles.cardSubtitle}>Try to complete reading 1 page today and highlight</Text>
          </Pressable>
        </View>

        <View style={styles.cardWrapper}>
          <Pressable onPress={() => handleCardPress('Time management')}>
            <Card style={styles.card}>
              <Card.Cover source={require('../assets/image2.webp')} style={styles.image} />
            </Card>
            <Text style={styles.cardTitle}>Time management</Text>
            <Text style={styles.cardSubtitle}>Try to complete reading 1 page today and highlight</Text>
          </Pressable>
        </View>

        <View style={styles.cardWrapper}>
          <Pressable onPress={() => handleCardPress('Confidence')}>
            <Card style={styles.card}>
              <Card.Cover source={require('../assets/image3.webp')} style={styles.image} />
            </Card>
            <Text style={styles.cardTitle}>Confidence</Text>
            <Text style={styles.cardSubtitle}>Try to complete reading 1 page today and highlight</Text>
          </Pressable>
        </View>
      </View>

      
      <SelfCareModal
        showPopup={showPopup}
        selectedCard={selectedCard}
        setShowPopup={setShowPopup}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 25,
    width: '70%',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 30,
  },
  card: {
    width: '100%',
  },
  image: {
    height: 120,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#696969',
    textAlign: 'left',
    marginBottom: 4,
    marginTop: 10,
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'left',
  },
});

export default SelfCareProgram;
