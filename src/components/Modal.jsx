import { useState } from "react";
import Mensaje from "./Mensaje";
import cerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, guardarGasto }) => {
  //
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");

  const [mensaje, setMensaje] = useState("");

  const ocultarModal = () => {
    setModal(false);
  };

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const dateNow = Date.now().toString(36);
    return random + dateNow;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Debes llenar todos los campos...");
      setTimeout(() => {
        setMensaje("");
      }, 1500);
      return;
    }
    guardarGasto({ nombre, cantidad, categoria, id: generateId() });
    setModal(false);
  };

  return (
    <div className="bg-black/0 absolute top-0 left-0 bottom-0 right-0">
      <div>
        <img
          src={cerrarBtn}
          alt="icono cerrar"
          className="absolute top-5 right-5 md:top-5 md:right-20 w-5 cursor-pointer"
          onClick={ocultarModal}
        />
      </div>
      <form onSubmit={onSubmit}>
        <div className="bg-slate-50 mt-36 md:w-96 md:mx-auto mx-5 shadow-2xl">
          <div className="py-5">
            <legend className="text-center text-green-700 text-xl border-b-2 border-green-700 mx-5">
              Nuevo Gasto
            </legend>
            <div className="m-5">
              {mensaje ? (
                <Mensaje
                  msg={mensaje}
                  style="bg-red-300 text-red-900 w-full mb-5 py-2 text-center"
                />
              ) : null}
              <label htmlFor="nombre" className="text-green-700">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="modal-input"
                placeholder="Nombre del gasto"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="m-5">
              <label htmlFor="cantidad" className="text-green-700">
                Cantidad
              </label>
              <input
                type="number"
                id="cantidad"
                className="modal-input"
                placeholder="Cantidad del gasto"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
            <div className="m-5">
              <label htmlFor="categoria" className="text-green-700">
                Categoría
              </label>
              <select
                id="categoria"
                className="modal-input"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">-- Selecciona --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="salud">Salud</option>
                <option value="mensual">Mensual</option>
                <option value="ocio">Ocio</option>
                <option value="otros">Otros</option>
              </select>
            </div>
            <div className="m-5">
              <input
                type="submit"
                value="Añadir gasto"
                className="w-full bg-green-700 hover:bg-green-600 border-r-2 border-b-2 hover:border-0 hover:mt-1 hover:-mb-1 hover:-mr-1 hover:ml-1 border-green-900 cursor-pointer text-white py-2 transition-all"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
