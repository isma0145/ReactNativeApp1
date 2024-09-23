import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from "react-native";

const randomImages = [
  'https://picsum.photos/800/600?random=1',
  'https://picsum.photos/800/600?random=2',
  'https://picsum.photos/800/600?random=3',
  'https://picsum.photos/800/600?random=4',
];

export default function HomePage({ navigation }) {
  const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Image source={{ uri: randomImage }} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.title}>Explore the World!</Text>
          <Text style={styles.subtitle}>Find your next adventure.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => navigation.navigate("About")}>
            <Text style={styles.buttonText}>About Us</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.navigate("List")}>
            <Text style={styles.buttonText}>View List</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Your journey starts here!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 34,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#ddd",
    marginTop: 5,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#3399ff', // Blue color for buttons
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: "center",
    marginVertical: 20,
  },
  footerText: {
    color: '#ddd',
    fontSize: 14,
    textAlign: "center",
  },
});
