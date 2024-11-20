import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';

function App() {
  return(
    <> 
      <Home />
      <Outlet/>
      
    </>
  )
}

export default App;