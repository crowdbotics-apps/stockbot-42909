import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const InvestorDetailsScreen = () => {
  const investor = {
    name: 'John Doe',
    portfolio: 'Tech Stocks',
    image: 'https://tinyurl.com/42evm3m3'
  };
  return <SafeAreaView style={styles.container}>
      <Image source={{
      uri: investor.image
    }} style={styles.image} />
      <Text style={styles.name}>{investor.name}</Text>
      <Text style={styles.portfolio}>{investor.portfolio}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Info" onPress={() => {}} />
        <Button title="Add Tracker to List" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10
  },
  portfolio: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  }
});
export default InvestorDetailsScreen;