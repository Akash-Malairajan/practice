import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import { Card } from 'react-native-paper';

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

      <Modal
        visible={showPopup}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowPopup(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.popup}>
            <Text style={styles.popupText}>
              You won't be able to unlock the {selectedCard} program until you complete your previous program.
            </Text>
            <Pressable
              style={styles.popupButton}
              onPress={() => setShowPopup(false)}
            >
              <Text style={styles.popupButtonText}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  imagess: {
    height: 125,
    width: 180,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  popupButton: {
    backgroundColor: '#FF9C47',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupButtonText: {
    color: '#fff',
    fontSize: 16,
    width: 230,
    paddingStart: 90,
  },
});

export default SelfCareProgram;


