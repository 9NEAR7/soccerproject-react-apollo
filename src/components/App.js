import React from 'react';
import CreatePlayer from './CreatePlayer';
import Header from './Header';
import PlayerList from './PlayerList';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<PlayerList/>} />
          <Route
            path="/create"
            element={<CreatePlayer/>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;