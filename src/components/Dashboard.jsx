import { useState, useEffect } from "react";
import nuevoGasto from "../img/nuevo-gasto.svg";
import Modal from "./Modal";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = ({
  presupuesto,
  setModal,
  modal,
  guardarGasto,
  gastos,
  gastoEditar,
  setGastoEditar,
  editarGasto,
}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastos = gastos.reduce(
      (total, i) => Number(i.cantidad) + total,
      0
    );
    const totalDisponible = presupuesto - totalGastos;

    setGastado(totalGastos);
    setDisponible(totalDisponible);
  }, [gastos]);

  const formatoMoneda = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleNuevoGasto = () => {
    setModal(true);
  };

  return (
    <div>
      <div className={modal ? "blur" : ""}>
        <div className="bg-white mt-5 mx-5 md:w-1/2 md:mx-auto shadow-sm shadow-green-700 py-5 md:py-16 px-5  text-center md:flex">
          <div className="md:w-1/2 p-8 md:p-2 md:mr-5">
            <CircularProgressbar
              value={(disponible * 100) / presupuesto}
              styles={buildStyles({
                pathColor: "green",
                trailColor: "rgb(255, 99, 99)",
                textColor: "green",
                textSize: ".5rem",
              })}
              text={`Disponible ${(disponible * 100) / presupuesto}%`}
            />
          </div>
          <div className="md:w-1/2 text-left">
            <p className="font-semibold text-green-700 my-5">
              Presupuesto:{" "}
              <span className="text-black font-thin text-2xl">
                {formatoMoneda(Number(presupuesto))}
              </span>
            </p>
            <p className="font-semibold text-green-700 my-5">
              Gastos:{" "}
              <span className="text-black font-thin text-2xl">
                {formatoMoneda(Number(gastado))}
              </span>
            </p>
            <p className="font-semibold text-green-700 my-5">
              Saldo:{" "}
              <span className="text-black font-thin text-2xl">
                {formatoMoneda(Number(disponible))}
              </span>
            </p>
          </div>
          <img
            src={nuevoGasto}
            alt="icono nuevo gasto"
            className="w-10 md:-mb-40 cursor-pointer"
            onClick={handleNuevoGasto}
          />
        </div>
      </div>
      {modal && (
        <Modal
          setModal={setModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
          gastos={gastos}
          editarGasto={editarGasto}
        />
      )}
    </div>
  );
};

export default Dashboard;
