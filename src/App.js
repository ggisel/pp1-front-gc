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
import AutosVenta from './components/AutosVenta';
import Auto from './components/Auto';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path='/' element={<Header />}>
              {/*boton de ventana-autos */}
              <Route path='/compra' element={<AutosVenta />} />
              <Route path='/compra/:autoId' element={<Auto />} />




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
