import { StyleSheet, Linking, View, Alert, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { WebView } from 'react-native-webview';
import Geocoder from 'react-native-geocoder';
import GetLocation, {
  Location,
  LocationError,
  LocationErrorCode,
} from 'react-native-get-location';
import Juu from './src/Screen/Juu';
import Stacknavigation from './src/navigation/Stacknavigation';
const App = () => {
  return (
    <>
      <Stacknavigation />
    </>

  )
}

export default App

const styles = StyleSheet.create({})