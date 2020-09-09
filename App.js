import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./reducers";
import saga from "./sagas";
import SplashScreen from './Components/Common/splashScreen';
import logInOrSignUpPage from './Components/Common/logInOrSignUpPage';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware),
	);
const Stack = createStackNavigator();

sagaMiddleware.run(saga);

class App extends Component{

	render(){
		return(
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
						<Stack.Screen name="logInOrSignUpPage" component={logInOrSignUpPage} options={{headerShown: false}} />
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		);
	}
}

export default App;
