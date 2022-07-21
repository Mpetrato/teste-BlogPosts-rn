import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'

export type propsNavigationStack = {
    Home: undefined;
    BlogList: undefined;
}

export type propsStack = NavigationProp<propsNavigationStack>