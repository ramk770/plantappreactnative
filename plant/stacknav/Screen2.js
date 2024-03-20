import {createStackNavigator} from '@react-navigation/stack';
import About from '../About';

const Stack = createStackNavigator();

const Screen2 = () => {
    return (  
        
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='about' component={About} />
        </Stack.Navigator>
    );
}
 
export default Screen2;
