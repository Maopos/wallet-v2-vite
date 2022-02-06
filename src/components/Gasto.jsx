import editar from "../img/edit.ico";
import borrar from "../img/trash.ico";
import ahorro from "../img/chart_up.ico";
import alimentacion from "../img/put_in_shopping_cart.ico";
import hogar from "../img/home.ico";
import salud from "../img/favourite.ico";
import mensual from "../img/calendar.ico";
import ocio from "../img/film.ico";
import otros from "../img/pin.ico";

const Gasto = ({ gasto }) => {
  const { nombre, cantidad, categoria, id, fecha } = gasto;

  let icono = "";

  if (categoria === "Ahorro") {
    icono = ahorro;
  } else if (categoria === "Alimentación") {
    icono = alimentacion;
  } else if (categoria === "Hogar") {
    icono = hogar;
  } else if (categoria === "Salud") {
    icono = salud;
  } else if (categoria === "Mensual") {
    icono = mensual;
  } else if (categoria === "Ocio") {
    icono = ocio;
  } else if (categoria === "Otros") {
    icono = otros;
  }

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return nuevaFecha.toLocaleString("es-ES", opciones);
  };
  return (
    <div className="flex bg-blue-50/80 px-3 py-2 md:p-5 pr-2 mt-2 rounded-md shadow">
      <div className="w-1/6 m-auto">
        <img className="w-10" src={icono} alt="" />
      </div>
      <div className="w-4/6 my-auto">
        <p>{nombre}</p>
        <p>{cantidad}</p>
        <p>{formatearFecha(fecha)}</p>
      </div>
      <div className="md:flex w-1/6">
        <img
          src={editar}
          alt="editar"
          className="w-10 h-10 md:my-auto cursor-pointer ml-2 m-2"
        />
        <img
          src={borrar}
          alt="borrar"
          className="w-10 h-10 md:my-auto cursor-pointer ml-2"
        />
      </div>
    </div>
  );
};

export default Gasto;
