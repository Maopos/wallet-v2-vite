import { useState, useEffect } from "react";
import Listado from "./Listado";
import nuevo from "../img/add_page.ico";
import Modal from "./Modal";

const Dashboard = ({
  presupuesto,
  gastos,
  setGastos,
  gastoEditar,
  setGastoEditar,
  eliminarGasto,
}) => {
  const [modal, setModal] = useState(false);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const result = gastos.reduce((total, i) => Number(i.cantidad) + total, 0);
    setGastado(result);
    setDisponible(presupuesto - result);
  }, [gastos]);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
    }
  }, [gastoEditar]);

  return (
    <div>
      <div className={modal ? "blur" : null}>
        <div className="mt-5 rounded-xl shadow-md mx-5 p-5 bg-white md:w-1/2 md:mx-auto">
          <div className="px-5 md:px-32">
            <div className="text-center font-thin text-blue-800 mb-5 text-xl">
              Dashboard
            </div>
            <div className="md:flex">
              <div className="w-full md:w-1/2 p-2">grafico</div>
              <div className="w-full md:w-1/2 p-2 text-blue-800 font-normal">
                <p>
                  Presupuesto:{" "}
                  <span className="text-black font-thin text-xl">
                    ${presupuesto}
                  </span>
                </p>
                <p>
                  Gastado:{" "}
                  <span className="text-black font-thin text-xl">
                    ${gastado}
                  </span>
                </p>
                <p>
                  Disponible:{" "}
                  <span className="text-black font-thin text-xl">
                    ${disponible}
                  </span>
                </p>
              </div>
            </div>
            <img
              src={nuevo}
              alt="nuevo"
              className="w-10 absolute right-12 md:right-96 top-72 md:top-64 cursor-pointer"
              onClick={() => setModal(true)}
            />
          </div>
        </div>
        <Listado
          gastos={gastos}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
        />
      </div>
      {modal ? (
        <Modal
          setModal={setModal}
          gastos={gastos}
          setGastos={setGastos}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      ) : null}
    </div>
  );
};

export default Dashboard;
