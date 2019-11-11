import React from 'react';
// import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator';
import AdminDrawNavigator from './AdminHomeNavigator';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: { 
      screen: AuthNavigator
    },
    AdminDashBoard: {
      screen: AdminDrawNavigator
    }
  },
  {
     initialRouteName: 'AdminDashBoard'
  }
);

export default createAppContainer(SwitchNavigator);