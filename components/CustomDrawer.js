import React, { useState }  from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import { Content, Header, Container, Footer, Right, Left, List, ListItem,Thumbnail, Body, H3, Button } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Paid from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";




export default function SideBar( {...props} ) {



    return (
     <SafeAreaView style={styles.container}>   
      <Container>
                <Content>
                    <View>
                        <TouchableOpacity style={styles.AccButton} onPress={() => {}}>
                            <Icon name='account' size={20} color='#fff'/>
                            <Text style={styles.AccText}>Minha Conta</Text>
                        </TouchableOpacity>

                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail source={require('../components/assets/avatar.jpeg')}/>
                            </Left>   
                            <Body>
                                <H3 style={styles.userName}>Michael</H3>
                                <Text style={styles.userDesc}>Software Enginner</Text>
                                <View style={styles.userClass}>
                                    <Text style={styles.userClassText}><Icon name='home' size={15} color='#fff'/>Renter</Text>
                                    <Text style={styles.userClassText}><Paid name='dollar-sign' size={15} color='#fff'/>Payer</Text>
                                
                                </View>
                            </Body>
                        </ListItem>
                    </View> 
                        
                    <DrawerContentScrollView {...props} style={styles.drawerStyle}>
                        <DrawerItemList  {...props} />
                        <DrawerItem label=''/>
                    </DrawerContentScrollView>
                </Content>
                <Footer style={styles.footer}>
                    <TouchableOpacity style={styles.autButton} onPress={() => props.navigation.navigate('Login')}>
                        <Text style={styles.autText}>Autenticar-se</Text>
                    </TouchableOpacity>
                </Footer>
        
      </Container>
    </SafeAreaView>
     )}


     const styles=StyleSheet.create({
         container:{
             flex:1,
         },

         drawerStyle:{
            backgroundColor:'#fff'
         },
         
         autButton:{
            backgroundColor:'#486ff9',
            padding:10,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:5,
        },
        autText:{
            fontSize:13,
            color:'#fff',
            fontWeight:'bold',
        },
        userName:{
            color:'#486ff9',
        },

        userDesc:{
            color:'#bdbdbd',
        },
        
        userClass:{
            flexDirection:'row',
            width:110,
        },

        userClassText:{
            backgroundColor:'#587af4',
            color:'#fff',
            fontSize:13,
            fontWeight:'bold',
            padding:6,
            marginRight:10,
            marginTop:5,
            borderRadius:4,
        },

        AccButton:{
            backgroundColor:'#486ff9',
            padding:8,
            justifyContent:'center',
            alignItems:'center',
        },
        AccText:{
            fontSize:13,
            color:'#fff',
            fontWeight:'bold',
        },

        footer:{
            backgroundColor:'#486ff9', 
            borderTopWidth:0, 
            height:40, 
            flexDirection:'row', 
            justifyContent:'center', 
            alignItems:'center',
            marginLeft:10,
        },

        footerText: {
            fontSize:12,
            fontWeight:'600',
            color:'#fff',
        }
     })
