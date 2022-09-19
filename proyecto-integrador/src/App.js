import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './component/Header/Header'
import Home from './screens/Home/Home'
import Albumes from './screens/Albumes/Albumes'
import Canciones from './screens/Canciones/Canciones'
import Favoritos from './screens/Favoritos/Favoritos'
import DetalleAlbum from './screens/DetalleAlbum/DetalleAlbum'
import DetalleCancion from './screens/DetalleCancion/DetalleCancion'
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
        <Route path='/Albumes' component={Albumes} />
        <Route path='/Favoritos' component={Favoritos} />
        <Route path='/DetalleAlbum/id/:id' component={DetalleAlbum} />
        <Route path='/DetalleCancion/id/:id' component={DetalleCancion} />
        <Route path='' component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
