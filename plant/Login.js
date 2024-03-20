import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Perform login validation here (e.g., checking email and password)
    if (email.trim() === '' || password.trim() === '') {
      setError('Please enter both email and password');
    } else {
      // Your authentication logic here (replace this example logic)
      if (email === 'example@example.com' && password === 'password') {
        // Navigate to the home page upon successful login
        // setError('invalid / password and email');
      } else {
        
        navigation.navigate('first');
      }
    }
  };
  
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', marginTop: 20 }}>
      <Image source={require('./assets/plant7.png')} style={style.image} resizeMode="cover" />
      <Text style={{ fontSize: 38, fontWeight: 'bold', paddingHorizontal: 20 }}>Login</Text>

      <View style={{ marginTop: 20, flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 25 }}>
        <Ionicons name="at-circle-outline" size={25} color={'#666'} style={{ marginLeft: 5 }} />
        <TextInput
          placeholder="Email"
          style={{ flex: 1, paddingVertical: 0 }}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', paddingBottom: 8, borderBottomWidth: 1, marginBottom: 25 }}>
        <Ionicons name="lock-closed-outline" size={25} color={'#666'} style={{ marginLeft: 5 }} />
        <TextInput
          placeholder="Password"
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity>
          <Text style={{ color: 'green', marginRight: 20, fontSize: 15, fontWeight: '700' }}>Forgot</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          padding: 20,
          marginBottom: 30,
          borderRadius: 20,
        }}
        onPress={handleLogin} // Call handleLogin on button press
      >
        <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>

      {error ? <Text style={{ alignSelf: 'center', color: 'red' }}>{error}</Text> : null}

      <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '100' }}>Login or</Text>
      {/* Social login buttons */}
      {/* ... Other JSX code */}

      <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 20, fontWeight: '500' }}>
        New to the App ?
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={{ color: 'green', fontSize: 20, fontWeight: '500', marginTop: 12 }}>Register</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    width: 500,
    height: 250,
    alignSelf: 'center',
    backgroundColor: 'grey',
    paddingBottom: 20,
    padding: 10,
    borderColor: 'black',
  },
});

export default Login;
