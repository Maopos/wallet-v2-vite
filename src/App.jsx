import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import PresupuestoInicial from "./components/PresupuestoInicial";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [valido, setValido] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  const eliminarGasto = (id) => {
    const gastosSinEliminado = gastos.filter((i) => i.id != id);
    setGastos(gastosSinEliminado);
  };

  return (
    <div className="bg-gray-100 h-full pb-5">
      <Header />
      {valido ? (
        <Dashboard
          presupuesto={presupuesto}
          gastos={gastos}
          setGastos={setGastos}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
        />
      ) : (
        <PresupuestoInicial
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setValido={setValido}
        />
      )}
    </div>
  );
}

export default App;
