import NavBar from './componentes/NavBar/NavBar';
import Inicio  from './pages/Inicio'
import Servicios from './pages/Servicios';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='/servicio' element={<Servicios/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
