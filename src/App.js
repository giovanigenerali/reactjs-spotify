import dotenv from 'dotenv';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './config/reactotron';

import GlobalStyle from './styles/global';

import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import ErrorBox from './components/ErrorBox';

import store from './store';
import Routes from './routes';

dotenv.config();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
