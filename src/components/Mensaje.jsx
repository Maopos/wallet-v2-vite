const Mensaje = ({ style, msg }) => {
  return (
    <div>
      <p className={style}>{msg}</p>
    </div>
  );
};

export default Mensaje;
