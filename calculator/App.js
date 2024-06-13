import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CalculatorScreen from './src/CalculatorScreen';
import SecondScreen from './src/SecondScreen';
import ThirdScreen from './src/ThirdScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator>
     <Tab.Screen name="Calculator" component={CalculatorScreen} />
     <Tab.Screen name="Math Notes" component={SecondScreen} />
     <Tab.Screen name="Math Facts" component={ThirdScreen} />
    </Tab.Navigator>
    </NavigationContainer>
      
    
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


