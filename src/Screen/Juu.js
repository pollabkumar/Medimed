import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Juu = () => {
  return (
    <View style={{flex:1}}>
      {/* <Text style={{color:"red"}}>kjfdjhfkjdhgfkjdg</Text> */}
         <WebView 
          source={{ uri: 'https://medimed.in/' }} 
          // javaScriptEnabled={true}
          // injectedJavaScript={injectedToHtml()}
        />
    </View>
  )
}

export default Juu

const styles = StyleSheet.create({})