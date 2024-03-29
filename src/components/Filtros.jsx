import { useState, useEffect } from "react";

const Filtros = ({ modal, filtro, setFiltro }) => {
  return (
    <div className={modal ? "hidden" : ""}>
      <div className="bg-white mt-5 mx-5 md:w-1/2 md:mx-auto shadow-sm shadow-green-700 py-2 px-5 md:px-20 text-center">
        <form action="" className="md:flex justify-center">
          <div className="m-2 md:mr-20">
            <label htmlFor="categoria" className="text-slate-400 font-semibold">
              Filtrar por categoria
            </label>
          </div>
          <div>
            <select
              id="categoria"
              className="modal-input cursor-pointer w-full"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            >
              <option value="">-- Todas las categorías --</option>
              <option value="Ahorro">Ahorro</option>
              <option value="Alimentación">Alimentación</option>
              <option value="Hogar">Hogar</option>
              <option value="Salud">Salud</option>
              <option value="Mensual">Mensual</option>
              <option value="Ocio">Ocio</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filtros;
