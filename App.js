import FirstScreen from "./screens/FistScreen";
import SecondScreen from "./screens/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [colorChange, setColorChange] = useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen
          name="First"
          options={{
            headerShown: false,
          }}
          component={FirstScreen}
          initialParams={{ color: "silver" }}
        />
        <Stack.Screen
          name="Second"
          options={{
            headerShown: false,
          }}
          component={SecondScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
