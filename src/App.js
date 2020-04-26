import React, {Component} from 'react';
import {createStore} from 'redux';
import {Reducer} from './redux/reducer';
import Main from './components/Main/Main';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

const store = createStore(Reducer);

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
