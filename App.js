import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'

import Uielements from './pages/Uielements'
import Home from './pages/Home'
import Brands from './pages/Brands'
import Product from './pages/Product'
import Discount from './pages/Discount'
import MakeUp from './pages/MakeUp'
import Cart from './pages/Cart'
import Member from './pages/Member'
import MemberAdd from './pages/MemberAdd'
import NotFoundPage from './pages/NotFoundPage'

import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    
    <Router>
      <>
        <Menu isAuth={isAuth} setIsAuth={setIsAuth} />
        <Switch>
          <Route path="/Uielements">
            <Uielements />
          </Route>
          <Route path="/Brands">
            <Brands />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/product/:type?/:id?">
            <Product />
          </Route>
          <Route path="/Discount">
            <Discount />
          </Route>
          <Route path="/MakeUp">
            <MakeUp />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/Member">
            <Member isAuth={isAuth} />
          </Route>
          <Route path="/MemberAdd">
            <MemberAdd />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
