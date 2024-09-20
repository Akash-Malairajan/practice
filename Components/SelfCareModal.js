import React from 'react';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';

const SelfCareModal = ({ showPopup, selectedCard, setShowPopup }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
    textAlign: 'center',
  },
});

export default SelfCareModal;
