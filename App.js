import React from "react";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";

import AppNavigation from './src/navigation'
import store from './src/lib/store'

const RootNavigation= createAppContainer(AppNavigation);
const App= ()=>{
  return(
    <Provider store={store}>
    <RootNavigation/>
    </Provider>
  );
}
export default App;