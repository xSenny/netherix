import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import BuildPage from './pages/BuildPage'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/collections/:id' element={<CollectionPage />}></Route>
          <Route path='/build/:id' element={<BuildPage />}></Route>
          <Route path='/search' element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
