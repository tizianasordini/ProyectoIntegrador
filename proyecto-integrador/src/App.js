import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './screens/Home/Home'
import VerTodas from './screens/VerTodas/VerTodas'
import Favoritos from './screens/Favoritos/Favoritos'
import Detalle from './screens/Detalle/Detalle'
import NotFound from './screens/NotFound/NotFound'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/VerTodas' component={VerTodas} />
        <Route path='/Favoritos' component={Favoritos} />
        <Route path='/Detalle/:id' component={Detalle} />
        <Route path='' component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
