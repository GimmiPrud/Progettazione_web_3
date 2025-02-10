import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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

const WeatherInfo = ({data}) => {
  return (
  <View style={styles.weatherContainer}>
    <Text style={styles.cityName}>{city}</Text>
    <Text style={styles.temperature}>{data.temp} C°</Text>
    <Text style={styles.description}>{data.condictions}</Text>
    <View style={styles.detailsContainer}>
      <Text style={styles.details}> Umidità: {data.Humidity} %</Text>
      <Text style={styles.details}> Vento: {data.windSpeed} km/h</Text>
    </View>
  </View>
  );
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previsioni meteo</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='insert a city' value={city} onChangeText={setcity}></TextInput>
        <TouchableOpacity style ={styles.button} onPress={fetchWeatherData} disabled={loading}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {loading && (<ActivityIndicator size={'large'} color={"#0000ff"}></ActivityIndicator>)}

      {!loading && weatherData && (<WeatherInfo data={weatherData}></WeatherInfo>)}

      {error && (
        <Text style = {styles.error}> {error}</Text>
      )}
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
