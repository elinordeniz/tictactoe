import { useState } from "react";
import Layout from "./Layout";
import { MainProvider } from "./context/MainContext";
function App() {
  return (
    <>
      <MainProvider>
        <Layout />
      </MainProvider>
    </>
  );
}

export default App;
