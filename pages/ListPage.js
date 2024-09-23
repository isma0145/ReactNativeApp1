import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  Image,
  Pressable,
  View,
  Alert,
} from 'react-native';

export default function ListPage({ navigation }) {
  const data = [
    { id: '1', title: 'Tropical Beach', image: 'https://picsum.photos/200/300?random=1' },
    { id: '2', title: 'Mountain Adventure', image: 'https://picsum.photos/200/300?random=2' },
    { id: '3', title: 'City Escape', image: 'https://picsum.photos/200/300?random=3' },
    { id: '4', title: 'Cultural Journey', image: 'https://picsum.photos/200/300?random=4' },
    { id: '5', title: 'Wild Safari', image: 'https://picsum.photos/200/300?random=5' },
    { id: '6', title: 'Countryside Retreat', image: 'https://picsum.photos/200/300?random=6' },
    { id: '7', title: 'Historical Sites', image: 'https://picsum.photos/200/300?random=7' },
    { id: '8', title: 'Romantic Getaway', image: 'https://picsum.photos/200/300?random=8' },
    { id: '9', title: 'Island Hopping', image: 'https://picsum.photos/200/300?random=9' },
    { id: '10', title: 'Adventure Sports', image: 'https://picsum.photos/200/300?random=10' },
  ];

  const clickEventListener = (item) => {
    Alert.alert('Message', 'You clicked ' + item.title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Our Destinations</Text>
      </View>
      <FlatList
        style={styles.contentList}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => clickEventListener(item)}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.title}</Text>
             
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 16,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3399ff',
    textAlign: 'center',
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    color: '#2c3e50',
    fontWeight: 'bold',
  }
});
