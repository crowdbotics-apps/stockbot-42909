import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
const investors = [{
  id: '1',
  name: 'Investor 1'
}, {
  id: '2',
  name: 'Investor 2'
}, {
  id: '3',
  name: 'Investor 3'
}, {
  id: '4',
  name: 'Investor 4'
}, {
  id: '5',
  name: 'Investor 5'
}];

const InvestorScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Hedge fund" onPress={() => {}} />
        <Button title="Politician" onPress={() => {}} />
      </View>
      <FlatList data={investors} keyExtractor={item => item.id} renderItem={({
      item
    }) => <TouchableOpacity style={styles.listItem}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>} />
      <View style={styles.menu}>
        <Button title="Home" onPress={() => {}} />
        <Button title="Wallet" onPress={() => {}} />
        <Button title="Settings" onPress={() => {}} />
        <Button title="My trading list" onPress={() => {}} />
        <Button title="My investments" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  text: {
    fontSize: 18
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10
  }
});
export default InvestorScreen;