import {StyleSheet, Text, View} from "react-native";

function MealDetails({duration, complexity, affordability, style, textStyle}) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detail, textStyle]}>{duration}m</Text>
            <Text style={[styles.detail, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detail, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    detail: {
        marginHorizontal: 4,
        fontSize: 12,
    }
})