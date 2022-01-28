import nuevoGasto from "../img/nuevo-gasto.svg";
import Modal from "./Modal";

const Dashboard = ({ presupuesto, setModal, modal, guardarGasto }) => {
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
        <div className="mt-5 mx-5 md:w-1/2 md:mx-auto shadow-sm shadow-green-700 py-5 md:py-16 px-5 md:px-20 text-center md:flex">
          <div className="md:w-1/2">
            <h3>Grafico</h3>
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
                {formatoMoneda(Number(0))}
              </span>
            </p>
            <p className="font-semibold text-green-700 my-5">
              Saldo:{" "}
              <span className="text-black font-thin text-2xl">
                {formatoMoneda(Number(0))}
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
      {modal && <Modal setModal={setModal} guardarGasto={guardarGasto} />}
    </div>
  );
};

export default Dashboard;
