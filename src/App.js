import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/*import components here*/
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/*import pages here*/
import Contact from './pages/Contact';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
