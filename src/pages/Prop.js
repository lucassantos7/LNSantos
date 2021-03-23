import React, { Component } from 'react';
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
  } from 'react-native'; 

  import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
  import Icon2 from 'react-native-vector-icons/Ionicons';

  import api from '../services/api'

  export default class PropsAll extends Component {
    state = {
      errorMessage: null,
      imoveis: [],
    }

    Imovel = (navigation) => {
      navigation.navigate('Imovel')
    }

    showImv = async () => {
      try {
        const response = await api.get('/imoveis')

        const { imoveis } = response.data;

        this.setState({ imoveis })

      } catch (response) {
        this.setState({ errorMessage: response.data.error })
      }
      
    }

    componentDidMount() {this.showImv()};

    render() {
      return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#486ff9' barStyle='light-content'/>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.menubar} onPress={() => this.props.navigation.openDrawer()} >
                  <Icon name='menu' style={styles.menu} />
                </TouchableOpacity>
                <Image
                style={styles.logo}
                source={require('../../components/assets/logo2.png')}
                />
                <TouchableOpacity style={styles.menubar}>
                  <Icon2 name='md-chatbubbles-outline' style={styles.chat} />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <TouchableHighlight style={styles.menubar}>
                <Icon2 name="search" size={20} color="#fff"/>
                </TouchableHighlight>
                <TextInput
                    Icon2 name = 'search'
                    style={styles.input}
                    placeholder="Pesquisar Imovéis..."
                    underlineColorAndroid="transparent"
                />
            </View>
            <ScrollView style={styles.recentsContainer}>
            { this.state.imoveis.map(imoveis => (
                    <View style={styles.imvContainer} >
                      <Image style={styles.imvthumb} source={{ uri: imoveis.imagem}}/>
                      <Text style={styles.imvName}>Casa</Text>
                      <Text style={styles.imvLoc}>{imoveis.setor}, {imoveis.cidade}, {imoveis.uf}</Text>
                      <Text style={styles.imvPrice}>{imoveis.valor}</Text>
                      <TouchableOpacity  style={styles.imvButton} onPress={this.Imovel}>
                        <Text style={styles.imvButtonText}>Ver Imóvel</Text>
                      </TouchableOpacity>
                    </View>
                  )) }
              </ScrollView>
        </SafeAreaView>
      );
    }}

  const styles=StyleSheet.create({
    container:{
      flex:1,
      width:'100%',
      height:'100%',
    },

    logo:{
      width:40,
      height:40,
    },

    button:{
      width:'70%',
      height:70,
      backgroundColor:'#fff',
      borderRadius:4,
      justifyContent:'center',
      alignItems:'center',
      marginTop:15,
    },

    headerContainer:{
      width:'100%',
      height:50,
      backgroundColor:'#486ff9',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',
    },

    text1:{
      fontSize:20,
      fontWeight:'bold',
      color:'#486ff9',
    },

    menu:{
      fontSize:30,
      justifyContent:'center',
      alignItems:'center',
      color:'#fff',
    },

    menubar: {
      justifyContent:'center',
      alignItems:'center',
      width:60,
      height:55,
    },

    chat:{
      fontSize:30,
      justifyContent:'center',
      alignItems:'center',
      color:'#486ff9',
    },

    searchContainer:{
      width:'100%',
      height:45,
      paddingRight: 15,
      backgroundColor:'#486ff9',
      flexDirection:'row',
      justifyContent: 'space-evenly',
      alignItems:'center',
    },

    input: {
      flex: 1,
      borderRadius:5,
      paddingTop: 0,
      paddingRight: 10,
      paddingBottom: 0,
      paddingLeft: 15,
      backgroundColor: '#fff',
      color: '#424242',
    },

    buttonsContainer:{
      width:'100%',
      height:70,
      backgroundColor:'#fff',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    },

    buttonText:{
      fontSize:15,
      fontWeight:'bold',
      color:'#486ff9',
    },

    buttons:{
      alignItems:'center'
    },

    recentsIcon:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',

    },
    recents:{
      width:'100%',
      height:40,
      paddingLeft:10,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor:'white',
      borderBottomWidth:1.2,
      borderBottomColor:'#486ff9',
    },

    recentsText:{
      fontSize:18,
      fontWeight:'bold',
      color:'#486ff9',
      margin:10,
    },

    recentsContainer:{
      width:'100%',
      padding:15,
      backgroundColor:'#eeeeee',
    },

    imvContainer:{
      width:'100%',
      paddingTop:16,
      paddingBottom:10,
      alignItems: 'center',
      textAlign:'center',
      justifyContent:'center',
      backgroundColor:'white',
      marginBottom:15,
      borderRadius:10,

    },

    imvthumb:{
      width:'90%',
      height:150,
      borderRadius:5,
    },

    imvName:{
      fontSize:14,
      fontWeight:'bold',
      color:'#486ff9',
      marginTop:10,
    },

    imvLoc:{
      fontSize:10,
      fontWeight:'bold',
      color:'#bebebe',
    },

    imvPrice:{
      fontSize:18,
      fontWeight:'bold',
      color:'#486ff9',
    },

    imvButton:{
      backgroundColor:'#486ff9',
      width:'30%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      padding:8,
      margin:10,
    },

    imvButtonText:{
      fontSize:13,
      fontWeight:'bold',
      paddingLeft:3,
      color:'#fff'
    }
})