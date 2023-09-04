import React, { useState } from 'react';
import { SafeAreaView, View, Text, Modal, Button, StyleSheet } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return <SafeAreaView style={styles.container}>
      <Button title="Show Info" onPress={() => setModalVisible(true)} />
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is the information about the displayed data</Text>
            <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});
export default App;