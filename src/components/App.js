import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CalculatorForm from './views/CalculatorForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <CalculatorForm />} />
          {/* <Route exact path="/result" component={() => <Result />} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
