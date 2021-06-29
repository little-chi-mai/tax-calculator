import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CalculatorForm from './views/CalculatorForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <CalculatorForm />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
