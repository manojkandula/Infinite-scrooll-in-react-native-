import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import usersdata from './src/screens/usersdata';
import userdata from './src/screens/userdata';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    usersD:usersdata,
    user:userdata,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
