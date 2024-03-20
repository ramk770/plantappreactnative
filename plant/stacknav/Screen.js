import {createStackNavigator} from '@react-navigation/stack';
import Homes from '../Homes';
import Details from '../.vscode/Details';
import Login from '../Login';
import Register from '../Register';


const Stack = createStackNavigator()

const Screens = () => {
    return ( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
        
         <Stack.Screen name='homes' component={Homes} />
         <Stack.Screen name='detail' component={Details} />

        </Stack.Navigator>
     );
}
 
export default Screens
