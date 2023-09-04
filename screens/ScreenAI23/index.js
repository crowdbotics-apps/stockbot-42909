import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList } from 'react-native';

const FAQScreen = () => {
  const faqs = [{
    id: '1',
    question: 'Question 1',
    answer: 'Answer 1'
  }, {
    id: '2',
    question: 'Question 2',
    answer: 'Answer 2'
  }, {
    id: '3',
    question: 'Question 3',
    answer: 'Answer 3'
  }, {
    id: '4',
    question: 'Question 4',
    answer: 'Answer 4'
  }, {
    id: '5',
    question: 'Question 5',
    answer: 'Answer 5'
  }];
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Frequently Asked Questions</Text>
      </View>
      <FlatList data={faqs} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.faqContainer}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  faqContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  answer: {
    fontSize: 16,
    marginTop: 10
  }
});
export default FAQScreen;