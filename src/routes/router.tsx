import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Index } from "../screens/Index/Index";
import { Skill } from "../screens/Skill/Index";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const { Screen, Navigator } = createBottomTabNavigator();

export function Router() {
  return (
    <Navigator>
      <Screen
        name="Profile"
        component={Index}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />
        }}
      />
      <Screen
        name="Skills"
        component={Skill}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="star-shooting" color={color} size={26} />
        }}
      />
    </Navigator>
  );
}