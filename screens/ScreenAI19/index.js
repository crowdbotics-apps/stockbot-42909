import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const InvestmentScreen = () => {
  const dummyData = {
    investment: 5000,
    profit: 2000,
    image: 'https://tinyurl.com/42evm3m3'
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Investment</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: dummyData.image
      }} />
        <Text style={styles.text}>Investment: ${dummyData.investment}</Text>
        <Text style={styles.text}>Profit: ${dummyData.profit}</Text>
      </View>
      <View style={styles.footer}>
        <Button title="Withdraw to Wallet" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default InvestmentScreen;