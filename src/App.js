import logo from './logo.svg';
import './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListView } from './pages/ListView';
import { FavouritesView } from './pages/FavouritesView';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
    <div>
      <NavBar />
      <div className={StyleSheet.appBody}>
      <BrowserRouter>
      <Routes>
        {/* <Route element={<NavBar />} path= '/'></Route> */}
        <Route element={<ListView />} path= '/'></Route>
        <Route element={<FavouritesView />} path = '/favourites'></Route>
      </Routes>
      </BrowserRouter>
      </div>
  
    </div>

    </>
  );
}

export default App;
