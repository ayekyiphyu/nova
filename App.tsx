import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';


export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider >
                Hello world
            </PaperProvider>
        </Provider>
    );
}