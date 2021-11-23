import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Surah from './src/screens/Surah';
import SurahRead from './src/screens/SurahRead';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }
// function Detail() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// function BottomNav() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="Home" component={BottomNav} />
//         <Stack.Screen name="Details" component={Detail} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#fff'},
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Surah" component={Surah} />
        <Stack.Screen name="SurahRead" component={SurahRead} />

        {/* <Stack.Screen name="Details" component={Detail} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
