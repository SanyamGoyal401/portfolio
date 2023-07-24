import HomePage from './HomePage';
import ContactPage from './ContactPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
