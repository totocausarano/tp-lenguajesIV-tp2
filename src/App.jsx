import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import Inicio from './paginas/Inicio';
import Servicios from './paginas/Servicios';
import Contacto from './paginas/Contacto';
import NoExiste from './paginas/NoExiste';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Encabezado />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoExiste />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}