import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Event from './pages/Event';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event/:id' element={<Event />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
