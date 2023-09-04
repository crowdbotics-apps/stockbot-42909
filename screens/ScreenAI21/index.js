import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet } from 'react-native';

const BankDetailsScreen = () => {
  const [bankName, setBankName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [iban, setIban] = useState('');
  const [swift, setSwift] = useState('');
  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Bank Name" value={bankName} onChangeText={setBankName} />
        <TextInput style={styles.input} placeholder="Account Name" value={accountName} onChangeText={setAccountName} />
        <TextInput style={styles.input} placeholder="Account Number" value={accountNumber} onChangeText={setAccountNumber} />
        <TextInput style={styles.input} placeholder="Routing Number" value={routingNumber} onChangeText={setRoutingNumber} />
        <TextInput style={styles.input} placeholder="IBAN" value={iban} onChangeText={setIban} />
        <TextInput style={styles.input} placeholder="SWIFT" value={swift} onChangeText={setSwift} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={() => {}} />
        <Button title="Select" onPress={() => {}} />
        <Button title="Remove" onPress={() => {}} />
        <Button title="Add another" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  inputContainer: {
    flex: 1
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default BankDetailsScreen;