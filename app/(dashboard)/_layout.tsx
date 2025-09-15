import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';
import Tasks from './tasks';
import Profile from './profile';
import Settings from './settings';

const Tab = createBottomTabNavigator();

export default function DashboardLayout() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tasks" component={Tasks} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
