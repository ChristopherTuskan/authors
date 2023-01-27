import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import Main from './views/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default/>
          <Route element={<CreateAuthor/>} path="/author" />
          <Route element={<UpdateAuthor/>} path="/author/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
