import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Header,
    Button,
    StatusBar,
    TouchableOpacity,
    Alert,
    TextInput,
    TouchableHighlight,
    ImageBackground,
    Right,
    Left,
  } from 'react-native'; 
import Bath from 'react-native-vector-icons/FontAwesome5';
import Moon from 'react-native-vector-icons/Ionicons'
import Price from 'react-native-vector-icons/Ionicons'
import Heart from 'react-native-vector-icons/Ionicons'
import Share from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

  export default function ImvScreen({ navigation }) {
      return (
        <SafeAreaView style={{flex:1, width:'100%'}}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.menubar} onPress={navigation.goBack} >
                        <Icon name='arrow-left' style={styles.menu} />
                    </TouchableOpacity>
                    <Image
                    style={styles.logo}
                    source={require('../../components/assets/logo2.png')}
                    />
                </View>
                <View style={{ justifyContent:'center', alignItems:'center' }}>
                        <View style={styles.imvContainer} >
                            <Image style={styles.imvImg} source={require('../../components/assets/fundo.jpg')}/>
                            <Text style={styles.imvName}>Casa Luxuosa</Text>
                            <Text style={styles.imvLoc}>Florianópolis, Rua X, 234</Text>
                            <View style={styles.imvCont} >
                                <View style={styles.imvCount}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Moon style={styles.imvCountIcon} name='moon' size={20} color='#486ff9'/>
                                        <Text style={styles.imvCountText}>Quartos</Text>
                                    </View>
                                    <Text style={styles.imvCountText}>4</Text>
                                </View>
                                <View style={styles.imvCount}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Bath style={styles.imvCountIcon} name='bath' size={20} color='#486ff9'/>
                                        <Text style={styles.imvCountText}>Banheiros</Text>
                                    </View>    
                                    <Text style={styles.imvCountText}>3</Text>
                                </View>
                                <View style={styles.imvCount}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Price style={styles.imvCountIcon} name='pricetag' size={20} color='#486ff9'/>
                                        <Text style={styles.imvCountText}>Preço</Text>
                                    </View>     
                                    <Text style={styles.imvPrice}>R$700.000,00</Text>   
                                </View>
                            </View>
                            <TouchableOpacity style={styles.imvBroker} >
                                <Image style={styles.imvBrokerThumb} source={require('../../components/assets/avatar.jpeg')}/>
                                <View style={{flexDirection:'column', justifyContent:'center'}}>
                                    <Text style={styles.imvBrokerName}>Michael</Text>
                                    <Text style={styles.imvBrokerDesc}>Corretor Sênior</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.imvOptions}>
                                <TouchableOpacity style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Heart name='heart' size={25} color='#fff'/>
                                    <Text style={styles.imvOptionsText}>FAVORITE</Text>
                                    
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Share name='md-share-social' size={25} color='#fff'/>
                                    <Text style={styles.imvOptionsText}>SHARE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>  
        </SafeAreaView>    
        
    )
  }

  const styles=StyleSheet.create({
      container:{
          width:'100%',
          backgroundColor:'#fff',
      },

      headerContainer:{
        width:'100%',
        height:55,
        backgroundColor:'#486ff9',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },

      logo:{
        width:40,
        height:40,
        marginRight:10,
      },

      menubar: {
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:55,
      },

      menu:{
        fontSize:30,
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
      },


      imvContainer:{
        width:'95%',
        backgroundColor:'white',
        marginTop:10,
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        
      },
  
      imvImg:{
        width:'100%',
        height:170,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
      },
  
      imvName:{
        fontSize:17,
        fontWeight:'bold',
        color:'#486ff9',
        marginTop:10,
        marginLeft:10,
      },
  
      imvLoc:{
        fontSize:12,
        fontWeight:'bold',
        color:'#8ea6ff',
        marginLeft:10,
        marginBottom:10,
      },

      imvCont:{
        width:'100%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'white',
        paddingLeft:10,
        paddingRight:10,
        marginBottom:5,
        borderTopWidth:1,
        borderTopColor:'#486ff9',
      },
  
      imvPrice:{
        fontSize:14,
        fontWeight:'bold',
        color:'#486ff9',
        margin:5,
      },

      imvCountIcon:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
  
      },
      imvCount:{
        width:'100%',
        marginTop:5,
        marginLeft:10,
        height:35,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

      },
  
      imvCountText:{
        fontSize:14,
        fontWeight:'600',
        color:'#486ff9',
        margin:10,
      },

      imvBroker:{
        backgroundColor:'#b4c4ff',
        padding:10,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
      },

      imvBrokerThumb:{
          width:50,
          height:50,
          borderRadius:25,
      },

      imvBrokerName:{
          fontSize:15,
          fontWeight:'bold',
          color:'#486ff9',
          marginLeft:10,
      },

      imvBrokerDesc:{
        fontSize:13,
        fontWeight:'600',
        color:'#6284ff',
        marginLeft:11,
    },

    imvOptions:{
        backgroundColor:'#486ff9',
        padding:8,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },

    imvOptionsText:{
        fontSize:13,
        fontWeight:'600',
        color:'#fff',
        marginLeft:5,
      },

  })