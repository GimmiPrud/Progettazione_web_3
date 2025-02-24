
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import milan from '@/assets/images/milan.jpg'
import { Link, Stack } from 'expo-router'


const App = () => {
  
  return (
    <View style={styles.container}>
      <ImageBackground source={milan} style={styles.image}>
      <Text style={styles.Text}>Milan store</Text> 
      <Text style={{textAlign:"center", fontWeight:"bold", backgroundColor:"red"}}>Esplora i nostri prodotti e le nostre novità:</Text>

      <Link href="/maglie" style={{marginHorizontal:"auto",marginVertical:"15"}} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Magliette</Text>
      </Pressable>
      </Link>
      <Link href="/scarpe" style={{marginHorizontal:"auto",marginVertical:"15"}} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Scarpini</Text>
      </Pressable>
      </Link>
      <Link href="/gadget" style={{marginHorizontal:"auto",marginVertical:"15"}} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Gadget</Text>
      </Pressable>
      </Link>
      </ImageBackground>
    </View>
  )
}

export default App  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center'
  },

  Text:{
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    fontFamily: 'times new roman',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  button:{
    backgroundColor: 'rgba(0,0,0,0.90)',
    padding: 8,
    borderRadius: 15,
    height: 60,
    justifyContent: 'center',
    width: 300,
    margin:10
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'heavy',
    textAlign: 'center',
    textDecorationLine: 'underline'
  }

})