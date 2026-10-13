import './TarjetaTecnologia.css';

export default function TarjetaTecnologia(tecnologia) {
  const { nombre, descripcion, imagen } = tecnologia;

  return (
    <div className="tarjeta-tecnologia">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
    </div>
  );
}