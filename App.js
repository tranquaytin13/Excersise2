import React from 'react';
import 'react-native-gesture-handler';
import HomeScreen from './src/HomeScreen.js';
import DetailsScreen from './src/DetailsScreen.js';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from 'react-native-paper';
import CustomNavigationBar from './src/CustomNavigationBar.js';
import {createDrawerNavigator} from "@react-navigation/drawer";
import CustomDrawerNavigation from './src/CustomDrawerNavigation.js';



const Stack = createStackNavigator();

const App=() => {
return (
    <PaperProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    header: (props) => <CustomNavigationBar {...props} />, 
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} /> 
            </Stack.Navigator>
        </NavigationContainer> 
    </PaperProvider>
);
}


export default App;
