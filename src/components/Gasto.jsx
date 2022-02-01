import React from "react";

import {
  LeadingActions,
  SwipeableList,
  TrailingActions,
  SwipeAction,
  SwipeableListItem,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import icono_ahorro from "../img/icono_ahorro.svg";
import icono_casa from "../img/icono_casa.svg";
import icono_comida from "../img/icono_comida.svg";
import icono_gastos from "../img/icono_gastos.svg";
import icono_ocio from "../img/icono_ocio.svg";
import icono_salud from "../img/icono_salud.svg";
import icono_suscripciones from "../img/icono_suscripciones.svg";

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { nombre, cantidad, categoria, id, fecha } = gasto;

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
    Ahorro: icono_ahorro,
    Alimentación: icono_comida,
    Hogar: icono_casa,
    Salud: icono_salud,
    Mensual: icono_suscripciones,
    Ocio: icono_ocio,
    Otros: icono_gastos,
  };

  const leading = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() => setGastoEditar(gasto)}
        className="bg-blue-600 text-white text-2xl p-10"
      >
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailing = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => eliminarGasto(id)}
        destructive={true}
        className="bg-red-600 text-white text-2xl p-10"
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leading()}
        trailingActions={trailing()}
      >
        <div className="md:flex">
          <img
            src={diccionario[categoria]}
            alt="Icono categoria"
            className="w-10 md:w-20 md:pr-4"
          />
          <div className="">
            <p className="font-bold text-xl">{nombre}</p>
            <p>
              <span className="text-slate-400">Fecha:</span>{" "}
              {formatearFecha(fecha)}
            </p>
            <p className="text-lg text-slate-400">{categoria}</p>
          </div>
          <p className="font-thin md:py-6 lg:ml-36 text-xl">
            {formatoMoneda(Number(cantidad))}
          </p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
