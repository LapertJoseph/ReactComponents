import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';

import './App.css';
import NotFound from './Pages/NotFound';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/home'>Home</Link>
          <Link to='/form'>Formulaire d'inscription</Link>

        </nav>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/form' element={<Form />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
