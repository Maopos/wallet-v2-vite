import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  modal,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className={modal ? "hidden" : ""}>
      <div className="bg-white m-5 mx-5 md:w-1/2 md:mx-auto shadow-sm shadow-green-700 py-2 md:py-5 px-5 md:px-20 text-center">
        {filtro ? (
          <>
            <h2 className="text-green-700 font-semibold text-2xl border-b-2">
              {gastosFiltrados.length
                ? `Gastos de ${filtro}`
                : `No hay gastos de ${filtro}`}
            </h2>
            <h2 className="text-green-700 text-2xl font-thin justify-between m-5">
              {gastosFiltrados.length ? (
                <div className="flex justify-between">
                  <p className="text-blue-600">→ Editar</p>
                  <p className="text-red-600">Eliminar ←</p>
                </div>
              ) : (
                `Has realizado algún gasto de ${filtro}?`
              )}
            </h2>
            {gastosFiltrados.map((i) => (
              <div
                key={i.id}
                className="w-full shadow my-2 py-2 px-5 text-left"
              >
                <Gasto
                  gasto={i}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                />
              </div>
            ))}
          </>
        ) : (
          <>
            <h2 className="text-green-700 font-semibold text-2xl border-b-2">
              {gastos.length ? "Listado Gastos" : "No hay gastos aún"}
            </h2>
            <h2 className="text-green-700 text-2xl font-thin justify-between m-5">
              {gastos.length ? (
                <div className="flex justify-between">
                  <p className="text-blue-600">→ Editar</p>
                  <p className="text-red-600">Eliminar ←</p>
                </div>
              ) : (
                "Verás tus gastos aqui..."
              )}
            </h2>
            {gastos.map((i) => (
              <div
                key={i.id}
                className="w-full shadow my-2 py-2 px-5 text-left"
              >
                <Gasto
                  gasto={i}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ListadoGastos;
