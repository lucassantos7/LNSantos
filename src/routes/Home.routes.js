import React  from "react";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

  import PropRoutes from '../routes/Prop.routes';
  import PropsNav from './MenuProps.routes'


  import Icon from 'react-native-vector-icons/Ionicons'
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

  import SideBar from '../../components/CustomDrawer.js';
  
  const Drawer = createDrawerNavigator();
  
  export default function MyDrawer() {
    return (
      <Drawer.Navigator
        drawerContent={props => <SideBar {...props} />}
        options={{
            activeBackgroundColor:'#7895ff'
          }
        }
        >  
        <Drawer.Screen 
          name="Home" 
          component={PropRoutes}
          options={{
            drawerIcon:({ color, size}) => (
            <Icon name='home' style={{fontSize: size, color: color}}/>
              ),
        }}
          />
        <Drawer.Screen 
          name="Properties" 
          component={PropsNav}
          options={{
            drawerIcon:({ color, size}) => (
              <Icon2 name='home-city' style={{fontSize: size, color: color}}/>
            ),
            }}
          />
      </Drawer.Navigator>
    );
  }
