import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Quiz from './src';
import Playground from './src/Playground';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Quiz' component={Quiz}/>
        <Stack.Screen name='Playground' component={Playground} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
