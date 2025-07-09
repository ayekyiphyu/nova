import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import { store } from './src/store';
import { theme } from './src/styles/theme';

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <HomeScreen />
            </PaperProvider>
        </Provider>
    );
}