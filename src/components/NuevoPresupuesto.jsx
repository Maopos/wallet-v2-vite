const NuevoPresupuesto = () => {
  return (
    <div>
      <div className="m-5 md:w-1/2 md:mx-auto shadow-sm shadow-green-700 py-5 md:py-16 px-5 md:px-20 text-center">
        <form>
          <label className="text-2xl text-green-700" htmlFor="">
            Definir Presupuesto
          </label>
          <input
            className="border-b-2 border-green-700 w-full my-2 p-3 text-center"
            type="text"
            placeholder="Presupuesto Inicial"
          />
          <input
            type="submit"
            value="Iniciar"
            className="w-full bg-green-700 mt-5 py-2 text-white text-xl cursor-pointer transition-all hover:bg-green-600"
          />
        </form>
      </div>
    </div>
  );
};

export default NuevoPresupuesto;
