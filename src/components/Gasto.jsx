const Gasto = ({ gasto }) => {
  const { nombre, cantidad, categoria, fecha } = gasto;

  const formatoMoneda = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return nuevaFecha.toLocaleString("es-ES", opciones);
  };

  return (
    <div className="md:flex">
      <div className="md:w-3/4">
        <p className="text-lg text-slate-400 ">{categoria}</p>
        <p className="font-bold text-xl">{nombre}</p>
        <p>
          <span className="text-slate-400">Fecha:</span> {formatearFecha(fecha)}
        </p>
      </div>
      <p className="font-thin md:py-6 md:ml-10 text-xl">{formatoMoneda(Number(cantidad))}</p>
    </div>
  );
};

export default Gasto;
