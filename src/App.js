import './App.css';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>

    </Router>
  );
}

export default App;


