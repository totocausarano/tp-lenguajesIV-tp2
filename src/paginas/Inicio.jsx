import { useState, useEffect } from 'react';
import PieDePagina from '../componentes/PieDePagina';
import TarjetaPais from '../componentes/TarjetaPaises';

export default function Inicio() {

  const [paises, setPaises] = useState([]);

  useEffect(() => {

    fetch('https://api.restcountries.com/countries/v5?region=Americas&limit=100', {
      headers: {
        Authorization: 'rc_live_56ddbe731cbe4468a357dc6507f3eeb6'
      }
    })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }
  
        return respuesta.json();
      })
      .then((datos) => {
  
        const paisesElegidos = [
          "Argentina",
          "Brazil",
          "Chile",
          "Uruguay",
          "Paraguay",
          "Peru"
        ];
  
        const paisesFiltrados = datos.data.objects.filter((pais) =>
          paisesElegidos.includes(pais.names.common)
        );
  
        setPaises(paisesFiltrados);
  
        console.log(paisesFiltrados);
      })
      .catch((error) => {
        console.log("Error al obtener los países:", error);
      });
  
  }, []);
  return (
    <div>
      <h1>Página de Inicio</h1>

      <p>Información de países obtenida de una API pública.</p>
      <div className="contenedor-paises">
  {paises.map((pais) => (
    <TarjetaPais
      key={pais.uuid}
      names={pais.names}
      capitals={pais.capitals}
      continents={pais.continents}
      population={pais.population}
      flag={pais.flag}
    />
  ))}
</div>

      <PieDePagina />
    </div>
  );
}