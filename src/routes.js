import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nopage from "./pages/nopage";
import Indexpage from './pages/index';
import Barcodefunction from './pages/barcode_generator';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/app" component={Indexpage}/>
                <Route path="/barcode" component={Barcodefunction}/>
                <Route component={Nopage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;