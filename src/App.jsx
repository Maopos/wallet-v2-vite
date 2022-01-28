import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import NuevoPresupuesto from "./components/NuevoPresupuesto";

const App = () => {
  const [presupuesto, setPresupuesto] = useState("");
  const [valido, setValido] = useState(false);
  const [modal, setModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  

  const guardarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
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
          />
          <main>
            <ListadoGastos gastos={gastos} modal={modal} />
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
