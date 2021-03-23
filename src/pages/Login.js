import React, { useState } from 'react';
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
    ActivityIndicator,

  } from 'react-native'; 

import Singed from '../../components/CustomDrawer'
import AsyncStorage from '@react-native-community/async-storage';
import Git from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Entypo'

import api from '../services/api'

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)


  signIn = async () => {
    if (username.length === 0) return

    setLoading(true)

    try {

      const credentials = {
        usuario: username,
        senha: password
      }

      const response = await api.post('/login', credentials)

      const { usuario, accessToken } = response.data.user

      await AsyncStorage.setItem('@ImvUser:accessToken', accessToken)
      await AsyncStorage.setItem('@ImvUser:usuario',  JSON.stringify(usuario))

      setLoading(false)
      
      console.log(response.data.user)

      navigation.navigate('Dashboard')

    } catch (error) {
      console.log(error)

      setLoading(false)
      setErrorMessage('Usuário não existe')
    }
  }
      return (
        <SafeAreaView style={styles.container} >

                <Image
                style={styles.logo}
                source={require('../../components/assets/logo2.png')}
                />

                {!!errorMessage && <Text style={styles.UserNotFoundText}>{errorMessage}</Text>}

                <TextInput 
                placeholder='Usuário'           
                value={username}
                onChangeText={username => setUsername(username)} 
                style={styles.input}/>
                <TextInput 
                placeholder='Senha' 
                secureTextEntry={true} 
                value={password}
                onChangeText={password => setPassword(password)} 
                style={styles.input}/>
                
                <TouchableOpacity style={styles.buttonLogin} onPress={signIn}>
                {loading ? (
                  <ActivityIndicator size="small" color="#486ff9" />
                  ) : (
                    <Text style={styles.buttonText}>Login</Text>
                  )}
                    
                </TouchableOpacity>
                <Text style={styles.AnotherLoginText}>Ou autentique-se com:</Text>
                <View style={styles.AnotherLoginContainer}>
                    <TouchableOpacity style={styles.gitLogin}>
                        <Git name='github' size={20} color='#486ff9'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.faceLogin}>
                        <Git name='facebook-square' size={20} color='#486ff9'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.googleLogin}>
                        <Git name='google' size={20} color='#486ff9'/>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>    
        
    )
  }

  const styles=StyleSheet.create({
      container:{
          flex:1,
          width:'100%',
          height:'100%',
          backgroundColor:'#486ff9',
          justifyContent:'center',
          alignItems:'center',
      },

      logo:{
        width:120,
        height:120,
        marginBottom:10,
      },

      input:{
        width:'80%',
        height:60,
        backgroundColor:'#fff',
        color:'#000',
        padding:20,
        marginTop:15,
        borderRadius:5,
      },

      buttonLogin:{
        width:'80%',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        marginTop:15,
        borderRadius:5,
      },

      buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#486ff9',
      },

      AnotherLoginContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },

      AnotherLoginText:{
        fontSize:14,
        fontWeight:'bold',
        color:'#fff',
        margin:10,
      },
      gitLogin:{
        width:'25%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:5,
        borderRadius:5,
        margin:3
      },

      googleLogin:{
        width:'25%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:5,
        borderRadius:5,
        margin:3
      },

      faceLogin:{
        width:'25%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:5,
        borderRadius:5,
        margin:3
      },

      showPass: {
        position:'absolute',
      },

      UserNotFoundText:{
        fontSize:14,
        fontWeight:'bold',
        color:'#ff0000',
        margin:10,
      }
  })