
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import SuccessScreen from './screens/SuccessScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="Registration" 
          component={RegistrationScreen} 
          options={{ title: 'Registrazione' }}
        />
        <Stack.Screen 
          name="Success" 
          component={SuccessScreen} 
          options={{ title: 'Registrazione Completata' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

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

// screens/RegistrationScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    telefono: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validazione nome
    if (!formData.nome.trim()) {
      newErrors.nome = 'Il nome è obbligatorio';
      isValid = false;
    } else if (formData.nome.length < 2) {
      newErrors.nome = 'Il nome deve essere di almeno 2 caratteri';
      isValid = false;
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido';
      isValid = false;
    }

    // Validazione telefono
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'Il telefono è obbligatorio';
      isValid = false;
    } else if (!phoneRegex.test(formData.telefono)) {
      newErrors.telefono = 'Inserisci un numero di telefono valido (10 cifre)';
      isValid = false;
    }

    // Validazione password
    if (!formData.password) {
      newErrors.password = 'La password è obbligatoria';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'La password deve essere di almeno 6 caratteri';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigation.navigate('Success');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={[styles.input, errors.nome && styles.inputError]}
            value={formData.nome}
            onChangeText={(text) => setFormData({ ...formData, nome: text })}
            placeholder="Inserisci il tuo nome"
          />
          {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            placeholder="Inserisci la tua email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Telefono</Text>
          <TextInput
            style={[styles.input, errors.telefono && styles.inputError]}
            value={formData.telefono}
            onChangeText={(text) => setFormData({ ...formData, telefono: text })}
            placeholder="Inserisci il tuo numero di telefono"
            keyboardType="phone-pad"
          />
          {errors.telefono && <Text style={styles.errorText}>{errors.telefono}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={[styles.input, errors.password && styles.inputError]}
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            placeholder="Inserisci la tua password"
            secureTextEntry
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrati</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ff6b6b',
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
});