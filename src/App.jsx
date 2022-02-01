import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Filtros from "./components/Filtros";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import NuevoPresupuesto from "./components/NuevoPresupuesto";

const App = () => {
  const [presupuesto, setPresupuesto] = useState("");
  const [valido, setValido] = useState(false);
  const [modal, setModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  const guardarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
    setGastoEditar({});
  };

  const editarGasto = (gasto) => {
    const filtroDiferentes = gastos.filter((i) => i.id !== gasto.id);
    setGastos([...filtroDiferentes, gasto]);
    setGastoEditar({});
  };

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
    }
  }, [gastoEditar]);

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
  }, [filtro]);

  const eliminarGasto = (id) => {
    const eliminando = gastos.filter((i) => i.id != id);
    setGastos(eliminando);
  };

  return (
    <div>
      <Header />
      {valido ? (
        <div>
          <Dashboard
            presupuesto={presupuesto}
            setModal={setModal}
            modal={modal}
            guardarGasto={guardarGasto}
            gastos={gastos}
            gastoEditar={gastoEditar}
            setGastoEditar={setGastoEditar}
            editarGasto={editarGasto}
            setGastos={setGastos}
            setPresupuesto={setPresupuesto}
            setValido={setValido}
          />
          <main>
            <Filtros modal={modal} filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              modal={modal}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
        </div>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setValido={setValido}
        />
      )}
    </div>
  );
};

export default App;
