import { useState, useEffect } from "react";
import cerrar from "../img/delete.ico";
import Mensaje from "./Mensaje";

const Modal = ({
  setModal,
  gastos,
  setGastos,
  gastoEditar,
  setGastoEditar,
}) => {
  //
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, []);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const dateNow = Date.now().toString(36);
    return random + dateNow;
  };

  const handleClose = () => {
    setModal(false);
    setGastoEditar({});
  };

  let msg = "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    const nuevoGasto = {
      nombre,
      cantidad,
      categoria,
      id,
      fecha,
    };

    if (nuevoGasto.id) {
      nuevoGasto.id = id;
      nuevoGasto.fecha = fecha;
      const filtroDiferentes = gastos.filter((i) => i.id !== nuevoGasto.id);
      setGastos([...filtroDiferentes, nuevoGasto]);
      setGastoEditar({});
    } else {
      nuevoGasto.id = generateId();
      nuevoGasto.fecha = Date.now();
      setGastos([...gastos, nuevoGasto]);
    }

    setModal(false);
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <form onSubmit={handleSubmit}>
        <div className="rounded-xl shadow-md mx-auto px-5 py-10 bg-white md:w-1/2 mt-36 text-center">
          <label
            htmlFor="gasto"
            className="text-blue-700 font-thin mx-10 text-xl"
          >
            Nuevo Gasto
          </label>
          <img
            src={cerrar}
            alt="cerrar"
            className="w-10 absolute right-4 md:right-96 top-40 md:top-40 cursor-pointer"
            onClick={handleClose}
          />
          {error ? (
            <Mensaje
              style="w-11/12 mx-auto py-2 rounded-md bg-yellow-200 mt-5 text-yellow-800"
              msg="Debes llenar todos los campos..."
            />
          ) : null}
          <input
            type="text"
            className="w-11/12 border-2 p-2 mx-auto mt-5 rounded-md text-sm"
            placeholder="Ingresa un nuevo gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            className="w-11/12 border-2 p-2 mx-auto mt-5 rounded-md text-sm"
            placeholder="Cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
          <select
            name="categoria"
            id="categoria"
            className="w-11/12 border-2 p-2 mx-auto mt-5 rounded-md text-sm"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Categoria --</option>
            <option value="Ahorro">Ahorro</option>
            <option value="Alimentación">Alimentación</option>
            <option value="Hogar">Hogar</option>
            <option value="Salud">Salud</option>
            <option value="Mensual">Mensual</option>
            <option value="Ocio">Ocio</option>
            <option value="Otros">Otros</option>
          </select>
          <input
            type="submit"
            value="Guardar"
            className="bg-blue-700 text-white mt-5 font-normal w-11/12 py-2 
            rounded-md text-lg cursor-pointer hover:bg-blue-200 hover:text-blue-900 hover:font-medium transition-all"
          />
        </div>
      </form>
    </div>
  );
};

export default Modal;

<form>
  <label htmlFor="gasto">Nuevo Gasto</label>
  <input type="text" />
</form>;
