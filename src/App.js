import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Peliculas from './components/Peliculas';
import Login from "./components/Login"

function App() {
  return (
    <Routes>
      <Route path= '/login' element={<Login/>} />
      <Route path='/' element={<Peliculas />} />
    </Routes>
  );
}

export default App;
