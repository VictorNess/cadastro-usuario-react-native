import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Screens/Home/Home';
import { Resultado } from './Screens/Infos/Resultado';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Resultado" component={Resultado}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

