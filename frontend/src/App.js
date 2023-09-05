import './App.css';
import HomeScreen from './views/HomeScreen';
import Landing from './views/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/map" element={<HomeScreen />} />
    </Routes>
  </Router>
    
  );
}

export default App;