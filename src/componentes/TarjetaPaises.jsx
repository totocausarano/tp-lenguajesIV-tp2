import "./TarjetaPaises.css";

export default function TarjetaPais(pais) {

    const {
      names,
      capitals,
      continents,
      population,
      flag
    } = pais;
  
    return (
      <div className="tarjeta-pais">
  
        {flag?.url_png && (
          <img
            src={flag.url_png}
            alt={`Bandera de ${names.common}`}
          />
        )}
  
        <h2>{names.common}</h2>
  
        <p>
          <strong>Capital:</strong> {capitals?.[0]?.name || "No disponible"}
        </p>
  
        <p>
          <strong>Continente:</strong> {continents?.[0] || "No disponible"}
        </p>
  
        <p>
          <strong>Población:</strong> {population?.toLocaleString("es-AR")}
        </p>
  
      </div>
    );
  }