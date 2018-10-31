import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ScheduleScreen from '../screens/ScheduleScreen';
import ClassesScreen from '../screens/ClassesScreen';
import LunchScreen from '../screens/LunchScreen';
import SettingsScreen from '../screens/SettingsScreen';

const ClassesStack = createStackNavigator({
	Classes: ClassesScreen,
});

ClassesStack.navigationOptions = {
	tabBarLabel: 'Classes',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'
			}
		/>
	),
};

const LunchStack = createStackNavigator({
	Lunch: LunchScreen,
});

const Schedule = createStackNavigator({
	Schedule: ScheduleScreen,
});

Schedule.navigationOptions = {
	tabBarLabel: 'Schedule',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
		/>
	),
};

LunchStack.navigationOptions = {
	tabBarLabel: 'Lunch',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
		/>
	),
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
		/>
	),
};

export default createBottomTabNavigator({
	Schedule,
	ClassesStack,
	LunchStack,
	SettingsStack,
});
