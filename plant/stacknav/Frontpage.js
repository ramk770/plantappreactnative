import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login';
import Register from '../Register';
import Welcome from '../Welcome';



const Stack=createStackNavigator();

const Frontpage = () => {
    return ( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name='welcome' component={Welcome} /> 
              <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='register' component={Register} />  
            
            
        </Stack.Navigator>
     );
}
 
export default Frontpage;