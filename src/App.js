import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import Testimonios from './pages/Testimonios'
import Contacto from './pages/Contacto'

import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <div className="App">

        <Nav />

        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/testimonios">
            <Testimonios />
          </Route>
          <Route path="/catalogo">
            <Catalogo />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App
