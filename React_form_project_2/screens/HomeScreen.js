
// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Benvenuto nell'App</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Registration')}
      >
        <Text style={styles.buttonText}>Vai alla Registrazione</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;