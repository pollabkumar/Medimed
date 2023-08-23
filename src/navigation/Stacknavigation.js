import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Splashscreen/SplashScreen';
import Juu from '../Screen/Juu';

const Stacknavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Juu" component={Juu} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Stacknavigation

const styles = StyleSheet.create({})