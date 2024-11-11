import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { generalRoutes } from './routes/generalRoutes.tsx';
import Navbar from './shared/Navbar.tsx';
import { store } from './store/store.ts';
import {Provider} from 'react-redux'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            {generalRoutes.map(data=><Route path={data.path} element={data.element} key={data.path}/>)}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
