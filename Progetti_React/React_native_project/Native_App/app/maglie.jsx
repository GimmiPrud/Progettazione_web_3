import { StyleSheet, Image, Platform, ImageBackground, View, Text, FlatList } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import milan_2 from '@/assets/images/milan_2.webp'
import axios from "axios";
import { useState, useEffect } from 'react';

const Magliette = () => {
  const [magliette, setMagliette] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/magliette')
      .then(response => {
        setMagliette(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
    {/* Intestazione della tabella */}
    <View style={styles.headerRow}>
      <Text style={[styles.headerText, styles.nomeColumn]}>Giocatore</Text>
      <Text style={[styles.headerText, styles.numeroColumn]}>Numero</Text>
      <Text style={[styles.headerText, styles.annoColumn]}>Anno</Text>
    </View>
  
    {/* Corpo della tabella */}
    <FlatList
      data={magliette}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.dataRow}>
          <Text style={[styles.dataText, styles.nomeColumn]}>{item.nome} {item.cognome}</Text>
          <Text style={[styles.dataText, styles.numeroColumn]}>{item.numero_maglia}</Text>
          <Text style={[styles.dataText, styles.annoColumn]}>{item.anno_utilizzo}</Text>
        </View>
      )}
    />
  </View>
);
};
export default Magliette


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
    flex: 0.5, // 50% dello spazio
    paddingHorizontal: 8,
  },
  numeroColumn: {
    flex: 0.25, // 25% dello spazio
    paddingHorizontal: 8,
  },
  annoColumn: {
    flex: 0.25, // 25% dello spazio
    paddingHorizontal: 8,
  },
});
