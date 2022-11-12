import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/navBar'
import ItemListContainer from  './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header'
import Cart from './pages/Cart/Cart'


function App() {

  return ( <BrowserRouter>
      <Header/>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Welcome to ChordsLand'} />}/>
        <Route path='/categoria/:categoriaID' element={<ItemListContainer greeting={'Welcome to ChordsLand'}/>} />
        <Route path='/detail/:productID' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element= {<Navigate to = '/'/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App
