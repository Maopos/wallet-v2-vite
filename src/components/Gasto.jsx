import icono_ahorro from "../img/icono_ahorro.svg";
import icono_casa from "../img/icono_casa.svg";
import icono_comida from "../img/icono_comida.svg";
import icono_gastos from "../img/icono_gastos.svg";
import icono_ocio from "../img/icono_ocio.svg";
import icono_salud from "../img/icono_salud.svg";
import icono_suscripciones from "../img/icono_suscripciones.svg";

const Gasto = ({ gasto }) => {
  const { nombre, cantidad, categoria, fecha } = gasto;

  const formatoMoneda = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return nuevaFecha.toLocaleString("es-ES", opciones);
  };

  const diccionario = {
    ahorro: icono_ahorro,
    comida: icono_comida,
    casa: icono_casa,
    salud: icono_salud,
    mensual: icono_suscripciones,
    ocio: icono_ocio,
    otros: icono_gastos,
  };

  return (
    <div className="md:flex">
      <img
        src={diccionario[categoria]}
        alt="Icono categoria"
        className="w-10 md:w-20 md:pr-4"
        
      />
      <div className="md:w-3/4">
        <p className="font-bold text-xl">{nombre}</p>
        <p>
          <span className="text-slate-400">Fecha:</span> {formatearFecha(fecha)}
        </p>
        <p className="text-lg text-slate-400">{categoria}</p>
      </div>
      <p className="font-thin md:py-6 md:ml-10 text-xl">
        {formatoMoneda(Number(cantidad))}
      </p>
    </div>
  );
};

export default Gasto;
