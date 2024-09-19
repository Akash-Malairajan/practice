
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const initialData = [
  { id: '1', title: 'Day 1 - Deciding what you want', image: require('../assets/day1.webp'), completed: false },
  { id: '2', title: 'Day 2 - Transforming actions into habits', image: require('../assets/day2.jpg'), completed: false },
  { id: '3', title: 'Day 3 - Transforming actions into habits', image: require('../assets/day3.jpeg'), completed: false },
  { id: '4', title: 'Day 4 - Distraction: The actual reward', image: require('../assets/day4.jpg'), completed: false },
  { id: '5', title: 'Day 5 - Clear the chaos', image: require('../assets/day5.jpg'), completed: false },
  { id: '6', title: 'Day 6 - Bouncing back from setbacks', image: require('../assets/day6.jpeg'), completed: false },
  { id: '7', title: 'Day 7 - Finding your inner friend', image: require('../assets/day7.jpg'), completed: false },
  { id: '8', title: 'Day 8 - Reinforcing your habits', image: require('../assets/day8.jpg'), completed: false },
];

const getOpacity = (index) => {
  const opacity = 1 - (index * 0.1); 
  return opacity < 0.1 ? 0.1 : opacity; 
};

const getBackgroundColor = (index) => {
  const baseColor = '#3271a6';
  const opacity = getOpacity(index);
  const hexOpacity = Math.round(opacity * 255).toString(16).padStart(2, '0');
  return `${baseColor}${hexOpacity}`;
};

const ListItem = ({ item, index, onPress }) => {
  const backgroundColor = getBackgroundColor(index);
  const opacity = getOpacity(index); 

  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <View style={[styles.solidBackground, { backgroundColor }]}>
          <View style={styles.itemInnerContent}>
            <Image source={item.image} style={[styles.image, { opacity }]} />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Innergy</Text>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.iconBackground}>
                {item.completed ? (
                  <View style={[styles.completedIcon, { opacity }]}>
                    <Ionicons name="checkmark-circle" size={24} color="#ff8c00" />
                  </View>
                ) : (
                  <View style={[styles.lockIcon, { opacity }]}>
                    <Ionicons name="lock-closed-outline" size={18} color="grey" />
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Activities({ navigation }) {
  const [data, setData] = useState(initialData);
  const [selectedId, setSelectedId] = useState(null);

  const toggleCompletion = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setData(updatedData);
    setSelectedId(id);
  };

  const onPressItem = (id) => {
    toggleCompletion(id);
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
            onPress={() => onPressItem(item.id)}
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
    marginBottom: 15,
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
    elevation: 1,
  },
});




