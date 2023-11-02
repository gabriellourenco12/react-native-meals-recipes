import {StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={'MealsCategories'}
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
