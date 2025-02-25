import { StyleSheet, Image, Platform, ImageBackground } from 'react-native';

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const Accessori = () => {
  const [accessori, setAccessori] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/accessori')
      .then(response => {
        setAccessori(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching accessories:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Text>Loading...</Text>;

  return (

    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={[styles.headerText, styles.nomeColumn]}>Categoria</Text>
        <Text style={[styles.headerText, styles.numeroColumn]}>Desc.</Text>
        <Text style={[styles.headerText, styles.annoColumn]}>costo</Text>
      </View>

      <FlatList
        data={accessori}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.dataRow}>
            <Text style={[styles.dataText, styles.nomeColumn]}>{item.tipo}</Text>
            <Text style={[styles.dataText, styles.numeroColumn]}>{item.nome}</Text>
            <Text style={[styles.dataText, styles.annoColumn]}>{item.costo}</Text>
          </View>
        )}
      />
    </View>
  );
  };

export default Accessori;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor:"#960018",
    borderRadius:20,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: 30,
    borderBottomWidth: 4,
    borderBottomColor: 'black',
    borderRadius:50,
    backgroundColor:"#960018",
  },
  dataRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor:"black",
    borderRadius:50,
    margin: 10
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontSize:"medium"

  },
  dataText: {
    color: 'black',
    textAlign: 'center',
    fontWeight:"bold",
    fontSize:"medium"
  },
  nomeColumn: {
    flex: 0.5,
    paddingHorizontal: 8,
  },
  numeroColumn: {
    flex: 0.25, 
    paddingHorizontal: 8,
  },
  annoColumn: {
    flex: 0.25, 
    paddingHorizontal: 8,
  },
});

