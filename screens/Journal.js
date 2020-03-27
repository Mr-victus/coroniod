import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView
} from "react-native";
import Draggables from '../components/Draggables'
import Droppables from '../components/Droppables'
import colors from '../common/Colors';
import { normalizeHeight as nh} from '../common/NormalizeHeight';
import { normalizeWidth as nw} from '../common/NormalizeWidth';
import Images from '../common/Images';
import { createDndContext } from "react-native-easy-dnd";
import BottomResults from "../components/BottomResults";
import { SafeAreaView } from "react-navigation";
import DeviceInfo from 'react-native-device-info';
import ApplicationStyles from "../common/ApplicationStyles";
import { openLink } from '../common/OpenLink';
import { normalizeFont as np } from "../common/NormalizeFont";
import { Searchbar } from 'react-native-paper';
import PersonalJournal from "../components/PersonalJournal";
import OrderIndivisual from "../components/OrderIndivisual";

const { Provider, Droppable, Draggable } = createDndContext();
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstQuery:'',
      images: [
        // "https://source.unsplash.com/1024x768/?nature",
        // "https://source.unsplash.com/1024x768/?water",
        // "https://source.unsplash.com/1024x768/?girl",
        // "https://source.unsplash.com/1024x768/?tree", // Network image
        Images.logo,          // Local image
        Images.logo,
        "file:///storage/emulated/0/DCIM/Camera/IMG_20200327_133455.jpg"
      ],
    };
  }
  static navigationOptions =(props)=>({
    header:null
});
onDrop(payload){
  if(payload==="1")
  {
    this.setState({
      image:Images.food,
      opacity:1,
      pickupScreen:false,
      msg:"Food Delivered"
    })
  }
  else{
    this.setState({
      images: [
        // "https://source.unsplash.com/1024x768/?nature",
        // "https://source.unsplash.com/1024x768/?water",
        // "https://source.unsplash.com/1024x768/?girl",
        // "https://source.unsplash.com/1024x768/?tree", // Network image
        Images.logo,          // Local image
        Images.logo,
        "file:///storage/emulated/0/DCIM/Camera/IMG_20200327_133455.jpg"
      ],
      pickedImages:undefined,
      opacity:0,
      pickupScreen:false,
      msg:"Drag the Food Item to the Plate when you Deliver the parcel",
      deliveryTime:'12:20 PM'
    })
  }
}
  render() {
    return (
      <ScrollView style={{flex:1,backgroundColor:'#ededed'}}>
         <Searchbar
        icon={Images.search}
        clearIcon={Images.cancel}
        placeholder="Search"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />
      <PersonalJournal images={this.state.pickedImages} imagePicker={(imgs)=>{
        this.setState({
          pickedImages:imgs
        })
      }}/>
      
      <OrderIndivisual fooditem={"Pizza"} caption={"Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption  "} images={this.state.images} day={"2"} date={"27/3/2020"} name={"Doe Jhon"} onPickUp={()=>this.onPickUp()}/>
      <OrderIndivisual fooditem={"Pizza"} caption={"Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption  "} images={this.state.images} day={"2"} date={"27/3/2020"} name={"Doe Jhon"} onPickUp={()=>this.onPickUp()}/>
      <OrderIndivisual fooditem={"Pizza"} caption={"Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption  "} images={this.state.images} day={"2"} date={"27/3/2020"} name={"Doe Jhon"} onPickUp={()=>this.onPickUp()}/>
      <OrderIndivisual fooditem={"Pizza"} caption={"Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption  "} images={this.state.images} day={"2"} date={"27/3/2020"} name={"Doe Jhon"} onPickUp={()=>this.onPickUp()}/>
      <OrderIndivisual fooditem={"Pizza"} caption={"Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption  "} images={this.state.images} day={"2"} date={"27/3/2020"} name={"Doe Jhon"} onPickUp={()=>this.onPickUp()}/>
      </ScrollView>
    );
  }
}

export default Order;
