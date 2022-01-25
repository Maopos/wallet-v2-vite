import cerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal }) => {
  const ocultarModal = () => {
    setModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-black/10 absolute top-0 left-0 bottom-0 right-0">
      <div>
        <img
          src={cerrarBtn}
          alt="icono cerrar"
          className="absolute top-5 right-5 md:top-20 md:right-20 w-5 cursor-pointer"
          onClick={ocultarModal}
        />
      </div>
      <form onSubmit={onSubmit}>
        <div className="bg-white mt-36 md:w-96 md:mx-auto mx-5">
          <div className="py-5">
            <legend className="text-center text-green-700 text-xl border-b-2 border-green-700 mx-5">
              Nuevo Gasto
            </legend>
            <div className="m-5">
              <label htmlFor="nombre" className="text-green-700">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="modal-input"
                placeholder="Nombre del gasto"
              />
            </div>
            <div className="m-5">
              <label htmlFor="cantidad" className="text-green-700">
                Cantidad
              </label>
              <input
                type="number"
                id="cantidad"
                className="modal-input"
                placeholder="Cantidad del gasto"
              />
            </div>
            <div className="m-5">
              <label htmlFor="categoria" className="text-green-700">
                Categoría
              </label>
              <select
                id="categoria"
                className="modal-input"
              >
                <option value="">-- Selecciona --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="salud">Salud</option>
                <option value="mensual">Mensual</option>
                <option value="ocio">Ocio</option>
                <option value="otros">Otros</option>
              </select>
            </div>
            <div className="m-5">
              <input
                type="submit"
                value="Añadir gasto"
                className="w-full bg-green-700 hover:bg-green-600 border-r-2 border-b-2 hover:border-0 hover:mt-1 hover:-mb-1 hover:-mr-1 hover:ml-1 border-green-900 cursor-pointer text-white py-2 transition-all"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
