import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// pages
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import OrderSentPage from './pages/OrderSentPage';
import SalesPage from './pages/SalesPage';
import PreOrderPage from './pages/PreOrderPage';
import CeiaNatalPage from './pages/CeiaNatalPage';

const Routes = () => (
    <HashRouter>
        <ScrollToTop />
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/order" component={OrderPage} />
            <Route path="/order-sent" component={OrderSentPage} />

            {/* SALES FUNNEL */}
            <Route path="/mulheres-chocadas" component={SalesPage} />
            <Route path="/checando-vagas" component={PreOrderPage} />

            {/* CEIA DE NATAL */}
            <Route path="/ceia-natal" component={CeiaNatalPage} />

        </Switch>
    </HashRouter>
)

export default Routes;