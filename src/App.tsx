import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { useState } from "react";
import InfoContext from "./contexts/InfoContext";
import { DataAPI } from "./protocols";
import { PagesContainer } from "./App-Styles";

function App() {

  const [infos, setInfos] = useState<DataAPI[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <InfoContext.Provider value={{infos, setInfos, searchTerm, setSearchTerm}}>
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

