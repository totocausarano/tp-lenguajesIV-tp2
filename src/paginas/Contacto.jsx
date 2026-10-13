import PieDePagina from '../componentes/PieDePagina';
import FormularioContacto from '../componentes/FormularioConctacto';
import './Contacto.css';

export default function Contacto() {
  return (
    <div>
      <h1>Contacto</h1>

      <div className="contenedor-contacto">

        <div className="seccion-formulario">
          <FormularioContacto />
        </div>

        <div className="mapa-contacto">
          <h2>¿Dónde estamos?</h2>

          <iframe
            title="Ubicación de UCASAL"
            src="https://www.google.com/maps?q=Universidad+Catolica+de+Salta+Campo+Castanares&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
      </div>
      <PieDePagina/>
    </div>
  );
}