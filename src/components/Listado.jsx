import Gasto from "./Gasto";

const Listado = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="my-5 rounded-xl shadow-md mx-5 p-5 bg-white md:w-1/2 md:mx-auto">
      <h2 className="text-center text-blue-700 font-thin">
        {filtro
          ? gastosFiltrados.length > 0
            ? `Gastos de ${filtro}`
            : `No hay gastos de ${filtro}`
          : gastos.length > 0
          ? "Listado de gastos"
          : "Agrega tu primer gasto"}
      </h2>
      {filtro
        ? gastosFiltrados.map((i) => (
            <Gasto
              key={i.id}
              gasto={i}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))
        : gastos.map((i) => (
            <Gasto
              key={i.id}
              gasto={i}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
    </div>
  );
};

export default Listado;
