import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SearchModule from './components/SearchModule';
import UserCard from './components/UserCard';

const App = () => {
  return (
    <>
      {/* <UserCard /> */}
      <Router>
        <Routes>
          <Route path='/' element={<SearchModule />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
