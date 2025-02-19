import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

// Componente per visualizzare gli errori
const ErrorDisplay = ({ errors }) => {
  return (
    <View>
      {Object.keys(errors).map((key) => (
        <Text key={key} style={styles.errorText}>
          {errors[key]}
        </Text>
      ))}
    </View>
  );
};

// Componente Form
const FormComponent = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    // Validazione email
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    // Validazione password
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);

    // Se non ci sono errori, il form Ã¨ valido
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit({ email, password }); // Passa i dati del form al componente genitore
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Mostra gli errori */}
      <ErrorDisplay errors={errors} />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

// Componente principale
const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data); // Salva i dati inviati
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Form with Validation</Text>

      {/* Form */}
      <FormComponent onSubmit={handleFormSubmit} />

      {/* Mostra i dati inviati */}
      {submittedData && (
        <View style={styles.submittedDataContainer}>
          <Text style={styles.submittedDataText}>Submitted Data:</Text>
          <Text>Email: {submittedData.email}</Text>
          <Text>Password: {submittedData.password}</Text>
        </View>
      )}
    </ScrollView>
  );
};

// Stili
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  submittedDataContainer: {
    marginTop: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  submittedDataText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;