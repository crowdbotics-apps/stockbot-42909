import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const UploadScreen = () => {
  const [image, setImage] = useState('https://tinyurl.com/42evm3m3');

  const handleUpload = () => {// Handle the upload functionality here
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{
        uri: image
      }} style={styles.image} />
        <Text style={styles.text}>Please upload your identification document</Text>
      </View>
      <Button title="Submit" onPress={handleUpload} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  imageContainer: {
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
});
export default UploadScreen;