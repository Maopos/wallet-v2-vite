import Gasto from "./Gasto";

const ListadoGastos = ({ gastos, modal, setGastoEditar }) => {
  return (
    <div className={modal ? "hidden" : ""}>
      <div className="mt-5 mx-5 md:w-1/2 md:mx-auto shadow-sm shadow-green-700 py-5 md:py-16 px-5 md:px-20 text-center">
        <h2 className="text-green-700 font-semibold text-2xl border-b-2 m-5">
          {gastos.length ? "Listado Gastos" : "No hay gastos aún"}
        </h2>
        <h2 className="text-green-700 font-semibold text-2xl justify-between m-5">
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
          <div key={i.id} className="w-full shadow my-2 py-2 px-5 text-left">
            <Gasto gasto={i} setGastoEditar={setGastoEditar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListadoGastos;
