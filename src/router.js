import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing-page/landing-page';
import TeslaS  from './components/tesla-s/tesla-s';
import CartPage from './components/cart-page/cart-page';
import StorePage from './components/store-page/store-page';


export default (
    <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/store" component={StorePage}/>
        <Route path="/cart" component={CartPage}/>
        <Route path="/teslas" component={TeslaS}/>
    </Switch>
)