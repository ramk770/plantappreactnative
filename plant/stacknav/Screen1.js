import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login';
import Register from '../Register';
import Shopping from '../Shoping';


const Stack=createStackNavigator();

const Screen1 = () => {
    return ( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='register' component={Register} /> */}
            <Stack.Screen name='shopping' component={Shopping} />
            
        </Stack.Navigator>
     );
}
 
export default Screen1;
