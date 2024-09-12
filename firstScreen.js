import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const initialData = [
  { id: '1', title: 'Day 1 - Deciding what you want', image: require('./assets/day1.webp'), completed: false },
  { id: '2', title: 'Day 2 - Transforming actions into habits', image: require('./assets/day2.jpg'), completed: false },
  { id: '3', title: 'Day 3 - Transforming actions into habits', image: require('./assets/day3.jpeg'), completed: false },
  { id: '4', title: 'Day 4 - Distraction: The actual reward', image: require('./assets/day4.jpg'), completed: false },
  { id: '5', title: 'Day 5 - Clear the chaos', image: require('./assets/day5.jpg'), completed: false },
  { id: '6', title: 'Day 6 - Bouncing back from setbacks', image: require('./assets/day6.jpeg'), completed: false },
  { id: '7', title: 'Day 7 - Finding your inner friend', image: require('./assets/day7.jpg'), completed: false },
  { id: '8', title: 'Day 8 - Reinforcing your habits', image: require('./assets/day8.jpg'), completed: false },
];

const getBackgroundColor = (index) => {
  const colors = [ '#3271a6', '#3982b8', '#4194cb', '#46a2da', '#58afdd', '#6abce2', '#8dcfec', '#b8e2f4' ];
  return colors[index] || '#b8e2f4'; 
};

const ListItem = ({ item, index, toggleCompletion, isDisabled, isSelected, onPress }) => {
  const backgroundColor = getBackgroundColor(index);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemContainer, isDisabled && styles.disabled]}
      disabled={isDisabled}
    >
      <View style={styles.itemContent}>
        <View style={[styles.solidBackground, { backgroundColor }]}>
          <View style={styles.itemInnerContent}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Innergy</Text> 
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.iconBackground}>
                {item.completed ? (
                  <View style={styles.completedIcon}>
                    <Ionicons name="checkmark-circle" size={24} color="#ff8c00" />
                  </View>
                ) : (
                  <View style={styles.lockIcon}>
                    <Ionicons name="lock-closed-outline" size={18} color="grey" />
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
        {isDisabled && (
          <BlurView style={styles.blurView} intensity={50} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default function SecondPage() {
  const [data, setData] = useState(initialData);
  const [selectedId, setSelectedId] = useState(null);

  const toggleCompletion = (id, index) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setData(updatedData);
    setSelectedId(id);
  };

  const onPressItem = (id, index) => {
    if (!data[index].completed && (index === 0 || data[index - 1].completed)) {
      toggleCompletion(id, index);
    } else if (data[index].completed) {
      toggleCompletion(id, index);
    }
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
            toggleCompletion={() => toggleCompletion(item.id, index)}
            isSelected={selectedId === item.id}
            onPress={() => onPressItem(item.id, index)}
            isDisabled={index > 0 && !data[index - 1].completed && !item.completed}
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
  subHeading: {
    fontSize: 16,
    color: '#777',
    paddingHorizontal: 20,
    marginBottom: 40,
    marginTop: -30,
  },
  list: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginBottom: 5,
  },
  solidBackground: {
    borderRadius: 15,
    padding: 15,
    overflow: 'hidden',
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
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  label: {
    fontSize: 14,
    color: 'black', 
  },
  title: {
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
  iconContainer: {
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    backgroundColor: '#FFF',
    height: 60,
    width: 35,
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedIcon: {
    width: 27,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 27,
    borderWidth: 0.7,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  lockIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 0.7,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
