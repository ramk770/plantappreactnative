import { View, Image,Text, TouchableOpacity} from "react-native";

const Welcome = ({navigation}) => {
    return ( 
        <View style={{flex:1,marginTop:30,backgroundColor:'grey'}}>
        <Image source={require('./assets/dog.png')} style={{width:370,height:600}} resizeMode="cover" />
        
        <TouchableOpacity onPress={() => navigation.navigate('login')}  style={{backgroundColor:'green', padding:15,margin:20,borderRadius:10,marginBottom:70}}>
            <Text style={{alignSelf:'center',fontSize:25,color:'white'}}>Welcome to my plant</Text>
        </TouchableOpacity>
      </View>
     );
}
 
export default Welcome;
