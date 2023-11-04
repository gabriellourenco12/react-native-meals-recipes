import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator
        children={null}
        screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
            sceneContainerStyle: {backgroundColor: '#4b2c1e'},
            drawerContentStyle: {backgroundColor: '#351401'},
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: '#dacabf',
            drawerActiveBackgroundColor: '#4b2c1e',
        }}
    >
        <Drawer.Screen
            name={'MealsCategories'}
            component={CategoriesScreen}
            options={{
                title: 'All Categories',
                drawerIcon: ({size, color}) => {
                    return <Ionicons name={'list'} size={size} color={color}/>
                }
            }}
        />
        <Drawer.Screen
            name={'Favorites'}
            component={FavoritesScreen}
            options={{
                drawerIcon: ({size, color}) => {
                    return <Ionicons name={'star'} size={size} color={color}/>
                }
            }}
        />
    </Drawer.Navigator>
}

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <FavoritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName={'DrawerNavigator'}
                        screenOptions={{
                            headerStyle: {backgroundColor: '#351401'},
                            headerTintColor: 'white',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 20,
                            },
                            contentStyle: {backgroundColor: '#4b2c1e'},
                        }}
                    >
                        <Stack.Screen
                            name={'DrawerNavigator'}
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name={'MealsOverview'}
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name={'MealDetail'}
                            component={MealDetailScreen}
                            options={{
                                title: 'About the Meal'
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
