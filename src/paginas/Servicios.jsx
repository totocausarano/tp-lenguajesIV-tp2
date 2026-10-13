import PieDePagina from '../componentes/PieDePagina';
import TarjetaTecnologia from '../componentes/TarjetaTecnologia';

import html from '../assets/imagenes/html.png';
import css from '../assets/imagenes/css.png';
import javascript from '../assets/imagenes/javascript.jpeg';
import react from '../assets/imagenes/react.png';

export default function Servicios() {

  const tecnologias = [
    {
      nombre: "HTML",
      descripcion: "Lenguaje utilizado para estructurar páginas web.",
      imagen: html
    },
    {
      nombre: "CSS",
      descripcion: "Permite dar estilos y diseñar páginas web.",
      imagen: css
    },
    {
      nombre: "JavaScript",
      descripcion: "Lenguaje que permite agregar interactividad a las páginas web.",
      imagen: javascript
    },
    {
      nombre: "React",
      descripcion: "Biblioteca de JavaScript para crear interfaces de usuario.",
      imagen: react
    }
  ];



  return (
    <div>
      <h1>Página de Servicios</h1>
      <div className="contenedor-tecnologias">
        {tecnologias.map((tecnologia) => (
          <TarjetaTecnologia
            key={tecnologia.nombre}
            nombre={tecnologia.nombre}
            descripcion={tecnologia.descripcion}
            imagen={tecnologia.imagen}
         />
      ))}
      </div>
      <PieDePagina />
    </div>
  );
}