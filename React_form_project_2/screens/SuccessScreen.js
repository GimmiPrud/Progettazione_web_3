
// screens/SuccessScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrazione Completata!</Text>
      <Text style={styles.message}>
        La tua registrazione è stata completata con successo.
      </Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Torna alla Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;