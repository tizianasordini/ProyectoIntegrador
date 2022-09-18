import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './component/Header/Header'
import Home from './screens/Home/Home'
import Canciones from './screens/Canciones/Canciones'
import Favoritos from './screens/Favoritos/Favoritos'
import Detalle from './screens/Detalle/Detalle'
import NotFound from './screens/NotFound/NotFound'
import Footer from './component/Footer/Footer'

function App() {
  const links = ['Home', 'Favoritos', 'Ver más']
  return (
    <>
      <Header links={links}/>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/Canciones' component={Canciones} />
        <Route path='/Favoritos' component={Favoritos} />
        <Route path='/Detalle/id/:id' component={Detalle} />
        <Route path='' component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
