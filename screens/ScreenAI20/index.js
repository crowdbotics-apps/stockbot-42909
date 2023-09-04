import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const WalletScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Wallet</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Wallet Balance</Text>
        <Text style={styles.balanceAmount}>$1000</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Load Money" onPress={() => {}} />
        <Button title="Set Recurring Loadings" onPress={() => {}} />
        <Button title="Withdraw from Stock Exchange" onPress={() => {}} />
        <Button title="Transfer to Bank Account" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  balanceContainer: {
    marginBottom: 20
  },
  balanceText: {
    fontSize: 18,
    color: '#333'
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});
export default WalletScreen;