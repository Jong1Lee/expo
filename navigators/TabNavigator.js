import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useLinkProps } from "@react-navigation/native";

import { IconButton } from "react-native-paper";

// import Cat from '../screens/Cat';
// import ToDoList from "../screens/ToDoList";
// import Messages from "../screens/Messages";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

  const { onPress } = useLinkProps({ to: { screen: 'Add' } })

  return (
    <Tab.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     if (route.name === 'Cat') {
    //       iconName = focused
    //         ? 'cat'
    //         : 'cat';
    //     } else if (route.name === 'Messages') {
    //       iconName = focused ? 'message' : 'message-outline';
    //     }

    //     // You can return any component that you like here!
    //     return <IconButton icon={iconName} size={size} iconColor={color} />;
    //   },
    // })}
    >
      {/* <Tab.Screen name="ToDoList" component={ToDoList} />
      <Tab.Screen name="Messages" component={Messages}
        options={{
          headerRight: () =>
            <IconButton
              icon="plus-circle"
              onPress={onPress}
            ></IconButton>
        }} /> */}
    </Tab.Navigator>
  )
}