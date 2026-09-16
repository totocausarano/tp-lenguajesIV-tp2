import { NavLink } from 'react-router-dom';

export default function Encabezado() {
  const estiloActivo = ({ isActive }) => ({
    color: isActive ? 'red' : 'black',
    margin: '0 10px'
  });

  return (
    <header>
      <nav>
        <NavLink to="/" style={estiloActivo}>Inicio</NavLink>
        <NavLink to="/servicios" style={estiloActivo}>Servicios</NavLink>
        <NavLink to="/contacto" style={estiloActivo}>Contacto</NavLink>
      </nav>
      <hr />
    </header>
  );
}