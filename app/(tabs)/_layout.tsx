import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Ionicons from '@expo/vector-icons/Ionicons';

const tabBarIconSize: number = 24;

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
        <Tabs.Screen
          name="CalendarIntegration"
          options={{
              title: 'Календарь',
              tabBarIcon: ({ color }) => <Ionicons name="calendar-clear" size={tabBarIconSize} color={color} />,
          }}
      />
      <Tabs.Screen
          name="TaskPlanner"
          options={{
              title: 'Задачи',
              tabBarIcon: ({ color }) => <Ionicons name="layers" size={tabBarIconSize} color={color} />,
          }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Главная',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={tabBarIconSize} color={color} />,
        }}
      />
      <Tabs.Screen
          name="IncomeExpense"
          options={{
              title: 'Бюджет',
              tabBarIcon: ({ color }) => <Ionicons name="wallet" size={tabBarIconSize} color={color} />,
          }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Профиль',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={tabBarIconSize} color={color} />,
        }}
      />
    </Tabs>
  );
}
