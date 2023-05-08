import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import Inicio from './components/Inicio';
import Header from './components/Header';
import Cotizar from './components/Cotizar';
import NuevaPagina from './components/NuevaPagina';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Inicio />} />
            <Route path='cotizar' element={<Cotizar />} />

            <Route path='*' element={<Navigate replace to="/" />} />

            <Route path='nueva-pagina' element={<NuevaPagina />} />

          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
