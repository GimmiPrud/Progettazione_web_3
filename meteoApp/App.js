import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

// Utilizziamo JsonPlaceHolder come mock API
const getMockWeatherData = (city) =>{
  // Simulazione dati meteo casuali
  const mockData = {
    temp: Math.floor(Math.random() * (30-10) + 10), // temperatura tra 10 e 30 gradi
    Humidity: Math.floor(Math.random() * (100-40) + 40), // umidità tra 40 e 100
    windSpeed: Math.floor(Math.random() * (50-0) + 0), // vento tra 0 e 50
    condictions:["soleggiato","piovoso","nuvoloso","nevoso"][Math.floor(Math.random()*4)]
  };

  // Simuliamo una chiamata asincrona 
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve(mockData);

    }, 2000); // ritardo di 2 secondi per simulare una chiamata al servizio internet.
  })
}

export default function App() {
  const [city, setcity] = useState("");
  const [ weatherData, setWeatherData] = useState(null);
  const [ loading, setLoading] = useState(false);
  const [ error, setError] = useState(null);

const fetchWeatherData = async () =>{
  if (!city.trim()){
    Alert.alert("Error", " Please, Insert a city ");
    return;
  }

  setLoading(true);
  setError(null);

  try{
    const data = await getMockWeatherData(city);
    setWeatherData(data);
  } catch{
    setError("Error");
    Alert.alert("Error","impossible to data recover");
  } finally{
    setLoading(false);
  }

};

const 



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
