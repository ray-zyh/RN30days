'use strict';
import React, { Component } from 'react';
import { DeviceEventEmitter,Image,Navigator,ScrollView,StatusBar,StyleSheet,Text, TouchableOpacity, TouchableHighlight,View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Util from './src/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import Day1 from './src/day1'; //bug when not stop then exit
// import Day2 from './src/day2';
// import Day3 from './src/day3';
// import Day4 from './src/day4'; //to update to groupon
// import Day5 from './src/day5';
// import Day6 from './src/day6'; //to update; RN video bug
// import Day7 from './src/day7';
// import Day8 from './src/day8';  //update animation
// import Day9 from './src/day9';
// import Day10 from './src/day10';
// // import Day11 from './src/day11'; //to be fixed
// import Day12 from './src/day12'; // update to google inbox
// import Day13 from './src/day13';
// import Day14 from './src/day14';
// import Day15 from './src/day15'; //to update to snapchat
// import Day16 from './src/day16';
// import Day17 from './src/day17';
// import Day18 from './src/day18';
// import Day19 from './src/day19';
// import Day20 from './src/day20';
// import Day21 from './src/day21';
// import Day22 from './src/day22';
// import Day23 from './src/day23';
// import Day24 from './src/day24';
// import Day25 from './src/day25'; // to update imessage UI
// import Day26 from './src/day26'; // to update imessage UI
// import Day27 from './src/day27';
// import Day28 from './src/day28';
// import Day29 from './src/day29'; //to update
// import Day30 from './src/day30';

class MainView extends Component {
  constructor() {
    super();
    this.state = {
      days:[{
        key:0,
        title:"A stopwatch",
        path:"Day1",
        component: Day1,
        isFA: false,
        icon: "ios-stopwatch",
        size: 48,
        color: "#ff856c",
        hideNav: false,
      },{
        key:1,
        title:"A weather app",
        // component: Day2,
        isFA: false,
        icon: "ios-partly-sunny",
        size:60,
        color:"#90bdc1",
        hideNav: true,
      },{
        key:2,
        title:"twitter",
        // component: Day3,
        isFA: false,
        icon: "logo-twitter",
        size:50,
        color:"#2aa2ef",
        hideNav: true,
      },{
        key:3,
        title:"cocoapods",
        // component: Day4,
        isFA: true,
        icon: "contao",
        size:50,
        color:"#FF9A05",
        hideNav: false,
      },{
        key:4,
        title:"find my location",
        // component: Day5,
        isFA: false,
        icon: "md-pin",
        size:50,
        color:"#00D204",
        hideNav: false,
      },{
        key:5,
        title:"Spotify",
        // component: Day6,
        isFA: true,
        icon: "spotify",
        size:50,
        color:"#777",
        hideNav: true,
      },{
        key:6,
        title:"Moveable Circle",
        // component: Day7,
        isFA: false,
        icon: "ios-baseball",
        size:50,
        color:"#5e2a06",
        hideNav: true,
      },{
        key:7,
        title:"Swipe Left Menu",
        // component: Day8,
        isFA: true,
        icon: "google",
        size:50,
        color:"#4285f4",
        hideNav: true,
      },{
        key:8,
        title:"Twitter Parallax View",
        // component: Day9,
        isFA: true,
        icon: "twitter-square",
        size:50,
        color:"#2aa2ef",
        hideNav: true,
      },{
        key:9,
        title:"Tumblr Menu",
        // component: Day10,
        isFA: false,
        icon: "logo-tumblr",
        size:50,
        color:"#37465c",
        hideNav: true,
      },{
        key:10,
        title:"OpenGL",
        // component: Day11,
        isFA: false,
        icon: "md-contrast",
        size:50,
        color:"#2F3600",
        hideNav: false,
      },{
        key:11,
        title:"charts",
        // component: Day12,
        isFA: false,
        icon: "ios-stats",
        size:50,
        color:"#fd8f9d",
        hideNav: false,
      },{
        key:12,
        title:"tweet",
        // component: Day13,
        isFA: false,
        icon: "md-chatboxes",
        size:50,
        color:"#83709d",
        hideNav: true,
      },{
        key:13,
        title:"tinder",
        // component: Day14,
        isFA: true,
        icon: "fire",
        size:50,
        color:"#ff6b6b",
        hideNav: true,
      },{
        key:14,
        title:"Time picker",
        // component: Day15,
        isFA: false,
        icon: "ios-calendar-outline",
        size:50,
        color:"#ec240e",
        hideNav: false,
      },{
        key:15,
        title:"Gesture unlock",
        // component: Day16,
        isFA: false,
        icon: "ios-unlock",
        size:50,
        color:"#32A69B",
        hideNav: true,
      },{
        key:16,
        title:"Fuzzy search",
        // component: Day17,
        isFA: false,
        icon: "md-search",
        size:50,
        color:"#69B32A",
        hideNav: false,
      },{
        key:17,
        title:"Sortable",
        // component: Day18,
        isFA: false,
        icon: "md-move",
        size:50,
        color:"#68231A",
        hideNav: true,
      },{
        key:18,
        title:"TouchID to unlock",
        // component: Day19,
        isFA: false,
        icon: "ios-log-in",
        size:50,
        color:"#fdbded",
        hideNav: true,
      },{
        key:19,
        title:"Single page Reminder",
        // component: Day20,
        isFA: false,
        icon: "ios-list-outline",
        size:50,
        color:"#68d746",
        hideNav: true,
      },{
        key:20,
        title:"Multi page Reminder",
        // component: Day21,
        isFA: false,
        icon: "ios-paper-outline",
        size:50,
        color:"#fe952b",
        hideNav: true,
      },{
        key:21,
        title:"Google Now",
        // component: Day22,
        isFA: false,
        icon: "ios-mic-outline",
        size:50,
        color:"#4285f4",
        hideNav: true,
      },{
        key:22,
        title:"Local WebView",
        // component: Day23,
        isFA: true,
        icon: "safari",
        size:50,
        color:"#23bfe7",
        hideNav: false,
      },{
        key:23,
        title:"Youtube scrollable tab",
        // component: Day24,
        isFA: false,
        icon: "logo-youtube",
        size:50,
        color:"#e32524",
        hideNav: true,
      },{
        key:24,
        title:"custome in-app browser",
        // component: Day25,
        isFA: false,
        icon: "ios-globe",
        size:50,
        color:"#00ab6b",
        hideNav: true,
      },{
        key:25,
        title:"swipe and switch",
        // component: Day26,
        isFA: false,
        icon: "md-shuffle",
        size:50,
        color:"#893D54",
        hideNav: true,
      },{
        key:26,
        title:"iMessage Gradient",
        // component: Day27,
        isFA: false,
        icon: "ios-chatbubbles",
        size:50,
        color:"#248ef5",
        hideNav: false,
      },{
        key:27,
        title:"iMessage image picker",
        // component: Day28,
        isFA: false,
        icon: "md-images",
        size:50,
        color:"#f5248e",
        hideNav: true,
      },{
        key:28,
        title:"3d touch",
        // component: Day29,
        isFA: false,
        icon: "ios-navigate",
        size:50,
        color:"#48f52e",
        hideNav: false,
      },{
        key:29,
        title:"Push Notifications",
        // component: Day30,
        isFA: false,
        icon: "md-notifications",
        size:50,
        color:"#f27405",
        hideNav: false,
      }]
    }
  }

  static navigationOptions = {
    title: '30 Days of RN'
  };

  _jumpToDay(index){
    this.props.navigation.navigate(
      this.state.days[index].path,
    )
  }

  render() {
    var onThis = this;
    var boxs = this.state.days.map(function(elem, index) {
      return(
        <TouchableHighlight key={elem.key} style={[styles.touchBox, styles.touchBox1]} underlayColor="#eee" onPress={()=> onThis._jumpToDay(index)}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>Day{index+1}</Text>
            {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:
              <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
          </View>
        </TouchableHighlight>
      );
    })
    return(
      <ScrollView>
        <Swiper height={150} showsButtons={false} autoplay={true}
          activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
          <TouchableHighlight onPress={()=> onThis._jumpToDay(0)}>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('./src/img/day1.png')}></Image>
              <Text style={styles.slideText}>Day1: Timer</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=> onThis._jumpToDay(1)}>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('./src/img/day2.png')}></Image>
              <Text style={styles.slideText}>Day2: Weather</Text>
            </View>
          </TouchableHighlight>
        </Swiper>
        <View style={styles.touchBoxContainer}>
          {boxs}
        </View>
      </ScrollView>
    );
  }
}

const NavigatorHome = StackNavigator({
  Home: { screen: MainView },
  Day1: { screen: Day1 },
  // Day2: {},
});

export default class ThirtyDaysOfReactNative extends Component{
  render(){
    return <NavigatorHome style={styles.navBar} />;
  }
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
  },
  mainView: {
    marginTop: 63
  },
  navBar: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  navTitle: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  navBackBtn: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: "#555",
  },
  itemWrapper:{
    backgroundColor: '#f3f3f3'
  },
  touchBox:{
    width: Util.size.width/3-0.33334,
    height:Util.size.width/3,
    backgroundColor:"#fff",
  },
  touchBoxContainer:{
    flexDirection: "row", 
    flexWrap:"wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox1:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox2:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
  },
  boxContainer:{
    alignItems:"center",
    justifyContent:"center",
    width: Util.size.width/3,
    height:Util.size.width/3,
  },
  boxIcon:{
    position:"relative",
    top:-10
  },
  boxText:{
    position:"absolute",
    bottom:15,
    width:Util.size.width/3,
    textAlign:"center",
    left: 0,
    backgroundColor:"transparent"
  },
  slide: {
    flexGrow: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText:{
    position:"absolute",
    bottom: 0,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"rgba(255,255,255,0.5)",
    width: Util.size.width,
    textAlign:"center",
    fontSize: 12
  },
  image:{
    width: Util.size.width,
    height: 150,
    flexGrow: 1,
    alignSelf: 'stretch',
  }
});