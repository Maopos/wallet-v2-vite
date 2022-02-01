const PresupuestoInicial = () => {
  return (
    <div className="mt-32 rounded-xl shadow-md mx-5 p-5 bg-white md:w-1/2 md:mx-auto">
      <form>
        <h2 className="text-center text-blue-800 font-thin text-3xl">
          Presupuesto Inicial
        </h2>
        <input
          type="text"
          className="focus:ring-0 focus:outline-none appearance-none text-center py-2 font-thin text-xl
          flex mx-auto border-0 border-b-2 border-blue-800 w-[300px] mt-10"
        />
        <input
          type="submit"
          className="bg-blue-200 flex mx-auto mt-5 px-32 py-2 rounded-xl shadow-md cursor-pointer text-blue-800 font-thin text-xl"
        />
      </form>
    </div>
  );
};

export default PresupuestoInicial;
