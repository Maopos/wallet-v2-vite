import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import PresupuestoInicial from "./components/PresupuestoInicial";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [valido, setValido] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    const getPresupuestoLS = () => {
      const presupuestoLs = localStorage.getItem("Presupuesto") ?? "";
      setPresupuesto(presupuestoLs);
      presupuestoLs ? setValido(true) : setValido(false);
    };
    const getGastosLocalStorage = () => {
      const gastosLs = JSON.parse(localStorage.getItem("Gastos")) ?? [];
      setGastos(gastosLs);
    };
    getPresupuestoLS();
    getGastosLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("Gastos", JSON.stringify(gastos));
    localStorage.setItem("Presupuesto", presupuesto);
  }, [gastos, presupuesto]);

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter((i) => i.categoria === filtro);
      setGastosFiltrados(gastosFiltrados);
    } else {
      setGastosFiltrados([]);
    }
  }, [filtro, gastos]);

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
          filtro={filtro}
          setFiltro={setFiltro}
          gastosFiltrados={gastosFiltrados}
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
