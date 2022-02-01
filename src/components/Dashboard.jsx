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
  setGastos,
  setPresupuesto,
  setValido,
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

  const reset = () => {
    const reset = confirm("Deseas reiniciar el presupuesto?");
    if (reset) {
      setGastos([]);
      setPresupuesto("");
      setValido(false);
    }
  };

  return (
    <div>
      <div className={modal ? "blur" : ""}>
        <div className="bg-white mt-5 mx-5 md:w-1/2 md:mx-auto shadow-sm shadow-green-700 py-2 px-5 md:flex">
          <div className="md:w-1/2 p-8 md:p-10 md:mr-5">
            <CircularProgressbar
              value={(disponible * 100) / presupuesto}
              styles={buildStyles({
                pathColor: "green",
                trailColor: "rgb(255, 99, 99)",
                textColor: disponible < 0 ? "red" : "green",
                textSize: ".5rem",
              })}
              text={`Disponible ${(disponible * 100) / presupuesto}%`}
              counterClockwise="true"
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
            {disponible < 0 ? (
              <p className="font-semibold text-red-700 my-5">
                Saldo:{" "}
                <span className="text-red font-thin text-2xl">
                  {formatoMoneda(Number(disponible))}
                </span>
              </p>
            ) : (
              <p className="font-semibold text-green-700 my-5">
                Saldo:{" "}
                <span className="text-black font-thin text-2xl">
                  {formatoMoneda(Number(disponible))}
                </span>
              </p>
            )}
            <button
              className="bg-green-700 text-white mb-3 md:mt-10 px-5 py-2 shadow-md hover:bg-red-500 transition duration-300"
              onClick={reset}
            >
              Reiniciar Presupuesto
            </button>
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
