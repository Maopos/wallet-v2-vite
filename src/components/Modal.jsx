import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import cerrarBtn from "../img/cerrar.svg";

const Modal = ({
  setModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
  editarGasto,
}) => {
  //
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");

  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, []);

  const ocultarModal = () => {
    setModal(false);
    setGastoEditar({});
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

    const newGasto = {
      nombre,
      cantidad,
      categoria,
      id,
      fecha,
    };

    if (newGasto.id) {
      //actualizar

      newGasto.id = id;
      newGasto.fecha = fecha;
      editarGasto(newGasto);
    } else {
      //crear nuevo gasto

      newGasto.id = generateId();
      newGasto.fecha = Date.now();
      guardarGasto(newGasto);
    }

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
              {gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}
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
                className="modal-input cursor-pointer"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">-- Selecciona --</option>
                <option value="Ahorro">Ahorro</option>
                <option value="Alimentación">Alimentación</option>
                <option value="Hogar">Hogar</option>
                <option value="Salud">Salud</option>
                <option value="Mensual">Mensual</option>
                <option value="Ocio">Ocio</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <div className="m-5">
              <input
                type="submit"
                value={gastoEditar.nombre ? "Editar" : "Añadir Gasto"}
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
