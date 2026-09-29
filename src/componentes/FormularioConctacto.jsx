import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"
import "./FormularioContacto.css";

function FormularioContacto() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const enviarFormulario = (datos) => {
    emailjs
    .send(
      "toto123",
      "template_9oa9lwm",
      datos,
      {
        publicKey: "oQ87QfGJSf79YngW7",
      }
    )
    .then(
      () => {
        alert("Mensaje enviado correctamente");
        reset();
      },
      (error) => {
        console.log("Error al enviar:", error);
        alert("Ocurrió un error al enviar el mensaje");
      }
    );
  };

  return (
    <div className="formulario-contacto">
      <h2>Formulario de Contacto</h2>

      <form onSubmit={handleSubmit(enviarFormulario)}>

  <div className="campo">
    <label>Nombre y Apellido</label>

    <input
      type="text"
      {...register("nombre", {
        required: "Debe ingresar su nombre y apellido",
      })}
    />

    {errors.nombre && (
      <p className="error">{errors.nombre.message}</p>
    )}
  </div>


  <div className="campo">
    <label>Correo Electrónico</label>

    <input
      type="email"
      {...register("email", {
        required: "Debe ingresar su correo electrónico",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Debe ingresar un correo electrónico válido",
        },
      })}
    />

    {errors.email && (
      <p className="error">{errors.email.message}</p>
    )}
  </div>


  <div className="campo">
    <label>Mensaje</label>

    <textarea
      {...register("mensaje", {
        required: "Debe ingresar un mensaje",
        maxLength: {
          value: 300,
          message: "El mensaje no puede superar los 300 caracteres",
        },
      })}
    />

    {errors.mensaje && (
      <p className="error">{errors.mensaje.message}</p>
    )}
  </div>


  <button type="submit">Enviar</button>

</form>
    </div>
  );
}

export default FormularioContacto;