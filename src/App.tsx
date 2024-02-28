import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { styled } from "styled-components"

function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

export default App

const PagesContainer = styled.main`
  padding: 0 auto;
  margin: 0 auto;
  background: rgba(240, 240, 240, 1);
  height: 100vh;
`