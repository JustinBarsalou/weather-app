import React from 'react'
import { Switch, Route } from 'react-router'
import Weather from './components/main'

const Router = () => {
    return (
        <Switch>
          <Route path="/Weather" component={Weather} />

        </Switch>
    );
};

export default (Router);