const Mensaje = ({ msg, style }) => {
  return (
    <div>
      <p className={style}>{msg}</p>
    </div>
  );
};

export default Mensaje;
