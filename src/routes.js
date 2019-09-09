import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import New from './pages/New';

// import { Container } from './styles';

const Routes = () =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        User: createBottomTabNavigator({
          Home,
          New,
        }),
      },
      {
        initialRouteName: 'User',
      },
    ),
  );

export default Routes;
