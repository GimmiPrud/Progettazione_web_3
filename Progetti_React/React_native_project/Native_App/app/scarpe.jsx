import { StyleSheet, Image, Platform, ImageBackground } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import milan_sca from '@/assets/images/milan_sca.jpg'
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const Scarpe = () => {
  const [scarpe, setScarpe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/scarpe')
      .then(response => {
        setScarpe(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching shoes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={scarpe}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.brand} {item.modello}</Text>
          <Text>Anno: {item.anno_rilascio}</Text>
          <Text>Giocatore: {item.giocatore_milan}</Text>
        </View>
      )}
    />
  );
};
export default Scarpe;

  // <ParallaxScrollView
  //   headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
  //   headerImage={
  //     <ImageBackground
  //     source={milan_sca}
  //     style={styles.image_}
  //     />
  //   }>
  //   <ThemedView style={styles.titleContainer}>
  //     <ThemedText style={styles.text}>i nostri scarpini</ThemedText>
  //   </ThemedView>
  //   <ThemedText></ThemedText>
  //   <Collapsible title="Scarpini">
  //     <ThemedText>
        
  //     </ThemedText>
  //     <ExternalLink href="https://store.acmilan.com/?utm_source=google&utm_medium=cpc&utm_campaign=0822_brand_abbigliamento&utm_content=paid&tw_source=google&tw_adid=645929548489&tw_campaign=17960359593&gad_source=1&gclid=CjwKCAiAzvC9BhADEiwAEhtlN-b6D6eLQrNQs4BXCFmUln6IaSmcEChqsnzvTMj-Oxjn3EEIC8AWnxoCJpgQAvD_BwE">
  //       <ThemedText type="link"> Vai allo shop ufficiale</ThemedText>
  //     </ExternalLink>
  //   </Collapsible>
  // </ParallaxScrollView>



const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  image_:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
    
  },
  text:{
    color:"red",
    fontSize:"x-large",
    fontFamily:"sans",
    fontWeight:"bold"
  }
});
