import React from 'react';
import {Provider} from 'react-redux';
import RootContainer from './App/Containers/RootContainer';
import {store} from './App/Redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
