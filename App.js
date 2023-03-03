// Import React Native Paper UI components
import { Provider as PaperProvider } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './navigators/StackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './components/Styles';

// export default provide "main" component
export default function App() {

  const linking = {
    prefixes: [],
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <StackNavigator></StackNavigator>
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}
