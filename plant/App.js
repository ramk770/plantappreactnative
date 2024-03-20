import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabnav from './Tabnav';
import Welcome from './Welcome';
import Frontpage from './stacknav/Frontpage';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
    <NavigationContainer>
     
       <Tabnav /> 
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
