import {StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//     return <Drawer.Navigator children={null}>
//         <Drawer.Screen name={'MealsCategories'} component={CategoriesScreen}/>
//         <Drawer.Screen name={'Favorites'} component={FavoritesScreen}/>
//     </Drawer.Navigator>
// }

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={'Ca'}
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
                        name={'MealsCategories'}
                        component={CategoriesScreen}
                        options={{
                            title: 'All Categories',
                        }}
                    />
                    <Stack.Screen
                        name={'MealsOverview'}
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen
                        name={'MealDetail'}
                        component={MealDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
