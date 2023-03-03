import { createNativeStackNavigator } from "@react-navigation/native-stack"

import TabNavigator from "./TabNavigator";
import Add from "../screens_will_be_removed/Add";
import { Todopage, Welcomepage } from "../src/screens";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="Home"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Add" component={Add} /> */}
            <Stack.Screen
                name="To do"
                component={Todopage}
            />
            <Stack.Screen
                name="Welcomepage"
                component={Welcomepage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

