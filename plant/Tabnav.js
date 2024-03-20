import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screens from "./stacknav/Screen";
import Ionicons from '@expo/vector-icons/Ionicons';
import Screen1 from "./stacknav/Screen1";
import Screen2 from "./stacknav/Screen2";
import Frontpage from "./stacknav/Frontpage";


const Tab = createBottomTabNavigator();
const Tabnav = () => {
    return ( 

        <Tab.Navigator 
        initialRouteName="Screens"
        screenOptions={{
            tabBarActiveTintColor:'black',
            headerShown:false
            
        }} >


 <Tab.Screen name="login" component={Frontpage} options={{headerShown:false,
  tabBarLabel :'login',
                     tabBarIcon: ({size,color}) =>(
                     <Ionicons name="lock-closed-outline" size={25} color={'green'} />
                     ),
 
 }}/>      
            <Tab.Screen name="first" component={Screens} 
                
                options={{
                    tabBarLabel :'home',
                     tabBarIcon: ({size,color}) =>(
                     <Ionicons name="home-outline" size={25} color={'green'} />
                     ),

                }}
            />     
        <Tab.Screen name="about" component={Screen2} 
                
                options={{
                    tabBarLabel :'ABout',
                     tabBarIcon: ({size,color}) =>(
                     <Ionicons name="person-outline" size={25} color={'green'} />
                     ),

                }}
            />   
          {/* <Tab.Screen name="data" component={Screen1} 
                
                options={{
                    tabBarLabel :'Shopping',
                     tabBarIcon: ({size,color}) =>(
                     <Ionicons name="cart-outline" size={25} color={'green'} />
                     ),

                }}
            />    */}
            
            
               </Tab.Navigator>
     );
}
 
export default Tabnav;