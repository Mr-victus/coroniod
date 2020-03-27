import React, { Component } from 'react';
import { View, Text,SafeAreaView, ScrollView } from 'react-native';
import colors from '../common/Colors';
import { normalizeHeight as nh } from '../common/NormalizeHeight';
import { normalizeWidth as nw } from '../common/NormalizeWidth';
import OrderIndivisual from '../components/OrderIndivisual';
import images from '../common/Images';
import { Searchbar } from 'react-native-paper';
class FeedScreen extends Component {
  static navigationOptions={header:null}
  constructor(props) {
    super(props);
    this.state = {
      firstQuery:'',
      images: [
        // "https://source.unsplash.com/1024x768/?nature",
        // "https://source.unsplash.com/1024x768/?water",
        // "https://source.unsplash.com/1024x768/?girl",
        // "https://source.unsplash.com/1024x768/?tree", // Network image
        images.logo,          // Local image
        images.logo,
        images.logo,
      ]
    };
  }
  onPickUp(){
    this.props.navigation.navigate('Order')
  }
  render() {
    return (
      <ScrollView style={{felx:1}}>
        <Searchbar
        icon={images.search}
        clearIcon={images.cancel}
        placeholder="Search"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />
      <SafeAreaView style={{flex:1,backgroundColor:'#dedede'}}>
        <OrderIndivisual fooditem={"Pizza"} caption={"Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption  "} images={this.state.images} day={"2"} date={"27/3/2020"} name={"Doe Jhon"} onPickUp={()=>this.onPickUp()}/>
        <OrderIndivisual images={this.state.images} onPickUp={()=>this.onPickUp()}/>
        <OrderIndivisual images={this.state.images} onPickUp={()=>this.onPickUp()}/>
        <OrderIndivisual images={this.state.images} onPickUp={()=>this.onPickUp()}/>
        <OrderIndivisual images={this.state.images} onPickUp={()=>this.onPickUp()}/>
        <OrderIndivisual images={this.state.images} onPickUp={()=>this.onPickUp()}/>
        <OrderIndivisual images={this.state.images} onPickUp={()=>this.onPickUp()}/>
        <OrderIndivisual images={this.state.images} fooditem={"Pizza"} resturant={"Trident canteen"} lat={"20.340252"} lon={"85.808416"} ordernumber={"#123456"} onPickUp={()=>this.onPickUp()}/>

      </SafeAreaView>
      </ScrollView>
    );
  }
}

export default FeedScreen;
