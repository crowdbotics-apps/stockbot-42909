import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList, TextInput, TouchableOpacity } from 'react-native';

const TrackerScreen = () => {
  const [trackers, setTrackers] = useState([{
    id: '1',
    name: 'Tracker 1'
  }, {
    id: '2',
    name: 'Tracker 2'
  }, {
    id: '3',
    name: 'Tracker 3'
  }]);
  const [amount, setAmount] = useState('');

  const removeTracker = id => {
    setTrackers(trackers.filter(tracker => tracker.id !== id));
  };

  const invest = () => {
    alert(`Invested ${amount}`);
  };

  return <SafeAreaView style={_styles.OBTqixEY}>
      <FlatList data={trackers} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.dchmCosJ}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => removeTracker(item.id)} />
          </View>} />
      <View style={_styles.NAVEHQMI}>
        <TextInput style={_styles.rGIiMDWa} onChangeText={setAmount} value={amount} placeholder="Enter amount" keyboardType="numeric" />
        <Button title="Invest" onPress={invest} />
      </View>
      <TouchableOpacity style={_styles.PVUoLUjm} onPress={() => alert('Purchase button clicked')}>
        <Text style={_styles.YFiBfNpt}>Purchase</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

export default TrackerScreen;

const _styles = StyleSheet.create({
  OBTqixEY: {
    flex: 1,
    backgroundColor: "#fff"
  },
  dchmCosJ: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  NAVEHQMI: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  rGIiMDWa: {
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    marginRight: 10
  },
  PVUoLUjm: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    alignItems: "center"
  },
  YFiBfNpt: {
    color: "white"
  }
});