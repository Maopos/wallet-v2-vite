import Gasto from "./Gasto";

const Listado = ({ gastos }) => {
  return (
    <div className="my-5 rounded-xl shadow-md mx-5 p-5 bg-white md:w-1/2 md:mx-auto">
      <h2 className="text-center text-blue-700 font-thin">Listado de gastos</h2>
      {gastos.map((i) => (
        <Gasto key={i.id} gasto={i} />
      ))}
    </div>
  );
};

export default Listado;
