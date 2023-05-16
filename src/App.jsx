import { Route, Routes } from "react-router-dom"
import Layout from './components/layout/Layout'
import HomePage from "./pages/HomePage"
import CountryPage from "./pages/CountryPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<HomePage />}/>
          <Route path="/countries/:name" element={<CountryPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
