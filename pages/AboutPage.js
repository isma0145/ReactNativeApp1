import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

const randomImages = [
  'https://picsum.photos/300/400?random=1',
  'https://picsum.photos/300/400?random=2',
  'https://picsum.photos/300/400?random=3',
  'https://picsum.photos/300/400?random=4',
];

export default function AboutPage({ navigation }) {
  const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Home")}>
              <Text style={styles.buttonText}>Home Page</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("List")}>
              <Text style={styles.buttonText}>List Page</Text>
            </Pressable>
          </View>
          <Image
            source={{ uri: randomImage }}
            style={styles.image}
          />
          <Text style={styles.title}>Discover the World with Us!</Text>
          <Text style={styles.text}>
            Embark on unforgettable journeys to breathtaking destinations. 🌍✈️{`\n`}
            Whether you seek adventure in the mountains, relaxation on pristine beaches, or vibrant city experiences, we’ve got you covered. {`\n`}
            {`\n`}
            Join us as we explore hidden gems and popular spots alike. From cultural experiences to adrenaline-pumping activities, let your travel dreams come alive!{`\n`}
            {`\n`}
            Adventure awaits—let’s make your next trip extraordinary!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#3399ff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    borderColor: "#ddd",
    borderWidth: 5,
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    color: '#2c3e50',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
  },
});
