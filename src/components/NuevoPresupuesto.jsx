import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setValido }) => {
  const [mensaje, setMensaje] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje(`${presupuesto} No es un presupuesto válido...`);
      setTimeout(() => {
        setMensaje(0);
        setPresupuesto("");
      }, 2000);
      return;
    }

    setValido(true);
  };

  return (
    <div>
      <div className="mt-48 mx-5 md:w-1/2 md:mx-auto shadow-sm shadow-green-700 py-5 md:py-16 px-5 md:px-20 text-center">
        <form onSubmit={onSubmit}>
          {mensaje ? (
            <Mensaje
              msg={mensaje}
              style="bg-red-300 text-red-900 w-full mb-5 py-2"
            />
          ) : null}
          <label className="text-2xl text-green-700" htmlFor="">
            Definir Presupuesto
          </label>
          <input
            className="focus:ring-1 focus:ring-green-700 focus:outline-none appearance-none leading-6
            border-b-2 border-green-700 w-full my-2 p-3 text-center"
            type="text"
            placeholder="Presupuesto Inicial"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />

          <input
            type="submit"
            value="Iniciar"
            className="w-1/2
            bg-green-700 mt-5 py-2 
            text-white 
            text-xl 
            cursor-pointer 
            transition-all 
            hover:bg-green-600
            shadow-md shadow-green-600"
          />
        </form>
      </div>
    </div>
  );
};

export default NuevoPresupuesto;
