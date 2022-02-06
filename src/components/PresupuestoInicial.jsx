import { useState } from "react";
import Mensaje from "./Mensaje";

const PresupuestoInicial = ({ presupuesto, setPresupuesto, setValido }) => {
  //
  const [mensaje, setmensaje] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(presupuesto) < 0 || !Number(presupuesto)) {
      setmensaje(`${presupuesto} No es un valor válido...`);
      setPresupuesto("");
      setTimeout(() => {
        setmensaje("");
      }, 2000);
      return;
    }
    setValido(true);
  };
  return (
    <div className="mt-32 rounded-xl shadow-md mx-5 p-5 bg-white md:w-1/2 md:mx-auto">
      <div className="px-5 md:px-32">
        <form onSubmit={handleSubmit}>
          {mensaje ? (
            <Mensaje
              style="bg-red-200 text-center rounded-xl text-red-800 w-full py-2 mb-3"
              msg={mensaje}
            />
          ) : null}
          <h2 className="text-center text-blue-800 font-thin text-3xl">
            Presupuesto Inicial
          </h2>
          <input
            type="text"
            className="focus:ring-0 focus:outline-none appearance-none text-center py-2 font-thin text-xl border-0 border-b-2 border-blue-800 mt-10 w-full"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />
          <input
            type="submit"
            className="bg-blue-400/50 hover:bg-blue-700 hover:text-white mt-5 py-2 rounded-xl shadow-md cursor-pointer text-blue-800 font-thin text-xl w-full"
            value='Iniciar'
          />
        </form>
      </div>
    </div>
  );
};

export default PresupuestoInicial;
