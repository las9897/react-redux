import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';



// Redux Library
import { createStore } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'

// create store
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <React.StrictMode>
  {/* App 컴포넌트를 store에 연동 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

