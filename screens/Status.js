import React, { Component } from 'react';
import { View,SafeAreaView, Text } from 'react-native';
import colors from '../common/Colors';
import { WebView } from 'react-native-webview';
class SaveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions =(props)=>({
    header:null
});
  render() {
    return (
      // <SafeAreaView style={{backgroundColor:'#ededed',flex:1}}>
      //   <WebView
      //   source={{ uri: 'https://www.covid19india.org/' }}
      //   style={{ height:1000,width:}}
      // />
      // </SafeAreaView>
      <WebView
      source={{ uri: 'https://www.covid19india.org' }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      style={{ marginTop: 20 }}
    />
    );
  }
}

export default SaveScreen;
