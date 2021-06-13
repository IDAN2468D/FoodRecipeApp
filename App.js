import React, { useState, useEffect } from 'react';
import { Login, Recipe } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import Tabs from "./navigation/tabs";
import * as Font from 'expo-font';

const customFonts = {
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "RobotoCondensed-Bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
};

const Stack = createStackNavigator();

const App = () => {

    const [assetsLoaded, setAssetsLoaded] = useState(false);

    const _loadAssetsAsync = async () => {
        await Font.loadAsync(customFonts);
        setAssetsLoaded(true);
    }

    useEffect(() => {
        _loadAssetsAsync();
    });


    return assetsLoaded ? (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Recipe"
                    component={Recipe}
                />
            </Stack.Navigator>
        </NavigationContainer>
    ) : (
        <ActivityIndicator size="small" />
    )
}

export default App;