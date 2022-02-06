import Gasto from "./Gasto";

const Listado = ({ gastos, setGastoEditar, eliminarGasto }) => {
  return (
    <div className="my-5 rounded-xl shadow-md mx-5 p-5 bg-white md:w-1/2 md:mx-auto">
      <h2 className="text-center text-blue-700 font-thin">
        {gastos.length > 0 ? "Listado de gastos" : "Agrega tu primer gasto"}
      </h2>
      {gastos.map((i) => (
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
