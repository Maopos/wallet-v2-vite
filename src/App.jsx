import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import PresupuestoInicial from "./components/PresupuestoInicial";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [valido, setValido] = useState(false);
  const [gastos, setGastos] = useState([]);
  

  return (
    <div className="bg-gray-100 h-full pb-5">
      <Header />
      {valido ? (
        <Dashboard
          presupuesto={presupuesto}
          gastos={gastos}
          setGastos={setGastos}
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
