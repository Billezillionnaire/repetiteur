import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { OnboardingScreen } from "./OnboardingScreen";
import { HomeScreen } from "./HomeScreen";
import { TutorDetailsScreen } from "./TutorDetailsScreen";
import { TutorRegistrationScreen } from "./TutorRegistrationScreen";
import { SearchScreen } from "./SearchScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Onboarding"
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Accueil" }}
            />
            <StackNavigator.Screen
                name="TutorDetails"
                component={TutorDetailsScreen}
                options={{ title: "Détails du répétiteur" }}
            />
            <StackNavigator.Screen
                name="TutorRegistration"
                component={TutorRegistrationScreen}
                options={{ title: "Devenir répétiteur" }}
            />
            <StackNavigator.Screen
                name="Search"
                component={SearchScreen}
                options={{ title: "Recherche" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);