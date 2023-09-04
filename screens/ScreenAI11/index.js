import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

const TermsAndConditionsScreen = () => {
  const termsAndConditions = `
    1. Acceptance of Terms
    2. Changes to Terms
    3. Privacy Policy
    4. User Content
    5. Copyright Policy
    6. Intellectual Property
    7. Termination
    8. Disclaimer of Warranties
    9. Limitation of Liability
    10. General
  `;
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.text}>{termsAndConditions}</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  contentContainer: {
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24
  }
});
export default TermsAndConditionsScreen;