import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import Inicio from './components/Inicio';
import Header from './components/Header';
import Cotizar from './components/Cotizar';
import NuevaPagina from './components/NuevaPagina';
import Boleta from './components/Boleta';
import Footer from './components/Footer';

/*----- Agrego conseguir dni y mail--------*/
import { AppProvider } from './components/AppContext';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<Inicio />} />
              <Route path='cotizar' element={<Cotizar />} />

              <Route path='*' element={<Navigate replace to="/" />} />

              {/*boton de cotizar */}
              <Route path='cotizar/:productId' element={<NuevaPagina />} />

              {/*boton de finalizar */}
              <Route path='/boleta-cotizacion' element={<Boleta />} />

              <Route path='/' element={<Footer />} />
            </Route>

          </Routes>
        </AppProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
