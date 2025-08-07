import logo from './logo.svg';
import './App.css';
import Greeting from './components/Example';

import Events from './components/Events';
import ArrayMethods from './components/Arraymethods';
import Table from './components/Table';
import BarChart from './components/BarChart';
import Pie from './components/PieChart';

function App() {
  return (
    <div className="App">
      <Table/>
      <BarChart/>
      <Pie/>
      <ArrayMethods/>
      <Events/>
      {/* <Greeting/> */}
    </div>
  );
}

export default App;
