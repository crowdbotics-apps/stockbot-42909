import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Edit payment" onPress={() => {}} />
        <Button title="Notifications settings" onPress={() => {}} />
        <Button title="Privacy policy" onPress={() => {}} />
        <Button title="Terms and Conditions" onPress={() => {}} />
        <Button title="Change password" onPress={() => {}} />
        <Button title="Support/ Send Feedback" onPress={() => {}} />
        <Button title="Contact-us" onPress={() => {}} />
        <Button title="Frequently Asked Questions Module" onPress={() => {}} />
        <Button title="Invite a friend" onPress={() => {}} />
        <Button title="Delete account" onPress={() => {}} />
        <Button title="Log out" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF'
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20
  }
});
export default ScreenComponent;