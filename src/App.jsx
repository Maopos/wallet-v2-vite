import { useState } from "react";
import Header from "./components/Header";
import PresupuestoInicial from "./components/PresupuestoInicial";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <PresupuestoInicial />
    </div>
  );
}

export default App;
