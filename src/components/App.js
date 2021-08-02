import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CalculatorForm from './views/CalculatorForm';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={() => <CalculatorForm />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
