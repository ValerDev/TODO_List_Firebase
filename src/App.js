import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
function App() {
  return (
    <Router className="App">
      <AppRouter/>
    </Router>
  );
}

export default App;
