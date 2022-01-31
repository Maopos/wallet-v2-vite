import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import NuevoPresupuesto from "./components/NuevoPresupuesto";

const App = () => {
  const [presupuesto, setPresupuesto] = useState("");
  const [valido, setValido] = useState(false);
  const [modal, setModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

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
          />
          <main>
            <ListadoGastos
              gastos={gastos}
              modal={modal}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
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
