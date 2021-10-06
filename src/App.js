import './App.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layout/common/Header';
import Footer from './layout/common/Footer';
import Routes from './layout/common/Routes';
import store from "./helpers/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes />
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App;