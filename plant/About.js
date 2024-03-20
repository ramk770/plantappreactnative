import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Avatar } from "react-native-elements";
const About = () => {
    return ( 
        <View style={{backgroundColor: '#ffe4e1',flex:1,marginTop:30}}>
          <Text></Text>
            <Avatar 
            rounded
            size={'xlarge'}
            containerStyle={{justifyContent:'center',alignSelf:'center', marginTop:60,width:170,height:230}}
                source={require('./assets/pf.jpg')} 
                
            />
           
            <Text style={{alignSelf:'center',fontSize:25,fontWeight:'bold', color:'grey'}}>k Ramanarayanan B.Tech 'IT'</Text>
      <TouchableOpacity style={{marginTop:20}}>
      <Text style={{color:'black',fontSize:15,marginLeft:15}}>
      I'm Ramanarayanan k .I have started my college studies in CIT chennai and currently pursuing 2nd year BTech - IT department.
</Text>
      </TouchableOpacity> 
      <TouchableOpacity>
      <Text style={{fontSize:30,marginTop:20,color:'green',margin:29}}>Web Developement skills</Text>
      </TouchableOpacity>
      <View>
        
      </View>
        
        
        </View>

     );
}
 
export default About;