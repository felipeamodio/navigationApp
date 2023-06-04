import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import New from '../screens/New';
import {Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name="Feed" 
                component={Feed}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                    tabBarLabel: 'Incício'
                }} 
            />
            <Tab.Screen 
                name="New" 
                component={New}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size} />,
                    tabBarLabel: 'Novo'
                }} 
            />
        </Tab.Navigator>
    )
}