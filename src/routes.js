import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
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

            {/* CEIA 2020-2021 */}
            <Route path="/ceia-ano-novo" component={CeiaNatalPage} />
            <Redirect from="/ceia-natal" to="/ceia-ano-novo" />

        </Switch>
    </HashRouter>
)

export default Routes;