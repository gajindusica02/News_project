import './styles/App.css';
import NewsContainer from './components/NewsContainer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NewsContainer/>
      </div>
    </Router>
  );
}

export default App;


