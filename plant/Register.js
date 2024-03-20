import { Image, ScrollView } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import InputFiled from "./InputFiled";
import { useState } from "react";

const Register = ({navigation}) => {


  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Perform validation here (e.g., checking email, password, etc.)
    if (email && password && password === confirmPassword) {
      // Navigate to the login page upon successful registration
      navigation.navigate('login');
    } else {
      setError('Invalid input or passwords do not match');
    }
  };














    return ( 
      <ScrollView>
        <View style={{flex:1,justifyContent: 'center',marginTop:20 }}>
        <View>
            <Image source={require('./assets/plant7.png')}  style={style.image} resizeMode="cover"  />
        </View>
<Text style={{fontSize:38, fontWeight: 'bold', paddingHorizontal:20, marginBottom:20}}>
    Register
</Text>

<View style={{flexDirection:'row',justifyContent:'space-around', marginBottom:10}}> 
<TouchableOpacity style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}}>
    <Ionicons name="logo-google" size={25}  color={'green'}/>
</TouchableOpacity>
<TouchableOpacity style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}}>
    <Ionicons name="logo-windows" size={25} color={'green'}/>
</TouchableOpacity>
<TouchableOpacity style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}}>
    <Ionicons name="logo-facebook" size={25} color={'green'} />
</TouchableOpacity>


  </View>
  <Text 
style={{alignSelf:'center',fontSize:25,fontWeight:'bold'}}>
    or, Register
</Text>
  


<InputFiled Label={'FirstName'} icon={<Ionicons name="person-outline" size={25} color={'#666'} style={{marginLeft:5}}   />}

value={firstName}
          onChangeText={(text) => setFirstName(text)} />

<InputFiled Label={'email-id'} icon={<Ionicons name="at-circle-outline" size={25} color={'#666'} style={{marginLeft:5}} />}
 keyboardType={'email-address'}   value={email}
          onChangeText={(text) => setEmail(text)}/>

<InputFiled Label={'password'} icon={<Ionicons name="lock-closed-outline" size={25} color={'#666'} style={{marginLeft:5}}   />}
inputtype={'password'}  value={password}
          onChangeText={(text) => setPassword(text)} />
<InputFiled Label={'conform-password'} icon={<Ionicons name="lock-closed-outline" size={25} color={'#666'} style={{marginLeft:5}}   />}
inputtype={'password'}  value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)} />


<TouchableOpacity
 style={{
backgroundColor:'green',
padding:20,
marginBottom:30,
borderRadius:20,
 }}  onPress={handleRegister}   >
    <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold'}}>
        Register
    </Text>
</TouchableOpacity>




  <Text style={{alignSelf:'center',marginTop:10, fontSize:20,fontWeight:'500'}}>
    Alred to the App ? <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{color:'green',fontSize:20,fontWeight:'500',marginTop:12}} >Login</Text></TouchableOpacity>
  </Text>
</View>
</ScrollView>

)
}

const style = StyleSheet.create({
  image: {
    width:500,
    height:250,
    alignSelf:'center',
    backgroundColor: 'grey',
    paddingBottom:20,
    padding:10,
    borderColor:'black',
      
  },
})
     
 
export default Register;