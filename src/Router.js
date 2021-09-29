import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import components
import Calculator from './components/Calculator';

class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                {/* Routes Config */}
                <Switch>
                    <Route exact path="/" component={Calculator} />
                </Switch>
                <div></div>
            </BrowserRouter>
        )
    }
}
export default Router;