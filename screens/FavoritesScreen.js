import {StyleSheet, Text, View} from "react-native";
import {useContext} from "react";

import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
            </View>
        )
    }

    return (
        <MealsList items={favoriteMeals}/>
    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
})