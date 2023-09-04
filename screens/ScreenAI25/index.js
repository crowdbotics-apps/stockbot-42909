import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const email = 'sender@example.com';

  const handleSend = () => {// Handle send feedback
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emailText}>{email}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
        <TextInput style={styles.input} placeholder="Text" value={text} onChangeText={setText} multiline />
        <Button title="Send" onPress={handleSend} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  emailText: {
    fontSize: 18,
    color: '#333333'
  },
  inputContainer: {
    padding: 20
  },
  input: {
    height: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5
  }
});
export default FeedbackScreen;