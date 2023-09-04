import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Welcome to our app!'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Explore the features.'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Start your journey.'
  }];

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.carousel}>
        <Image source={{
        uri: slides[currentSlide].image
      }} style={styles.image} />
        <Text style={styles.text}>{slides[currentSlide].text}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={handlePrevious} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        navigation.navigate("ScreenAI6");
      }} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 50
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16
  }
});
export default OnboardingScreen;