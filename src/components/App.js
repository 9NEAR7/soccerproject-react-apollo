import React from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import { Route, Routes } from 'react-router-dom';
import CreateAttribute from './CreatePlayer';

const App = () => {
  return (
    <div className="center w85 ">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<PlayerList/>} />
          <Route
            path="/create"
            element={<CreateAttribute/>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;