/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainScreen from './screens/MainScreen';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './styles/theme';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Header} from './components/header';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}></Button>
    </View>
  );
}

function DetailsScreen({navigation}) {
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: (props: any) => {
  //       return (
  //         <Text
  //           {...props}
  //           onPress={() => {
  //             navigation.goBack();
  //           }}>
  //           Back
  //         </Text>
  //       );
  //     },
  //   });
  // }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: {
                backgroundColor: 'white',
                paddingHorizontal: 20,
                paddingTop: Platform.OS === 'android' ? 30 : 100,
              },
              headerStyle: {backgroundColor: 'white'},
              headerTintColor: 'black',
              headerTransparent: true,
            }}>
            <Stack.Screen
              name="Home"
              component={MainScreen}
              options={{
                header: () => <Header />,
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{
                header: () => <Header />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
