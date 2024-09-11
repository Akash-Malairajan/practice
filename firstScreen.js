
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur'; 

const initialData = [
  { id: '1', title: 'Day 1 - Deciding what you want', image: require('./assets/day1.webp'), bright: true, completed: false },
  { id: '2', title: 'Day 2 - Transforming actions into habits', image: require('./assets/day2.jpg'), bright: false, completed: false },
  { id: '3', title: 'Day 3 - Transforming actions into habits', image: require('./assets/day3.jpeg'), bright: false, completed: false },
  { id: '4', title: 'Day 4 - Distraction: The actual reward', image: require('./assets/day4.jpg'), bright: false, completed: false },
  { id: '5', title: 'Day 5 - Clear the chaos', image: require('./assets/day5.jpg'), bright: false, completed: false },
  { id: '6', title: 'Day 6 - Bouncing back from setbacks', image: require('./assets/day6.jpeg'), bright: false, completed: false },
  { id: '7', title: 'Day 7 - Finding your inner friend', image: require('./assets/day7.jpg'), bright: false, completed: false },
  { id: '8', title: 'Day 8 - Reinforcing your habits', image: require('./assets/day8.jpg'), bright: false, completed: false }, 
];

const ListItem = ({ item, index, toggleCompletion, isDisabled }) => {
  const fadeLevels = ['#fff', '#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0', '#a0a0a0'];
  const backgroundColor = item.bright ? ['#fff', '#fff'] : (index === 7 ? ['#e6e6e6', '#e6e6e6'] : [fadeLevels[index], '#e6e6e6']);

  return (
    <TouchableOpacity
      onPress={() => !isDisabled && toggleCompletion(item.id)}
      style={[styles.itemContainer, isDisabled && styles.disabled]}
      disabled={isDisabled}
    >
      <View style={styles.itemContent}>
        <LinearGradient colors={backgroundColor} style={styles.linearGradient}>
          <View style={styles.itemInnerContent}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            {item.completed ? (
              <Ionicons name="checkmark-circle" size={24} color="orange" />
            ) : (
              <Ionicons name="lock-closed-outline" size={24} color="#ccc" />
            )}
          </View>
        </LinearGradient>
        {isDisabled && (
          <BlurView style={styles.blurView} intensity={50} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default function SecondPage() {
  const [data, setData] = useState(initialData);

  const toggleCompletion = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
    
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setData(updatedData);
  };

  const getPreviousDayCompletionStatus = (index) => {
    if (index === 0) return true;
    return data[index - 1].completed; 
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.subHeading}>
        These 8 activities will help you build a reading habit and improve your communication
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ListItem
            item={item}
            index={index}
            toggleCompletion={toggleCompletion}
            isPreviousCompleted={getPreviousDayCompletionStatus(index)}
            isDisabled={index > 0 && !getPreviousDayCompletionStatus(index) && item.completed === false}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    color: '#777',
    paddingHorizontal: 20,
    marginBottom: 40,
    marginTop: -30
  },
  list: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginBottom: 15,
  },
  linearGradient: {
    borderRadius: 15,
    padding: 15,
  },
  itemInnerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  disabled: {
    opacity: 0.3,
  },
  blurView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    borderRadius: 15,
  },
});
