import { StyleSheet, Text, View,StatusBar,Image } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
     navigation.navigate("Juu")    
    },2000)
  })
  return (
    <View style={{}}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#106166" translucent={false} />
      <View style={{backgroundColor:"#106166",height:"100%",justifyContent:"center",alignItems:"center"}}>
      <Image 
      source={require('../assets/logo.png')}
      style={{height:170,width:170,}}
      resizeMode="contain" />
      </View>
    </View>

  )
}
export default SplashScreen
const styles = StyleSheet.create({})