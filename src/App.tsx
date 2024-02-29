import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { styled } from "styled-components"
import { useState } from "react";
import InfoContext from "./contexts/InfoContext";
import { DataAPI } from "./protocols";

function App() {

  const [infos, setInfos] = useState<DataAPI[]>([]);
  console.log(infos, "Flamngo");

  return (
    <InfoContext.Provider value={{infos, setInfos}}>
      <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </PagesContainer>
    </InfoContext.Provider>
  )
}

export default App

const PagesContainer = styled.main`
  padding: 0 auto;
  margin: 0 auto;
  background: rgba(240, 240, 240, 1);
  height: 100vh;
`